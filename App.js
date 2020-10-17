import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 20,
    };
  }

  moveRight = () => {
    this.setState({left: this.state.left + 10}); // 10 is value of change.
  };

  moveLeft = () => {
    this.setState({left: this.state.left - 10}); // 10 is value of change.
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{left: this.state.left, height: 120, width: 120}}
          source={require('./assets/box.png')}
        />

        <Image
          style={{height: 20, width: 180, marginTop: -12, marginLeft: 25}}
          source={require('./assets/log.png')}
        />

        <Image
          style={{height: 20, width: 200, marginTop: 150, marginLeft: 185}}
          source={require('./assets/log.png')}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.moveLeft}>
            <Image
              style={{height: 60, width: 60}}
              source={require('./assets/left-button.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.moveRight}>
            <Image
              style={{height: 60, width: 60}}
              source={require('./assets/right-button.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  levelHeading: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#CC8A4F',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200,
    paddingLeft: 80,
    paddingRight: 80,
  },
});