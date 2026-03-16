"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  locationDetailsSchema,
  LocationDetailsFormData,
} from "@/types/activity";
import FormField from "@/components/ui/FormField";
import PhoneInput from "@/components/ui/PhoneInput";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

interface LocationDetailsFormProps {
  defaultValues?: Partial<LocationDetailsFormData>;
  onBack: () => void;
  onSubmit: (data: LocationDetailsFormData) => void;
}

export default function LocationDetailsForm({
  defaultValues,
  onBack,
  onSubmit,
}: LocationDetailsFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LocationDetailsFormData>({
    resolver: zodResolver(locationDetailsSchema),
    defaultValues: {
      countryCode: "+1",
      ...defaultValues,
    },
  });

  const countryCode = watch("countryCode");
  const contactNumber = watch("contactNumber");

  return (
    <form className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-gray-900">
          Location Details
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Please specify the address for where the activity takes place.
        </p>
      </div>

      <FormField
        label="Address Line 1"
        required
        error={errors.addressLine1?.message}
      >
        <input
          {...register("addressLine1")}
          placeholder="House number and street name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </FormField>

      <FormField label="Address Line 2" error={errors.addressLine2?.message}>
        <input
          {...register("addressLine2")}
          placeholder="Other information, e.g., building name, landmark, etc."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </FormField>

      <FormField label="ZIP Code" required error={errors.zipCode?.message}>
        <input
          {...register("zipCode")}
          placeholder="eg. 123 467"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="City" required error={errors.city?.message}>
          <input
            {...register("city")}
            placeholder="Your City"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </FormField>

        <FormField label="State" required error={errors.state?.message}>
          <select
            {...register("state")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-700"
          >
            <option value="">Your State</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <div>
        <h2 className="text-base font-semibold text-gray-900">
          Contact details
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Please provide contact information for this activity.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <PhoneInput
          countryCode={countryCode}
          onCountryCodeChange={(code) => setValue("countryCode", code)}
          value={contactNumber ?? ""}
          onChange={(val) =>
            setValue("contactNumber", val, { shouldValidate: true })
          }
          error={errors.contactNumber?.message}
          placeholder="Contact Number"
        />
        <FormField error={errors.contactName?.message}>
          <input
            {...register("contactName")}
            placeholder="Contact Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </FormField>
      </div>

      <div className="flex gap-3 justify-end mt-2">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white rounded-md text-sm font-medium transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
