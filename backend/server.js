import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import stripePackage from "stripe";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const stripe = stripePackage(
  "sk_test_51PDqWRKfDLHMjerKKuYH66rEENKHo9Sj4Wei5VubOG2q5OQFZ4kmhElrO4faaljloEQEMacL4pQQY47TWsLrURw300KHkORIcY"
);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Stripe Checkout Route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cartItems, customerEmail } = req.body;

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
      customer_email: customerEmail,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

app.listen(port, () => {
  connectDB();
  console.log(`Server running on http://localhost:${port}`);
});
