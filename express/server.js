const express = require("express");
const app = express();
app.use(express.json());

const stripe = require("stripe")(process.env.STRIPE_KEY);
app.use(express.static("public"));
const items = new Map([
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0011_Screenshot_20231016_160736_Gallery_1.jpg?v=1697619281&width=300",
    price: "PKR 5,997",
    discountPrice: "PKR 19,990",
    brandName: "Agha Jaan",
    id: "1",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/0005_1H8A7324.jpg?v=1699536427&width=300",
    price: "PKR 6,588",
    discountPrice: "PKR 21,960",
    brandName: "",
    id: "3",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_Screenshot_20230821_203416_Gallery.jpg?v=1692710661&width=300",
    price: "PKR 6,495",
    discountPrice: "PKR 21,650",
    brandName: "",
    id: "4",
  },
]);

app.post("/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      method: "payment",
      line_items: req.body.items.map((item) => {
        const items = items.get(item.id);
      }),
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
app.listen(3000);
