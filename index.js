const cors = require("cors")
const express = require("express")
const stripe = require("stripe")(
  "sk_test_51KKrW7AmsBh1mzV2igrdBYXbIeVg5xdliOfpFjLXtkQnujqEhU1W1ALbBkYfGWSKFZn6Ch6brNzVsmrlugrQHLc300aA1ckYKi"
)
const { v4: uuidv4 } = require("uuid")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body)

  let error
  let status
  try {
    const { amount, token } = req.body

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    })

    const idempotencyKey = uuidv4()
    const charge = await stripe.charges.create(
      {
        amount: amount * 1000,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: "Made a donation",
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    )
    console.log("Charge:", { charge })
    status = "success"
  } catch (error) {
    console.error("Error:", error)
    status = "failure"
  }

  res.json({ error, status })
})
app.get("/", (req, res) => {
  res.send("Server is up and running")
})

// change this
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
