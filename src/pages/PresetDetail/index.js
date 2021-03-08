import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import MainLayout from '../../layouts/MainLayout';

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';

import styles from './index.scss';

export default class PresetDetail extends Component {
    renderPage = () => {
        const { route } = this.props;
        const { params: { id = 0 } = {} } = route;
        const windowWidth = Dimensions.get('window').width;
        return (
            <View className={styles.PresetDetail}>
                <SliderBox images={[Image1, Image2, Image3]} sliderBoxHeight={200} parentWidth={windowWidth - 40} />
            </View>
        )
    }
    render() {
        const { route } = this.props;
        const { params: { name = '' } = {} } = route;
        return (<MainLayout title={name} children={this.renderPage()} />)
    }
}
