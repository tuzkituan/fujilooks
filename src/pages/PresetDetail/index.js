import React, { Component } from 'react'
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import MainLayout from '../../layouts/MainLayout';

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';

import styles from './index.scss';

export default class PresetDetail extends Component {
    renderInfomation = () => {
        const mockData = {
            filmSimulation: 'PRO Neg. Std',
            dynamicRange: 'DR200',
            highlight: '+1',
            shadow: '+2',
            color: '+4',
            noiseReduction: '-3',
            sharpening: '+1',
            grain: 'Strong',
            colorChromeEffect: 'Weak',
            wb: {
                temp: 'Auto',
                red: '-1',
                green: '0',
                blue: '+4'
            },
            iso: 'up to ISO 6400',
            exposure: '-1 to +2/3',
            sensors: [
                'X-Trans IV'
            ],
            cameras: [
                'X-T3', 'X-T30'
            ]
        }
        return (
            <View style={styles.detailRows}>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Film Simulation
                    </Text>
                    <Text style={styles.value}>
                        {mockData.filmSimulation}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Dynamic Range
                    </Text>
                    <Text style={styles.value}>
                        {mockData.dynamicRange}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Hightlight
                    </Text>
                    <Text style={styles.value}>
                        {mockData.highlight}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Shadow
                    </Text>
                    <Text style={styles.value}>
                        {mockData.shadow}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Color
                    </Text>
                    <Text style={styles.value}>
                        {mockData.color}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Noise Reduction
                    </Text>
                    <Text style={styles.value}>
                        {mockData.noiseReduction}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Sharpening
                    </Text>
                    <Text style={styles.value}>
                        {mockData.sharpening}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Grain Effect
                    </Text>
                    <Text style={styles.value}>
                        {mockData.grain}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Color Chrome Effect
                    </Text>
                    <Text style={styles.value}>
                        {mockData.colorChromeEffect}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        WB
                    </Text>
                    <Text style={styles.value}>
                        {mockData.wb.temp}, {mockData.wb.red} Red, {mockData.wb.green} Green and {mockData.wb.blue} Blue
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        ISO
                    </Text>
                    <Text style={styles.value}>
                        {mockData.iso}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Exposure Compensation
                    </Text>
                    <Text style={styles.value}>
                        {mockData.exposure}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Sensors
                    </Text>
                    <View style={styles.arrayValue}>
                        {mockData.sensors.map((sensor, index) =>
                            <Text key={index} style={styles.value}>{sensor}
                            </Text>)}
                    </View>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Cameras
                    </Text>
                    <View style={styles.arrayValue}>
                        {mockData.cameras.map((camera, index) =>
                            <Text key={index} style={styles.value}>{camera}
                            </Text>)}
                    </View>
                </View>
            </View>
        )
    }

    renderPage = () => {
        const { route } = this.props;
        const { params: { id = 0 } = {} } = route;
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        return (
            <ScrollView className={styles.PresetDetail}>
                <Text style={styles.partTitle}>SAMPLE IMAGES</Text>
                <View style={styles.sliderBox}>
                    <SliderBox
                        ImageComponentStyle={{ borderRadius: 5, width: '97%', marginTop: 5 }}
                        autoplay images={[Image1, Image2, Image3]}
                        sliderBoxHeight={windowHeight * 0.35}
                        parentWidth={windowWidth - 40}
                    />
                </View>
                <Text style={styles.partTitle}>RECIPES</Text>
                {this.renderInfomation()}
            </ScrollView>
        )
    }
    render() {
        const { route } = this.props;
        const { params: { name = '' } = {} } = route;
        return (<MainLayout title={name} children={this.renderPage()} />)
    }
}
