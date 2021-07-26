import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  image,
  ScrollView,
} from 'react-native';
import { StateGlobal } from '../../../App';

import Input from '../../../components/Input';
import Node from '../../../components/Node';

import Islogin from './Service';

const Login = props => {
  const {navigation} = props;
  const [name, setname] = useState('');
  const [pass, setPass] = useState('');

  const [errName, setErrName] = useState('');
  const [errPass, setErrPass] = useState('');

  const {setcheck} = useContext(StateGlobal)

  const checkLogin = async () => {
    if (name == 'NguyenHongAnh' && pass == '123') {
      Islogin(true, true);
      setcheck(true)
      console.log('dang nhap thanh cong');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Image/hinhnen4.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView>
        <View style={styles.contrain}>
          <Text style={styles.title}>Hello,</Text>
          <Text style={styles.minititle}>Welcome back</Text>

          <Input
            title="Username"
            placeholder="Enter your email"
            range={80}
            onChange={setname}
            err={errName}
          />
          <Input
            title="Password"
            pass={true}
            placeholder="Enter your password"
            range={20}
            onChange={setPass}
            err={errPass}
          />
          <Node nameNode="Login" checkLogin={checkLogin} />
          <View style={styles.change}>
            <Text style={styles.text}>Don't have acount yet?</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.textButton}>Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contrain: {
    flex: 1,
    backgroundColor: 'rgba(154, 229, 237, 0)',
    paddingHorizontal: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#f8f8ff',
    fontFamily: '',
    marginTop: 20,
  },
  change: {
    color: '#f8f8ff',
    marginTop: 88,
  },
  text: {
    alignSelf: 'center',
    color: '#f8f8ff',
  },
  textButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#f8f8ff',
  },
  button: {
    alignSelf: 'center',
  },
  minititle: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#f8f8ff',
    fontSize: 20,
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
});

export default Login;
