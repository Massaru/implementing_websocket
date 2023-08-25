'use client';

import { useEffect } from 'react'
import { socket } from './socket-io';

export default function Home() {
  useEffect(() => {
      socket.connect();
      socket.emit('message', {save: true});
      return () => {
          socket.disconnect();
      };
  }, []);

  return (
    <main>Hello world!</main>
  )
}
