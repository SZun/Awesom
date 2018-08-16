import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground';

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  };

  loginHandler = () => {
    startMainTabs();
  };
  render() {
    let headingText = null;
    if (this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    const {
      container,
      input,
      inputContainer,
      landscapePasswordContainer,
      portraitPasswordContainer,
      landscapePasswordWrapper,
      portraitPasswordWrapper
    } = styles;

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={container}>
          {headingText}
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => alert('pressed')}
          >
            Switch To Login
          </ButtonWithBackground>
          <View style={inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={input} />
            <View
              style={
                this.state.viewMode === 'portrait'
                  ? portraitPasswordContainer
                  : landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? portraitPasswordWrapper
                    : landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Password" style={input} />
              </View>
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? portraitPasswordWrapper
                    : landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Confirm Password" style={input} />
              </View>
            </View>
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
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '45%'
  },
  portraitPasswordWrapper: {
    width: '100%'
  }
});

export default AuthScreen;
