import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { getUserById } from "@/lib/database/actions/user.action";
import { plans } from "../../../../constants";
import Checkout from "@/components/shared/Checkout";
import { Check, X, Zap } from "lucide-react";

const CreditsPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="credits-list">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item">
              <div className="flex-center flex-col gap-3">
                <Zap
                  size={50}
                  color="#2b3674"
                  className=" p-2 bg-[#e9edf6] rounded-full"
                />
                <p className="p-20-semibold mt-2 text-[#3a72ec]">{plan.name}</p>
                <p className="h1-semibold text-dark-600">${plan.price}</p>
                <p className="p-16-regular">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    {inclusion.isIncluded ? (
                      <Check size={20} color="#00a23c" />
                    ) : (
                      <X size={20} color="#e74032" />
                    )}
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button
                  variant="outline"
                  className="button hover:text-white w-full"
                >
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CreditsPage;
