"use client";

import { sendSms } from "@/lib/sms";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export default function SmsButton() {
  const [countryCode,setCountryCode]=useState("")
  const [phone,setPhone]=useState("")
  const [smsMessage,setSmsMessage]=useState("")
  async function handleSend(countryCode: string,phone:string,smsMessage:string) {
    if(!countryCode||!phone||!smsMessage){
      return
    }
    const telephoneNumber = '+'+countryCode+phone

    // const result = await sendSms(
    //   "+601136207563",
    //   "Hello from OpenSMS API!"
    // );

    const result = await sendSms(telephoneNumber,smsMessage)

    if (result.success) {
      alert("SMS sent successfully!");
    } else {
      alert(`Failed: ${result.error}`);
    }
  }

  return (
    <div className="grid grid-cols-1">
      <Input id="countryCode"/>

    <Button onClick={()=>handleSend}>
      Send SMS
    </Button>
    </div>
  );
}