import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!items) {
    return res.status(400).json({ error: 'Items not found' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  console.log('items', items)

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: items,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
    checkoutId: checkoutSession.id,
  })
}
