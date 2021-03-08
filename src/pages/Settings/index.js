import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import s from './index.scss';

export default class Settings extends Component {
    renderScreen = () => {
        return <View>
            <Text>Hi</Text>
        </View>
    }
    render() {
        return (
           <MainLayout children={this.renderScreen()} title="SETTINGS" />
        )
    }
}
