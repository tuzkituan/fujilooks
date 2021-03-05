import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import styles from './index.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { navigation } = this.props;
        console.log('styles',styles);
        return (
            <View style={styles.Home}>
                <Text style={styles.title}>Home Screen</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>
        )
    }
}
