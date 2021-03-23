import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import MainLayout from '../../layouts/MainLayout';

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';

import { connect } from 'react-redux';

import styles from './index.scss';
class PresetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    fetchRecipeDetailAPI = async () => {
        const { route } = this.props;
        const { params: { _id = '' } = {} } = route;
        const { fetchRecipeDetail = () => { } } = this.props;
        await fetchRecipeDetail(_id);
        this.setState({ refreshing: false });
    }

    async componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.refs?._mainScrollView?.scrollTo({ x: 0, y: 0, animated: true });
            this.fetchRecipeDetailAPI()
        });
    }

    renderInfomation = () => {
        const { recipeDetail = {} } = this.props;
        const {
            filmSimulation,
            dynamicRange,
            highlight,
            shadow,
            color,
            noiseReduction,
            sharpening,
            grain,
            colorChromeEffect,
            wb: {
                temp = '',
                red = '',
                green = '',
                blue = ''
            } = {},
            iso,
            exposure,
            sensors = [],
            cameras = []
        } = recipeDetail;

        return (
            <View style={styles.detailRows}>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Film Simulation
                    </Text>
                    <Text style={styles.value}>
                        {filmSimulation}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Dynamic Range
                    </Text>
                    <Text style={styles.value}>
                        {dynamicRange}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Hightlight
                    </Text>
                    <Text style={styles.value}>
                        {highlight}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Shadow
                    </Text>
                    <Text style={styles.value}>
                        {shadow}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Color
                    </Text>
                    <Text style={styles.value}>
                        {color}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Noise Reduction
                    </Text>
                    <Text style={styles.value}>
                        {noiseReduction}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Sharpening
                    </Text>
                    <Text style={styles.value}>
                        {sharpening}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Grain Effect
                    </Text>
                    <Text style={styles.value}>
                        {grain}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Color Chrome Effect
                    </Text>
                    <Text style={styles.value}>
                        {colorChromeEffect}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        WB
                    </Text>
                    <Text style={styles.value}>
                        {temp}, {red} Red, {green} Green and {blue} Blue
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        ISO
                    </Text>
                    <Text style={styles.value}>
                        {iso}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Exposure Compensation
                    </Text>
                    <Text style={styles.value}>
                        {exposure}
                    </Text>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Sensors
                    </Text>
                    <View style={styles.arrayValue}>
                        {sensors.map((sensor, index) =>
                            <Text key={index} style={styles.value}>{sensor}
                            </Text>)}
                    </View>
                </View>
                <View style={styles.eachRow}>
                    <Text style={styles.title}>
                        Cameras
                    </Text>
                    <View style={styles.arrayValue}>
                        {cameras.map((camera, index) =>
                            <Text key={index} style={styles.value}>{camera}
                            </Text>)}
                    </View>
                </View>
            </View>
        )
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.fetchRecipeDetailAPI()
    }

    renderPage = () => {
        const { refreshing } = this.state;
        const { recipeDetail = {} } = this.props;
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        return (
            <ScrollView ref='_mainScrollView' refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={this._onRefresh}
                />
            } className={styles.PresetDetail}>
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
                {Object.keys(recipeDetail).length !== 0 && this.renderInfomation()}
            </ScrollView>
        )
    }
    render() {
        const { route } = this.props;
        const { params: { name = '' } = {} } = route;
        return (<MainLayout title={name} children={this.renderPage()} />)
    }
}

const mapStateToProps = (state) => {
    return {
        recipeDetail: state.recipeReducer.recipeDetail,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipeDetail: (_id) => dispatch({
            type: 'FETCH_RECIPE_DETAIL',
            payload: {
                _id
            }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PresetDetail);
