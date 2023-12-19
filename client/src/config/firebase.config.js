import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlIm8Z8QaUKW_hiKqV9ka_Br5sw1a2DV8",
  authDomain: "ethio-project.firebaseapp.com",
  projectId: "ethio-project",
  storageBucket: "ethio-project.appspot.com",
  messagingSenderId: "789447859395",
  appId: "1:789447859395:web:aa83c725e22e321e3a5676",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
