import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * API routes are used to handle API requests after an user interection (e.g.: button click).
 * The 'getStaticProps', for example, will be used only when the page is built.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body;

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed.' });
    }

    if (!priceId) {
        return res.status(404).json({ error: 'Price not found.' });
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    /**
     * More about checkout session:
     * https://stripe.com/docs/api/checkout/sessions/
     */
    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ]
    });

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}