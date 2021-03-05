import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import styles from './index.scss';

export default class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 2 // 1 is filter, 2 is all
        }
    }

    setActive = (value) => {
        this.setState({
            isActive: value
        })
    }
    render() {
        const { isActive } = this.state;
        return (
            <View style={[styles.FilterBar, {
                borderBottomColor: 'rgb(59, 59, 59)',
                borderBottomWidth: 1,
                borderTopColor: 'rgb(59, 59, 59)',
                borderTopWidth: 1,
            }]}>
                <View style={styles.container}>
                    <View style={styles.leftPart}>
                        <Text onPress={() => this.setActive(1)} style={[styles.title, isActive === 1 ? { color: "red" } : {}]}>FILTER</Text>
                        <Text onPress={() => this.setActive(2)} style={[styles.title, isActive === 2 ? { color: "red" } : {}]}>ALL</Text>
                    </View>
                    <Text style={styles.rightPart}>SEARCH</Text>
                </View>
            </View>
        )
    }
}
