import React from 'react';

interface ISession {
  sessionValue: string;
  setSessionValue: React.Dispatch<React.SetStateAction<string>>;
}

const Session = React.createContext<ISession>({
  sessionValue: '',
  setSessionValue: () => {},
});

export default Session;
