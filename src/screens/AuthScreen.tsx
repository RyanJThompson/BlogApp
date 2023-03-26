// components/Auth.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        await auth().createUserWithEmailAndPassword(email, password);
      } else {
        await auth().signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setErrorMsg(getErrorMsg(error));
      console.log(getErrorMsg(error));
      console.error(error);
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const getErrorMsg = (error: { code: string; message: string }): string => {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/email-already-in-use':
        return 'This email is already in use.';
      case 'auth/weak-password':
        return 'Password is too weak.';
      case 'auth/user-not-found':
        return 'No user found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      default:
        return error.message;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Blog App :P</Text>
      <Text style={styles.errorMsg}>{errorMsg}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title={isSignUp ? 'Sign Up' : 'Sign In'} onPress={handleSubmit} />
      <Text style={styles.toggle} onPress={toggleSignUp}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  toggle: {
    marginTop: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  appTitle: {
    alignSelf: 'center',
    height: '13%',
    fontWeight: 'bold',
    fontSize: 26,
  },
  errorMsg: {
    color: 'red',
    padding: 8,
    alignSelf: 'center',
  },
});

export default AuthScreen;
