import { connectDB } from "@/lib/db";
import User from "@/models/userModel";

export async function POST(request) {
  try {
    await connectDB();
    const user = await request.json();

    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return Response.json({ error: "Email already exists" }, { status: 409 });
    }

    const newUser = await User.create(user);
    return Response.json(newUser, {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
