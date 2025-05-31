"use client";

import { useState } from "react";

interface Step2Props {
  data: {
    street: string;
    city: string;
    zip: string;
  };
  update: (field: string, value: string) => void;
  next: () => void;
  back: () => void;
}

export default function Step2({ data, update, next, back }: Step2Props) {
  const [error, setError] = useState("");

  const validateAndNext = () => {
    if (!data.street || !data.city || !data.zip) {
      setError("All address fields are required.");
      return;
    }

    if (!/^\d{5,6}$/.test(data.zip)) {
      setError("Please enter a valid zip code.");
      return;
    }

    setError("");
    next();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Address</h2>

      <input
        className="w-full p-2 border mt-2"
        placeholder="Street"
        value={data.street}
        onChange={(e) => update("street", e.target.value)}
      />
      <input
        className="w-full p-2 border mt-2"
        placeholder="City"
        value={data.city}
        onChange={(e) => update("city", e.target.value)}
      />
      <input
        className="w-full p-2 border mt-2"
        placeholder="Zip Code"
        value={data.zip}
        onChange={(e) => update("zip", e.target.value)}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="flex gap-4 mt-4">
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded"
          onClick={back}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={validateAndNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
