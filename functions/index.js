const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IdNv1Ki4CXRTBEHwKjJ9XK3CU3NSklwQ9anJdsQtdoqGMoMRbHGKaGbgOFQHgqNnlsRzq7WaUnpZfwHGJUjB1A4008Sn5FXnF');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes
 app.get('/',(request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    // OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// - Listen commands

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-636ed/us-central1/api
