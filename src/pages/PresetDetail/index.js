import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import MainLayout from '../../layouts/MainLayout';

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';

import styles from './index.scss';

export default class PresetDetail extends Component {
    renderPage = () => {
        const { route } = this.props;
        const { params: { id = 0 } = {} } = route;
        return (
            <View className={styles.Settings}>
                <Text>Preset Detail Screen</Text>
                <Text>Selected ID: {id}</Text>
                <Image source={Image1} style={styles.previewImage} />
                <Image source={Image2} style={styles.previewImage} />
                <Image source={Image3} style={styles.previewImage} />
            </View>
        )
    }
    render() {
        const { route } = this.props;
        const { params: { name = '' } = {} } = route;
        return (<MainLayout title={name} children={this.renderPage()} />)
    }
}
