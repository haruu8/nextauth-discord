import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Home() {
  const { data } = useSession()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => signIn()}>Connect discord</button>
    </div>
  )
}
