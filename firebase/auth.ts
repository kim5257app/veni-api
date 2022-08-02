import firebase from './core';

export async function verifyToken(token: string) {
  return firebase.auth().verifyIdToken(token);
}
