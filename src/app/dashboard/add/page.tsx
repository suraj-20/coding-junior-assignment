"use client";

import { useState } from "react";
import Step1 from "@/components/StepForm/Step1";
import Step2 from "@/components/StepForm/Step2";
import Step3 from "@/components/StepForm/Step3";

export default function AddUserPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    zip: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const updateData = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    console.log("User Submitted:", formData);
    alert("User Added Successfully!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {step === 1 && <Step1 data={formData} update={updateData} next={next} />}
      {step === 2 && (
        <Step2 data={formData} update={updateData} next={next} back={back} />
      )}
      {step === 3 && (
        <Step3 data={formData} back={back} submit={handleSubmit} />
      )}
      <button
        className="mt-6 text-blue-500"
        onClick={() => (window.location.href = "/dashboard")}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}
