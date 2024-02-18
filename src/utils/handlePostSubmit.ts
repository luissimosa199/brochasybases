"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { replaceImages } from "./replaceImages";
import dbConnect from "@/lib/dbConnect";
import { PostModel } from "@/lib/PostModel";

export const handlePostSubmit = async (
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData
): Promise<{
  success: boolean;
  message: string;
}> => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      success: false,
      message: "Es necesario iniciar sesión para publicar",
    };
  }

  const text = formData.get("text") as string;
  if (!text) {
    return {
      success: false,
      message: "Publicación no tiene contenido",
    };
  }

  const finalHtml = await replaceImages(text);

  const post = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    text: finalHtml,
    tags: JSON.parse(formData.get("tags") as string),
    image: formData.get("image"),
    author: session?.user?.email,
    visible: true,
    links: JSON.parse(formData.get("links") as string),
    metadata: {
      title: formData.get("title"),
      description: formData.get("description"),
    },
  };

  try {
    await dbConnect();
    const savedPost = new PostModel(post);
    await savedPost.save();
    return {
      success: true,
      message: "Publicación guardad con éxito",
    };
  } catch (err) {
    return {
      success: false,
      message: `Error: ${JSON.stringify(err)}`,
    };
  }
};
