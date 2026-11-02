"use client";

import { sendSms } from "@/lib/sms";


export default function SmsButton() {
  async function handleSend() {
    const result = await sendSms(
      "+1234567890",
      "Hello from OpenSMS API!"
    );

    if (result.success) {
      alert("SMS sent successfully!");
    } else {
      alert(`Failed: ${result.error}`);
    }
  }

  return (
    <button onClick={handleSend}>
      Send SMS
    </button>
  );
}