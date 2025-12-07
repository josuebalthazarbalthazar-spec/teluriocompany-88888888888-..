require('dotenv').config();
const config = {
    dbUrl: process.env.DB_URL,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    port: process.env.PORT,
};
module.exports = config;