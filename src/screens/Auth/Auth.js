import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };
  render() {
    const { container, input, inputContainer } = styles;
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground color="#29aaf4" onPress={() => alert('Hello')}>
            Switch To Login
          </ButtonWithBackground>
          <View style={inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={input} />
            <DefaultInput placeholder="Password" style={input} />
            <DefaultInput placeholder="Confirm Password" style={input} />
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  }
});

export default AuthScreen;
