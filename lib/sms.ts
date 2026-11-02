
"use server";

export async function sendSms(number: string, text: string) {
  try {
    const SERVER_IP = process.env.OPENSMS_SERVER_ADDRESS
    const SERVER_PORT = process.env.OPENSMS_SERVER_PORT
    const API_KEY = process.env.OPENSMS_API_KEY

    console.log("The SMS server IP is",SERVER_IP)
    console.log("The SMS server PORT is",SERVER_PORT)
    console.log("The API KEY is",API_KEY)

    if (!SERVER_IP||!SERVER_PORT){
      return {
      success: false,
      error:  "Please check your OPENSMS server IP or PORT",
    };
    }

if (!API_KEY){
      return {
      success: false,
      error:  "Please check your OPENSMS API KEY",
    };
    }

    console.log("response entering")
    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/sms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        number,
        text,
      }),
      cache: "no-store",
    });
    console.log("something happening here")

    const data = await response.json().catch(() => null);
    console.table(data)

    if (!response.ok) {
      return {
        success: false,
        error: data?.message || `HTTP Error: ${response.status}`,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send SMS",
    };
  }
}
