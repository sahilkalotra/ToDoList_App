import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {axiosInstance} from '../../api/axiosInstance';

import styles from './styles';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axiosInstance
        .post('/login', {
          email: email,
          password: password,
        })
        .then(res => {
          console.log(res?.data, '<=====');
        });
    } catch (error) {
      console.error(error);
    }
  };
  const getuser = async () => {
    try {
      await axiosInstance.get('/getuser').then(res => {
        console.log(res?.headers, '<=====');
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          // secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={getuser}>
        <Text style={styles.loginButtonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
