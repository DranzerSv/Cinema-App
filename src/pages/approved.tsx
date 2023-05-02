import { getSession } from '@/apiRequests/loginRequests';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Session from '@/components/Context';
import { useContext } from 'react';
function Approved() {
  const router = useRouter();

  const { request_token } = router.query;
  const { setSessionValue } = useContext(Session);

  useEffect(() => {
    if (!router.isReady) return;
    async function login() {
      const data = await getSession(request_token);
      localStorage.setItem('sessionId', data.sessionId);
      setSessionValue(data);

      router.push('/');
    }
    login();
  }, [router.isReady]);

  return <div></div>;
}

export default Approved;
