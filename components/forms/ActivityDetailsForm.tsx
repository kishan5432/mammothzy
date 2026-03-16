"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  activityDetailsSchema,
  ActivityDetailsFormData,
} from "@/types/activity";
import FormField from "@/components/ui/FormField";
import RadioOption from "@/components/ui/RadioOption";

interface ActivityDetailsFormProps {
  defaultValues?: Partial<ActivityDetailsFormData>;
  onNext: (data: ActivityDetailsFormData) => void;
}

export default function ActivityDetailsForm({
  defaultValues,
  onNext,
}: ActivityDetailsFormProps) {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ActivityDetailsFormData>({
    resolver: zodResolver(activityDetailsSchema),
    defaultValues: {
      category: "Other",
      activityType: "Indoor",
      ...defaultValues,
    },
  });

  const selectedCategory = watch("category");
  const selectedActivityType = watch("activityType");
  const selectedLocationType = watch("locationType");
  const onSubmit = (data: ActivityDetailsFormData) => onNext(data);

  return (
    <form className="flex flex-col gap-5">
      <h2 className="text-base font-semibold text-gray-900">Activity Details</h2>

      <FormField label="Activity Name" required error={errors.activityName?.message}>
        <input
          value={watch("activityName") ?? ""}
          onChange={(e) => setValue("activityName", e.target.value)}
          placeholder="Eg. Cycling Lesson This Aft..."
          className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </FormField>

      <FormField
        label="Select the best category to describe your activity"
        required
        error={errors.category?.message}
      >
        <div className="flex flex-col gap-2">
          {[
            "Adventure & Stories",
            "Creative Expression",
            "Food & Drink",
            "Learning & Development",
            "Sports and Fitness",
            "Volunteering",
            "Other",
          ].map((cat) => (
            <RadioOption
              key={cat}
              name="category"
              value={cat}
              label={cat}
              checked={selectedCategory === cat}
              onChange={() => setValue("category", cat as ActivityDetailsFormData["category"], { shouldValidate: true })}
            />
          ))}

          {selectedCategory === "Other" && (
            <div className="mt-1">
              <input
                value={watch("otherCategory") ?? ""}
                onChange={(e) => setValue("otherCategory", e.target.value)}
                placeholder="Specify the category"
                className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              {errors.otherCategory && (
                <p className="text-xs text-red-500 mt-1">{errors.otherCategory.message}</p>
              )}
            </div>
          )}
        </div>
      </FormField>

      <FormField label="About the activity" error={errors.description?.message}>
        <textarea
          value={watch("description") ?? ""}
          onChange={(e) => setValue("description", e.target.value)}
          placeholder="Activity Description"
          rows={4}
          className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
        />
      </FormField>

      <FormField
        label="Please select the activity type"
        required
        error={errors.activityType?.message}
      >
        <div className="flex flex-col gap-2">
          {["Indoor", "Outdoor", "Virtual"].map((type) => (
            <RadioOption
              key={type}
              name="activityType"
              value={type}
              label={type}
              checked={selectedActivityType === type}
              onChange={() => setValue("activityType", type as ActivityDetailsFormData["activityType"], { shouldValidate: true })}
            />
          ))}
        </div>
      </FormField>

      <FormField
        label="Please select the type of location"
        required
        error={errors.locationType?.message}
      >
        <div className="flex flex-col gap-2">
          {["Provider Location", "User Location"].map((loc) => (
            <RadioOption
              key={loc}
              name="locationType"
              value={loc}
              label={loc}
              checked={selectedLocationType === loc}
              onChange={() => setValue("locationType", loc as ActivityDetailsFormData["locationType"], { shouldValidate: true })}
            />
          ))}
        </div>
      </FormField>

      <FormField
        label="How many members can take part in the activity?"
        error={errors.maximumMembers?.message || errors.minimumMembers?.message}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              min={1}
              placeholder="Minimum Members"
              value={watch("minimumMembers") ?? ""}
              onChange={(e) => setValue("minimumMembers", Number(e.target.value), { shouldValidate: true })}
              className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.minimumMembers && (
              <p className="text-xs text-red-500 mt-1">{errors.minimumMembers.message}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              min={1}
              placeholder="Maximum Members"
              value={watch("maximumMembers") ?? ""}
              onChange={(e) => setValue("maximumMembers", Number(e.target.value), { shouldValidate: true })}
              className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.maximumMembers && (
              <p className="text-xs text-red-500 mt-1">{errors.maximumMembers.message}</p>
            )}
          </div>
        </div>
      </FormField>

      <div>
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="bg-slate-900 hover:bg-black text-white font-medium py-2 px-5 rounded-2xl text-sm transition-colors"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
}
