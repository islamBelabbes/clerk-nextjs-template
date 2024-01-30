"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
function Providers({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default Providers;
