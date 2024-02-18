import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";

class Link {
  url: string;
  title: string;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "posts",
  },
  options: {
    allowMixed: 0,
  },
})
export class Post {
  @prop({ default: () => uuidv4() })
  _id: string;

  @prop({ required: true })
  title: string;

  @prop({ required: true, unique: true })
  slug: string;

  @prop({ required: true })
  text: string;

  @prop({ type: () => [String], required: true })
  tags: string[];

  @prop({ required: true })
  image: string;

  @prop({ required: true })
  author: string;

  @prop({ required: true })
  visible: boolean;

  @prop({ type: () => Object, required: false })
  metadata?: Record<string, any>;

  @prop({ type: () => [Link] })
  links?: Link[];
}

export const PostModel = mongoose.models.Post || getModelForClass(Post);
