import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}
firebase.initializeApp(firebaseConfig)
const commentsRef = firebase.database().ref('comments');
console.log(firebaseConfig);
const saveComment = () => {
  const newCommentRef = commentsRef.push()
  const date = Date.now();
  newCommentRef.set({
    name: 'Joey',
    comment: 'Shit site bro',
    date: firebase.database.ServerValue.TIMESTAMP,
  })
}

const Contact = () => {
  console.log(config);
  return(
      <h1 onClick={saveComment}>Contact</h1>
  )
}
export default Contact;
