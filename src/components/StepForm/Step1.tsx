"use client";

import { useState } from "react";

interface Step1Props {
  data: {
    name: string;
    email: string;
  };
  update: (field: string, value: string) => void;
  next: () => void;
}

export default function Step1({ data, update, next }: Step1Props) {
  const [error, setError] = useState("");

  const validateAndNext = () => {
    if (!data.name || !data.email) {
      setError("Both fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    next();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Basic Info</h2>

      <input
        className="w-full p-2 border mt-2"
        placeholder="Name"
        value={data.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          update("name", e.target.value)
        }
      />
      <input
        className="w-full p-2 border mt-2"
        placeholder="Email"
        value={data.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          update("email", e.target.value)
        }
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="flex justify-end mt-4">
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
