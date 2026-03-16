import { z } from "zod";

export const activityDetailsSchema = z
  .object({
    activityName: z.string().min(1, "Activity name is required"),
    category: z.enum([
      "Adventure & Stories",
      "Creative Expression",
      "Food & Drink",
      "Learning & Development",
      "Sports and Fitness",
      "Volunteering",
      "Other",
    ]),
    otherCategory: z.string().optional(),
    description: z.string().optional(),
    activityType: z.enum(["Indoor", "Outdoor", "Virtual"]),
    locationType: z.enum(["Provider Location", "User Location"]),
    minimumMembers: z.number().min(1, "Must be at least 1"),
    maximumMembers: z.number().min(1, "Must be at least 1"),
  })
  .refine((data) => data.category !== "Other" || data.otherCategory, {
    message: "Please specify the category",
    path: ["otherCategory"],
  })
  .refine((data) => data.maximumMembers >= data.minimumMembers, {
    message: "Maximum must be greater than or equal to minimum",
    path: ["maximumMembers"],
  });

export const locationDetailsSchema = z.object({
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(1, "ZIP code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  countryCode: z.string().min(1),
  contactNumber: z.string().min(7, "Valid phone number required"),
  contactName: z.string().min(1, "Contact name is required"),
});

export type ActivityDetailsFormData = z.infer<typeof activityDetailsSchema>;
export type LocationDetailsFormData = z.infer<typeof locationDetailsSchema>;
export type CombinedActivityData = ActivityDetailsFormData &
  LocationDetailsFormData;
