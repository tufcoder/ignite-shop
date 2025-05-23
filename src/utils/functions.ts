import path from "node:path"
import { readFileSync } from 'node:fs'

export function generateBlurDataUrl() {
  const blurPath = path.resolve('./public/blur.jpeg')
  const blurBase64 = readFileSync(blurPath).toString('base64')
  const blurDataUrl = `data:image/jpeg;base64,${blurBase64}`
  return blurDataUrl
}
