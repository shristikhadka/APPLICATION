import React,{useState} from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import {auth} from '../FirebaseConfig'
import{createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { router } from 'expo-router'

const index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) router.replace('/(tabs)');
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
  }

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) router.replace('/(tabs)');
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
  }

  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default index;
