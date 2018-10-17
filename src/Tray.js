import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types'
import Icon from './icons/icons'

export default class Tray extends Component {
  
  state = {
    topOffset : new Animated.Value(-100),
    opening: false,
    type: "",
    message: ""
  }

  componentWillReceiveProps = (props) =>{
    props.isOpen ? this.openTray() : this.closeTray()
  }
  
  render() {
    const { type, message } = this.state 
    const { backgroundColor, color } = this.props
    const animatedStyles = {transform: [{translateY: this.state.topOffset}]}
    const iconMatcher = {
        warn: "error-outline",
        success: "check",
        info: "info-outline"
    }
    const colorMatcher = {
        warn: { borderBottomColor: '#F15252' },
        success: { borderBottomColor: '#7ED321' },
        info: { borderBottomColor: '#3480EE' }
    }
    
    return (
      <Animated.View style={[styles.container, animatedStyles]}>
        <View style={[styles.inner, colorMatcher[type], {backgroundColor}]}>
            <Icon
                name={iconMatcher[type]}
                color={color}
                size={27}
            />
            <Text style={[styles.labelText, {color}]}>{message}</Text>
        </View>
      </Animated.View>
    );
  }

  show = (type, message, duration = 1000) =>{
      const { opening } = this.state
      if(!opening){
        this.setState({type, message, opening: true}, () => this.openTray())
        setTimeout(() => {
            this.setState({opening: false}, () => this.closeTray())
        }, duration)
      }
  }

  openTray = () =>{
    Animated.spring(this.state.topOffset, {
        toValue: 0,
        duration: this.props.animationDuration
    }).start()
  }

  closeTray = () =>{
    Animated.spring(this.state.topOffset, {
        toValue: -100,
        duration: this.props.animationDuration
    }).start()
  }

}

Tray.defaultProps = {
    animationDuration: 1000,
    backgroundColor: "#5B616A",
    color: '#FFF'
}

Tray.propTypes = {
    animationDuration: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 60,
    position: 'absolute',
    top: 0,
    zIndex: 20,
   alignItems: 'center',
   justifyContent: 'center'
  },
  inner:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    height: 50,
    width: '98%'
  },
  labelText:{
      fontWeight: '600',
      marginLeft: 20,
      fontSize: 16
  }
})
