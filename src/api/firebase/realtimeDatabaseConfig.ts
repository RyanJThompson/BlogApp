import { firebase } from '@react-native-firebase/database';

export const firebaseDatabaseurl = process.env.FIREBASE_DB_URL;
export const databaseRef = firebase.app().database(firebaseDatabaseurl);
