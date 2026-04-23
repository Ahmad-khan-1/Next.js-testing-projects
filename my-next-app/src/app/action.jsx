"use server";
export async function sendMessage(text) {

    await new Promise((res) => setTimeout(res, 1000))

    return text;


}
