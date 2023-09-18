import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate  from "mongoose-paginate-v2"
const authorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true
    },
  },
  { timestamps: true, versionKey: false }
);
authorSchema.plugin(mongoosePaginate);
export default mongoose.model("Author", authorSchema);
