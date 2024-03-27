import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sebas Homepage',
  description: 'Home page desc'
}

export default function Home() {
  return (
    <main>
      <h1>SebasBaezCode</h1>
    </main>
  )
}
