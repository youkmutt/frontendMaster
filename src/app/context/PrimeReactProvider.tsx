"use client";

import { PrimeReactProvider } from "primereact/api";
import React from "react";
import Tailwind from "primereact/passthrough/tailwind";

export default function PrimeReactProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrimeReactProvider
      value={{
        unstyled: true, // IMPORTANT: Enable unstyled mode for full Tailwind control
        pt: Tailwind, // Uncomment this line to use PrimeReact's built-in Tailwind passthrough
        // ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge }, // If using twMerge
      }}
    >
      {children}
    </PrimeReactProvider>
  );
}
