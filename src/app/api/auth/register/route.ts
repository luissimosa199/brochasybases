import dbConnect from "../../../../lib/dbConnect";
import { UserModel } from "../../../../lib/UserModel";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ error: "Method Not Supported" }, { status: 405 });
  }

  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return Response.json(
      { error: "Campos requeridos incompletos." },
      { status: 400 }
    );
  }

  await dbConnect();

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return Response.json(
        { error: "Usuario con el mismo mail ya existe" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      role: "USER",
    });
    await user.save();

    return Response.json(
      { error: "Usuario registrado correctamente." },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: `Error: ${JSON.stringify(error)}` },
      { status: 500 }
    );
  }
}
