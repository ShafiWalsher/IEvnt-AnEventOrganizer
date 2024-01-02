"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { feedbackFormSchema } from "@/lib/validator";
import { createFeedback } from "@/lib/actions/feedback.actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DialogClose } from "../ui/dialog";

export function FeedbackForm() {
  const router = useRouter();
  // Initial values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Form Schema
  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: initialValues,
  });

  // Submit handler.
  async function onSubmit(values: z.infer<typeof feedbackFormSchema>) {
    try {
      const newFeedback = await createFeedback({
        name: values.name,
        message: values.message,
      });

      if (newFeedback) {
        form.reset();
        toast.success("Feedback sent successfully");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable send feedback, Try again later!.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} className="input-field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <Textarea
                  placeholder="Feedback message..."
                  {...field}
                  className="textarea rounded-2xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button type="submit" size="lg" className="w-full text-md">
            Send
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
}
