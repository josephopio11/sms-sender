
"use server";

export async function sendSms(number: string, text: string) {
  try {
    const response = await fetch("http://127.0.0.1:9292/sms/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENSMS_API_KEY}`,
      },
      body: JSON.stringify({
        number,
        text,
      }),
      cache: "no-store",
    });

    const data = await response.json().catch(() => null);

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
