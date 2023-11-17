import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate  from "mongoose-paginate-v2"
const productSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    author: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    originalPrice: {
      type: String,
      require: true
    },
  },
  { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
