import React from "react";

export default function NotFoundPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex flex-col justify-between items-center mb-4">
        <h1 className="text-5xl font-bold text-fa-primary">404</h1>
        <p className="text-fa-primary mt-4">
          Requested resource is not available.
        </p>
      </div>
    </div>
  );
}
