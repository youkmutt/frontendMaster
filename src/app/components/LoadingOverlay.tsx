"use client";

import { ProgressSpinner } from "primereact/progressspinner";
import { useLoading } from "../context/LoadingContext";

export default function LoadingOverlay() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="5"
      />
    </div>
  );
}
