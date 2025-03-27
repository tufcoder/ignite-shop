import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = 'price_1O3L0MLG1fbc7yMEQKkohdpM'
  // const { priceId } = req.body

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
    checkoutId: checkoutSession.id,
  })
}
