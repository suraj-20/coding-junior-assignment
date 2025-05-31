"use client";

interface Step3Props {
  data: {
    name: string;
    email: string;
    street: string;
    city: string;
    zip: string;
  };
  back: () => void;
  submit: () => void;
}

export default function Step3({ data, back, submit }: Step3Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Review & Confirm</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Street:</strong> {data.street}
        </p>
        <p>
          <strong>City:</strong> {data.city}
        </p>
        <p>
          <strong>Zip Code:</strong> {data.zip}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded"
          onClick={back}
        >
          Back
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={submit}
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}
