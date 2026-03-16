import mongoose, { Schema, Document } from "mongoose";
import { CombinedActivityData } from "@/types/activity";

interface IActivity extends CombinedActivityData, Document {}

const ActivitySchema = new Schema<IActivity>({
  activityName: { type: String, required: true },
  category: { type: String, required: true },
  otherCategory: { type: String },
  description: { type: String },
  activityType: {
    type: String,
    enum: ["Indoor", "Outdoor", "Virtual"],
    required: true,
  },
  locationType: {
    type: String,
    enum: ["Provider Location", "User Location"],
    required: true,
  },
  minimumMembers: { type: Number, required: true },
  maximumMembers: { type: Number, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  zipCode: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  countryCode: { type: String, default: "+1" },
  contactNumber: { type: String, required: true },
  contactName: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Activity ||
  mongoose.model<IActivity>("Activity", ActivitySchema);
