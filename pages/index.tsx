import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => signIn()}>Connect discord</button>
    </div>
  )
}
