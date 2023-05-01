import api from './api';

import { IAccountInfo } from '@/interfaces/loginInterfaces';
const URL = 'https://api.themoviedb.org/3';

const getRequestToken = async () => {
  const response = await api.get(`${URL}/authentication/token/new?`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return response.data;
};
const getSession = async (requestToken: string | string[] | undefined) => {
  const response = await api.post(
    `${URL}/authentication/session/new?api_key=eb70c405e3f745fc0ab5d82c26964165`,

    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      },
      request_token: requestToken,
    }
  );
  return response.data;
};

const getAccountInfo = async (sessionId: string | null) => {
  const response = await api.get(
    `${URL}/account?`,

    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        session_id: sessionId,
      },
    }
  );

  return response.data;
};
const setFavorite = async (
  resourceId: number,
  like: boolean,
  accountId: number,
  sessionId: string | null,
  type: 'movie' | 'tv'
) => {
  const response = await api.post(
    `${URL}/account/${accountId}/favorite?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`,

    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        session_id: sessionId,
      },
      media_type: type,
      media_id: resourceId,
      favorite: like,
    }
  );
  return response.data;
};

const getFavorites = async (
  sessionId: string | null,
  page: number,
  type: string
) => {
  const accountInfo: IAccountInfo = await getAccountInfo(sessionId);
  const response = await api.get(
    `${URL}/account/${accountInfo.id}/favorite/${type}?`,

    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        session_id: sessionId,
        page: page,
      },
    }
  );

  return response.data;
};

export {
  getRequestToken,
  getSession,
  getAccountInfo,
  setFavorite,
  getFavorites,
};
