import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native';

import styles from './index.scss';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        StatusBar.setBarStyle('light-content', true)
        StatusBar.setBackgroundColor("#000")
    }

    render() {
        const { children, title = '' } = this.props;
        return (
            <View style={styles.MainLayout}>
                {/* <FloatingNavigator /> */}
                <Text style={styles.title}>{title}</Text>
                {children}
            </View>
        )
    }
}
