const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')("sk_test_51JkzWhG405z3R6GK13ynDX7vqtkSarSH0VSdUBxqgOMrvVJguZ2IYhcuyBDU1iR7qqZCEjr8LxSbFPWx68Awwadz00bVZBeyTD");

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub unit of the currency
        currency: 'usd',
    });
    // OK created comething
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// -Listen command
exports.api = functions.https.onRequest(app);



//- Example endpoint
// http://localhost:5001/e-clone-web-application/us-central1/api


// Run firebase init to initialize and cloud functions
// Change directory to functions and run npm install express(for node backend that's connected to cloud functions api)
// Run npm install cors
// Run npm install stripe
// Then run firebase emulators:start for cloud functions in backend