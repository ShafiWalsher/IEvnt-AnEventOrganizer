import { Schema, model, models } from "mongoose";

export type IFeedbackItem = {
  _id: string;
  name: string;
  message: string;
};

const FeedbackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
