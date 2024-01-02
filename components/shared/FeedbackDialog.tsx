import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { FeedbackForm } from "./FeedbackForm";

const FeedbackDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-2 p-medium-16 text-primary-50">
          <p>Any Feedbacks?</p>
          <Image
            src="/assets/icons/feedback.png"
            alt="feedback"
            width={24}
            height={24}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-primary-50">
        <DialogHeader>
          <DialogTitle className="h3-medium">Feedback</DialogTitle>
          <DialogDescription>
            Your feedback is valuable to us! Please take a moment to share your
            thoughts, suggestions, or any comments you may have.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm />
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
