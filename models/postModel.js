import { Schema, model } from "mongoose";

const postSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the title "],
    },
    description: {
      type: String,
      required: [true, "Please add the description"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Post", postSchema);
