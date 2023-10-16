import mongoose from "mongoose";
const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        },
      imageUrl: { 
        type: String, 
        required: true 
        },
      name: { 
        type: String, 
        required: true 
        },
      promotionalPrice: { 
        type: Number, 
        required: true 
        },
      originalPrice: { 
        type: Number, 
        required: true 
        },
      author: { 
        type: String, 
        required: true 
        },
      quantity: { 
        type: Number, 
        default: 1 
        },
    },
  ],
});
export default mongoose.model("Cart", cartSchema);
