import Image from 'next/image'
import { useEffect } from 'react'
import { socket } from './socket-io';

export default function Home() {
  useEffect(() = > {
    socket.connect();
    socket.
    return() => {
    socket.disconnect();
    }
  }, []);

  return (
    <main>Hello world!</main>
  )
}
