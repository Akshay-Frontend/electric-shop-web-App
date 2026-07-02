import { LockKeyholeOpen, ShieldCheck } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

import React from "react";

const ProtectedRoute = () => {
  return (
    <div className="my-6 w-full flex items-center justify-center px-4">
      <div className="rounded-2xl border w-full md:w-md border-red-100 bg-white py-4 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 ring-8 ring-red-50">
          <LockKeyholeOpen />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Login Required
        </h2>

        <p className="mt-2 px-6 text-gray-500 leading-relaxed">
          Please sign in to continue. You need an account to access this page
          and enjoy all features.
        </p>

        <div className="mt-8 px-4">
          <SignInButton mode="modal">
            <button className="w-full rounded-xl bg-red-500 px-6 py-3.5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-lg active:scale-95 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <ShieldCheck className="h-4 w-4 text-green-500" />
          <span>Your account is protected & secure.</span>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
