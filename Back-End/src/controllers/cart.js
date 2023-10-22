import Cart from "../models/cart";

export const getCartOfUser = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    if (!cart) {
      const newCart = await Cart.create({ userId: user._id });
      return res.status(200).json({
        message: "Giỏ hàng trống",
        cart: newCart,
      });
    }

    if (cart.items.length === 0) {
      return res.status(200).json({
        message: "Giỏ hàng trống",
        cart,
      });
    }

    return res.status(200).json({
      message: "Lấy giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const addItemToCart = async (req, res) => {
  try {
    const body = req.body;

    const cart = await Cart.findOne({ userId: body.userId });

    /* nếu không có cart thì tạo mới */
    if (!cart) {
      /* thêm sản mới sản phẩm vào giỏ hàng */
      const newCart = await Cart.create(body);
      return res.status(200).json({
        message: "Sản phẩm đã thêm vào giỏ hàng",
        cart: newCart,
      });
    }

    /* nếu có cart rồi thì kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa */
    const itemExist = await cart.items.find(
      (item) => item.productId == body.items[0].productId
    );

    if (itemExist) {
      /* nếu sản phẩm đã tồn tại trong giỏ hàng thì tăng số lượng lên 1 */
      itemExist.quantity = itemExist.quantity + body.items[0].quantity;
      /* save */
      await cart.save();
      return res.status(200).json({
        message: "Sản phẩm đã thêm vào giỏ hàng",
        cart: cart,
      });
    }

    /* nếu sản phẩm chưa tồn tại trong giỏ hàng thì thêm sản phẩm vào giỏ hàng */
    cart.items.push(body.items[0]);
    /* save */
    await cart.save();
    return res.status(200).json({
      message: "Sản phẩm đã thêm vào giỏ hàng",
      cart: cart,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const removeItemToCart = async (req, res) => {
  try {
    const { productId, userId } = req.params;
    const cart = await Cart.findOne({ userId: userId });
    /* tìm xem sản phẩm có tồn tại không */
    const itemExist = await cart.items.find(
      (item) => item.productId == productId
    );
    if (itemExist.quantity > 1) {
      itemExist.quantity = itemExist.quantity - 1;
      await cart.save();
      return res.status(200).json(cart);
    } else {
      cart.items = cart.items.filter((item) => item.productId != productId);
      await cart.save();
      return res.status(200).json(cart);
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const removeItem = async (req, res) => {
  try {
    const { productId, userId } = req.params;
    const cart = await Cart.findOne({ userId });

    const itemExist = await cart.items.find(
      (item) => item.productId == productId
    );

    if (itemExist) {
      cart.items = cart.items.filter((item) => item.productId != productId);
      await cart.save();
      return res.status(200).json(cart);
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const resetAllCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = [];
      await cart.save();
      return res.status(200).json(cart);
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
