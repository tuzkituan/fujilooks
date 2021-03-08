import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import { connect } from 'react-redux';
import styles from './index.scss';
class Settings extends Component {
    increaseCounter = () => {
        const { reduxIncreaseCounter = () => {} } = this.props;
        reduxIncreaseCounter()
    }
    decreaseCounter = () => {
        const { reduxDecreaseCounter  = () => {}} = this.props;
        reduxDecreaseCounter()
    }
    renderScreen = () => {
        const { counter= 0 } = this.props;
        return <View>
            <Text style={{ color: "#fff" }}>Counter: {counter}</Text>
            <TouchableHighlight onPress={this.increaseCounter}>
                <Text style={{ color: "#fff" }}>ADD</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.decreaseCounter}>
                <Text style={{ color: "#fff" }}>REMOVE</Text>
            </TouchableHighlight>
        </View>
    }
    render() {
        return (
            <MainLayout children={this.renderScreen()} title="SETTINGS" />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      reduxIncreaseCounter: () => dispatch({
        type: 'INCREASE_COUNTER_ASYNC',
        value: 1,
      }),
      reduxDecreaseCounter: () => dispatch({
        type: 'DECREASE_COUNTER',
        value: 1,
      }),
    };
  };

  
export default connect(mapStateToProps, mapDispatchToProps)(Settings);