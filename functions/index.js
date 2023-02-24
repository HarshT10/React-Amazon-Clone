/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51MeE9iSCZ1aMvodrvPE0SFz5HLRm0N6BE6WtRLExhQ9HQKr8651WOSVkjafsCX46lJ3fIqFl6NetwRpPsfrBGiq200UsiKXc1a");

//  - API

//  - App Config
const app = express();

//  - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//  - API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  - Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/clone-fcd24/us-central1/api
