import mongoose from "mongoose";
import validator from "validator";


const youtubeEmbedRegex =
  /^https?:\/\/(www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+|videoseries\?list=[a-zA-Z0-9_-]+|live_stream\?channel=[a-zA-Z0-9_-]+)(\?.*)?$/;

const courseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Please specify the type"],
      enum: {
        values: ["questions", "course", "doubts" , 'others'],
        message: "Category must be 'questions', 'lecture',  'exercise' , or 'others'",
      },
    },
    title: {
      type: String,
      required: [true, "Please enter title1"],
      minlength: [2, "Title1 must be at least 2 characters"],
      maxlength: [50, "Title1 must not exceed 15 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter title1"],
    },
    videoUrl: {
          type: String,
          required: [true, "YouTube Embed URL is required"],
          unique:true,
          validate: {   
            validator: (value) =>
              validator.isURL(value) && youtubeEmbedRegex.test(value),
            message: "Invalid YouTube Embed URL! Must be a valid embed link.",
          },
        },

  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);



// Create and export model
const Course = mongoose.model("Course", courseSchema);
export default Course;
