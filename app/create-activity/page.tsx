"use client";

import { useState } from "react";
import ActivityDetailsForm from "@/components/forms/ActivityDetailsForm";
import LocationDetailsForm from "@/components/forms/LocationDetailsForm";
import StepTabs from "@/components/ui/StepTabs";
import SuccessModal from "@/components/ui/SuccessModal";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {
  ActivityDetailsFormData,
  LocationDetailsFormData,
  CombinedActivityData,
} from "@/types/activity";

export default function CreateActivityPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [step1Data, setStep1Data] = useState<Partial<ActivityDetailsFormData>>(
    {}
  );
  const [step2Data, setStep2Data] = useState<Partial<LocationDetailsFormData>>(
    {}
  );
  const [showModal, setShowModal] = useState(false);

  const handleStep1Next = (data: ActivityDetailsFormData) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Back = () => {
    setCurrentStep(1);
  };

  const handleStep2Submit = async (data: LocationDetailsFormData) => {
    setStep2Data(data);
    const combinedData: CombinedActivityData = {
      ...(step1Data as ActivityDetailsFormData),
      ...data,
    };
    console.log("Form submitted:", combinedData);
    try {
      const response = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(combinedData),
      });
      const result = await response.json();
      console.log("Saved to DB:", result);
    } catch (error) {
      console.error("Error saving to DB:", error);
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setStep1Data({});
    setStep2Data({});
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-5">
            Create new Activity
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <div className="w-full md:w-44 md:flex-shrink-0">
              <StepTabs currentStep={currentStep} />
            </div>
            <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              {currentStep === 1 && (
                <ActivityDetailsForm
                  defaultValues={step1Data}
                  onNext={handleStep1Next}
                />
              )}
              {currentStep === 2 && (
                <LocationDetailsForm
                  defaultValues={step2Data}
                  onBack={handleStep2Back}
                  onSubmit={handleStep2Submit}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <SuccessModal isOpen={showModal} onClose={handleModalClose} />
    </div>
  );
}
