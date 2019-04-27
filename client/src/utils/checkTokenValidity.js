import jwt from 'jsonwebtoken';

export function checkTokenValidity(token) {
  if (token) {
    const decodedToken = jwt.decode(token);

    return decodedToken && decodedToken.exp * 1000 > new Date().getTime();
  }

  return false;
}
