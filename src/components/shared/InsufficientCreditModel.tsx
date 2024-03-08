"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import Lottie from "react-lottie";
import * as animationData from "../../../public/diamond.json";

export const InsufficientCreditsModal = () => {
  const router = useRouter();


   const lottieOptions = {
     loop: true,
     autoplay: true,
     animationData:animationData,
     rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
     },
   };

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex-between">
            <p className="p-16-semibold text-dark-400">Insufficient Credits</p>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent"
              onClick={() => router.push("/profile")}
            >
              <X size={25} className=" text-[#7986ac]" />
            </AlertDialogCancel>
          </div>

          <div className=" flex items-center justify-center">
            <Lottie options={lottieOptions} height={200} width={200} />
          </div>

          <AlertDialogTitle className="p-24-bold text-dark-600 text-center">
            Oops.... Looks like you&#39;ve run out of free credits!
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular py-3 text-center">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="button w-full bg-purple-100 text-dark-400"
            onClick={() => router.push("/profile")}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="button w-full bg-purple-100 text-dark-400 hover:text-white"
            onClick={() => router.push("/credits")}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
