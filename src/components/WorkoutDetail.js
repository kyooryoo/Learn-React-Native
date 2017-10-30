import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import CardSection from './CardSection';

const finishedImage = require('./images/finished.png');

class WorkoutDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { finished: false, BGIndex: 0 };
  }

  toggleFinished() {
    this.setState({
      finished: !this.state.finished,
      BGIndex: this.state.finished ? 0 : 100
    });
  }

  render() {
    const { number, action, image } = this.props.workout;
    const {
      sectionStyle,
      headerStyle,
      imageStyle,
      imageContainerStyle,
      headerTitleStyle,
      numberContainerStyle,
      numberTextStyle,
      finishedStyle
    } = styles;

    return (
      <TouchableOpacity
        onPress={() => this.toggleFinished()}
      >

        <ImageBackground
          style={{
            flex: 1
          }}
          imageStyle={{
            resizeMode: 'contain',
            zIndex: this.state.BGIndex
          }}
          source={finishedImage}
        >
        <CardSection style={[sectionStyle, this.state.finished && finishedStyle]}>
          <View style={numberContainerStyle}>
            <Text style={numberTextStyle}>{number}</Text>
          </View>

          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={{ uri: image }} />
            <Text style={headerTitleStyle}>{action}</Text>
          </View>

          <View style={headerStyle}>
            <Text style={headerTitleStyle}>100 times</Text>
          </View>
        </CardSection>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = {
  sectionStyle: {
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  numberContainerStyle: {
    width: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  numberTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 120,
    width: 180,
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  finishedStyle: {
    opacity: 0.2
  }
};

export default WorkoutDetail;
