import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from './queries';

const withSession = Component => props => {
  const { data, error, refetch } = useQuery(GET_ME);
  if (error) {
    localStorage.removeItem('token');
    // return <Redirect to="/" />;
  }

  return <Component {...props} session={data} refetch={refetch} />;
};

export default withSession;
