"use server";

import { Resend } from "resend";

import { renderContactEmailHtml } from "@/lib/email-template";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO ?? "hello@brewdminds.com";
const CONTACT_EMAIL_FROM = process.env.CONTACT_EMAIL_FROM ?? "Brewdminds <onboarding@resend.dev>";

const GENERIC_ERROR = "Something went wrong sending your message. Please try again or email us directly.";

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: a hidden field real visitors never see or fill in. If it's
  // filled, silently report success so the bot moves on without learning
  // anything, but skip the actual send.
  if (String(formData.get("company_site") ?? "").trim() !== "") {
    return { status: "success" };
  }

  if (formData.get("not_robot") !== "on") {
    return { status: "error", message: "Please confirm you're not a robot." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return { status: "error", message: GENERIC_ERROR };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: CONTACT_EMAIL_FROM,
      to: CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: renderContactEmailHtml({ name, email, phone, company, service, message }),
    });

    if (error) {
      console.error("Resend rejected the contact email:", error);
      return { status: "error", message: GENERIC_ERROR };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return { status: "error", message: GENERIC_ERROR };
  }
}
