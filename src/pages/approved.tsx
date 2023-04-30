import { getSession } from '@/apiRequests/loginRequests';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Approved() {
  const router = useRouter();

  const { request_token } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    async function login() {
      const dato = await getSession(request_token);
      localStorage.setItem('sessionId', dato.sessionId);

      router.push('/');
    }
    login();
  }, [router.isReady]);

  return <div></div>;
}

export default Approved;
