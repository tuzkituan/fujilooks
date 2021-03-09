import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

import FilterBar from '../../components/FilterBar';
import MainLayout from '../../layouts/MainLayout';

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';

import styles from './index.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderItem = ({ index, item }) => {
        const { navigation } = this.props;
        const { name = '', id = 0, img = '' } = item;
        return (
            <View style={styles.eachRow}>
                <TouchableOpacity key={id} style={styles.presetView} onPress={() => navigation.navigate('Preset Details', { id, name })}>
                    <View style={styles.leftPart}>
                        <Text style={styles.indexNumber}>{index}</Text>
                        <Text style={styles.presetName}>{name}</Text>
                    </View>
                    {/* <View style={styles.rightPart}> */}
                        <Image source={img} style={styles.previewImage} />
                    {/* </View> */}
                </TouchableOpacity>
            </View>
        )
    }

    renderPage = () => {
        const mockData = [
            {
                id: 1,
                name: 'Kodak Portra 400',
                img: Image1,
            },
            {
                id: 2,
                name: 'Portra 400',
                img: Image2,
            },
            {
                id: 3,
                name: 'Kodak 400',
                img: Image3,
            },
            {
                id: 4,
                name: 'Kodak Portra 8000',
                img: Image1,
            },
            {
                id: 5,
                name: 'Kodak Portra 400',
                img: Image3,
            },
            {
                id: 6,
                name: 'Portra 400',
                img: Image2,
            },
            {
                id: 7,
                name: 'Kodak 400',
                img: Image1,
            },
            {
                id: 8,
                name: 'Kodak Portra 8000',
                img: Image3,
            },
            {
                id: 9,
                name: 'Kodak Portra 400',
                img: Image2,
            },
            {
                id: 10,
                name: 'Portra 400',
                img: Image3,
            },
            {
                id: 11,
                name: 'Kodak 400',
                img: Image3,
            },
            {
                id: 12,
                name: 'Kodak Portra 8000',
                img: Image1,
            },
        ]
        return (
            <View style={styles.Home}>
                <FilterBar />
                <FlatList
                    data={mockData}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                    style={styles.presetList}
                />
            </View>
        )
    }
    render() {
        return (<MainLayout title="FUJI LOOKS" children={this.renderPage()} />)
    }
}
