import React, { Component } from 'react'
import FloatingActionBar from 'react-native-floating-action-bar';
import styles from './index.scss';

export default class FloatingNavigator extends Component {
    render() {
        return (
            <FloatingActionBar
                items={[{ icon: 'taxi' }, { icon: 'subway' }, { icon: 'train' }, { icon: 'bus' }]}
                offset={10}
                style={styles.floatingNavigator}
            // onPress={handlePress}
            />
        )
    }
}
