import { useContext } from 'react';
import Session from '@/components/Context';
import Login from '@/components/Login';
import Favorites from '@/components/Favorites';
function ProtectedSections() {
  const { sessionValue } = useContext(Session);
  if (!sessionValue) {
    return <Login />;
  }
  return <Favorites />;
}

export default ProtectedSections;
