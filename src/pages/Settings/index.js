import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import s from './index.scss';

export default class Settings extends Component {
    render() {
        return (
            <View className={s.Settings}>
                <Text>Settings Screen</Text>
            </View>
        )
    }
}
