import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate  from "mongoose-paginate-v2"
const productSchema = mongoose.Schema(
  {
    img: String,
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
    price: String,
    
  },
  { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
