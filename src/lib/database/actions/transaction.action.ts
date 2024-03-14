"use server"

import Stripe from "stripe"
import { plans } from "../../../../constants";
import { redirect } from "next/navigation";
import { handleError } from "@/lib/utils";
import { connectToDatabase } from "../mongoose";
import Transaction from "../models/transaction.model";
import { updateCredits } from "./user.action";

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const amount = Number(transaction.amount) * 100

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "USD",
          unit_amount: amount,
          product_data: {
            name: transaction.plan,
          },
        },
        quantity: 1,
      },
    ],
    billing_address_collection: "required",
    metadata: {
      plan: transaction.plan,
      credits: transaction.credits,
      buyerId: transaction.buyerId,
    },

    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard`,
  });

  redirect(session.url!)
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    await connectToDatabase()

    const newTransaction = await Transaction.create({
      ...transaction, buyer: transaction.buyerId,
    })
    await updateCredits(transaction.buyerId, transaction.credits)

    return JSON.parse(JSON.stringify(newTransaction))
  } catch (error) {
    handleError(error)
  }
}