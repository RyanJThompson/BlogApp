import { firebase } from '@react-native-firebase/database';
import { FIREBASE_DB_URL } from '@env';

export const firebaseDatabaseurl = FIREBASE_DB_URL;
export const firebaseDBRef = firebase.app().database(firebaseDatabaseurl);
