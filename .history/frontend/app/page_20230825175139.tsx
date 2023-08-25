import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() = > {
    socket.connect()
  });

  return (
    <main>Hello world!</main>
  )
}
