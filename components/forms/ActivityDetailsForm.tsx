"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  activityDetailsSchema,
  ActivityDetailsFormData,
} from "@/types/activity";
import FormField from "@/components/ui/FormField";

interface ActivityDetailsFormProps {
  defaultValues?: Partial<ActivityDetailsFormData>;
  onNext: (data: ActivityDetailsFormData) => void;
}

export default function ActivityDetailsForm({
  defaultValues,
  onNext,
}: ActivityDetailsFormProps) {
  const {
    register,
    handleSubmit,
    watch,
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
  const onSubmit = (data: ActivityDetailsFormData) => onNext(data);

  return (
    <form className="flex flex-col gap-6">
      <FormField
        label="Activity Name"
        required
        error={errors.activityName?.message}
      >
        <input
          {...register("activityName")}
          placeholder="Eg. Cycling Lesson This Aft..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </FormField>

      <FormField
        label="Select the best category to describe your activity"
        required
        error={errors.category?.message}
      >
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Adventure & Stories"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Adventure & Stories
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Creative Expression"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Creative Expression
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Food & Drink"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Food & Drink
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Learning & Development"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Learning & Development
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Sports and Fitness"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Sports and Fitness
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Volunteering"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Volunteering
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Other"
              {...register("category")}
              className="accent-black w-4 h-4"
            />
            Other
          </label>

          {selectedCategory === "Other" && (
            <div className="mt-2">
              <input
                {...register("otherCategory")}
                placeholder="Specify the category"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.otherCategory && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.otherCategory.message}
                </p>
              )}
            </div>
          )}
        </div>
      </FormField>

      <FormField label="About the activity" error={errors.description?.message}>
        <textarea
          {...register("description")}
          placeholder="Activity Description"
          rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />
      </FormField>

      <FormField
        label="Please select the activity type"
        required
        error={errors.activityType?.message}
      >
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Indoor"
              {...register("activityType")}
              className="accent-black w-4 h-4"
            />
            Indoor
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Outdoor"
              {...register("activityType")}
              className="accent-black w-4 h-4"
            />
            Outdoor
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Virtual"
              {...register("activityType")}
              className="accent-black w-4 h-4"
            />
            Virtual
          </label>
        </div>
      </FormField>

      <FormField
        label="Please select the type of location"
        required
        error={errors.locationType?.message}
      >
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="Provider Location"
              {...register("locationType")}
              className="accent-black w-4 h-4"
            />
            Provider Location
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              value="User Location"
              {...register("locationType")}
              className="accent-black w-4 h-4"
            />
            User Location
          </label>
        </div>
      </FormField>

      <FormField
        label="How many members can take part in the activity?"
        error={
          errors.maximumMembers?.message || errors.minimumMembers?.message
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Minimum Members
            </label>
            <input
              type="number"
              min={1}
              {...register("minimumMembers", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.minimumMembers && (
              <p className="text-xs text-red-500 mt-1">
                {errors.minimumMembers.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Maximum Members
            </label>
            <input
              type="number"
              min={1}
              {...register("maximumMembers", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.maximumMembers && (
              <p className="text-xs text-red-500 mt-1">
                {errors.maximumMembers.message}
              </p>
            )}
          </div>
        </div>
      </FormField>

      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-gray-900 hover:bg-black text-white font-medium py-2.5 rounded-md text-sm transition-colors mt-2"
      >
        Save and Continue
      </button>
    </form>
  );
}
