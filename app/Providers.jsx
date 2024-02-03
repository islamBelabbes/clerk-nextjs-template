"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
function Providers({ children }) {
  return (
    <Suspense>
      <ClerkProvider>{children}</ClerkProvider>
    </Suspense>
  );
}

export default Providers;
