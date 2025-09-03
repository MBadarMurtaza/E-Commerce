import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Multer config
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

// Serve images statically
app.use("/images", express.static("upload/images"));

// Upload endpoint
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`, // ✅ fixed
  });
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    date: req.body.date,
    available: req.body.available,
  });
  console.log(product);
  await product.save();
  console.log("Product added");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.deleteOne({ id: req.body.id });
  console.log("Product removed");
  res.json({ success: true, name: req.body.name });
});

app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;  // get from params
    const product = await Product.findOne({ id: Number(id) }); // use params
    if (!product) {
      return res.json({ success: false, message: "Not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: "Error fetching product" });
  }
});


app.put("/updateproduct/:id", async (req, res) => {
  try {
    const productId = Number(req.params.id); // ✅ ensure it's a number

    const product = await Product.findOneAndUpdate(
      { id: productId },
      req.body,
      { new: true }
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    console.log("✅ Product updated:", product);
    res.json({ success: true, product });
  } catch (error) {
    console.error("❌ Error updating product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// newCollection portion api

app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  res.send(newCollection);
});

// popular in Womens portion api
app.get("/popularwomens", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popularWomens = products.slice(0, 4);
  res.send(popularWomens);
});

// fetching user

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
  }
};

//  adding cart data api
app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findById(req.user.id);
    if (!userData)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    let cart = userData.cartData;
    let productId = req.body.productId;
    cart[productId] = (cart[productId] || 0) + 1;

    await Users.findByIdAndUpdate(req.user.id, { cartData: cart });

    res.json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// removing cart data api
// ✅ Remove item quantity from cart
app.post("/removefromcart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const itemId = req.body.itemId;

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (userData.cartData[itemId] > 1) {
      userData.cartData[itemId] -= 1; // ✅ decrease quantity
    } else {
      userData.cartData[itemId] = 0; // ✅ remove completely if qty <= 1
    }

    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.json({ success: true, cartData: userData.cartData }); // ✅ send updated cart back
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Delete item completely from cart
app.post("/deletefromcart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const itemId = req.body.itemId; // ✅ extract itemId from request body

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (userData.cartData[itemId] !== undefined) {
      userData.cartData[itemId] = 0;
      await Users.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );
    }

    res.json({ success: true, cartData: userData.cartData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Get cart when user logs in / refreshes
app.post("/getcart", fetchUser, async (req, res) => {
  try {
    const userData = await Users.findOne({ _id: req.user.id }); // <-- added await
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, cartData: userData.cartData }); // wrapped in object
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// user schema

const Users = mongoose.model("Users", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// user signup

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");

  res.json({ success: true, token });
});

// user login

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist with this email" });
  }
  if (user.password !== req.body.password) {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect password" });
  }
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
