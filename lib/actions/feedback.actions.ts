// Server Action
"use server";
import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";

import Feedback from "../database/models/feedback.model";
import { CreateFeedbackParams } from "@/types";

// Create Feedback
export async function createFeedback({ name, message }: CreateFeedbackParams) {
  try {
    await connectToDatabase();

    const newFeedback = await Feedback.create({ name, message });

    return JSON.parse(JSON.stringify(newFeedback));
  } catch (error) {
    handleError(error);
  }
}

//  Get All Feedbacks
export async function getAllFeedbacks() {
  try {
    await connectToDatabase();

    const allFeedback = await Feedback.find({});

    return JSON.parse(JSON.stringify(allFeedback));
  } catch (error) {
    handleError(error);
  }
}
