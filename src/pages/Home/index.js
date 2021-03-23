import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

import FilterBar from '../../components/FilterBar';
import MainLayout from '../../layouts/MainLayout';

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';

import { connect } from 'react-redux';

import styles from './index.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
        }
    }

    fetchDataAPI = () => {
        const { fetchRecipeList = () => { } } = this.props;
        fetchRecipeList();
        this.setState({ isFetching: false })
    }

    onRefresh() {
        this.setState(
            {
                isFetching: true
            },
            () => {
                this.fetchDataAPI()
            });
    }

    componentDidMount = () => {
        this.fetchDataAPI()
    }

    renderItem = ({ index, item }) => {
        const { navigation } = this.props;
        const { name = '', _id = 0, img = '' } = item;
        return (
            <View style={styles.eachRow}>
                <TouchableOpacity key={_id} style={styles.presetView} onPress={() => navigation.navigate('Preset Details', { _id })}>
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

    formatRecipeList = () => {
        const { recipeList = [] } = this.props;
        return recipeList.map(recipe => {
            const { _id = '', name = '' } = recipe;
            return {
                _id,
                name,
                img: Image1
            }
        })
    }

    renderPage = () => {
        const formatRecipeList = this.formatRecipeList();
        const { isFetching } = this.state;

        return (
            <View style={styles.Home}>
                <FilterBar />
                <FlatList
                    data={formatRecipeList}
                    renderItem={this.renderItem}
                    onRefresh={() => this.onRefresh()}
                    refreshing={isFetching}
                    keyExtractor={item => item?._id.toString()}
                    style={styles.presetList}
                />
            </View>
        )
    }
    render() {
        return (<MainLayout title="FUJI LOOKS" children={this.renderPage()} />)
    }
}


const mapStateToProps = (state) => {
    return {
        recipeList: state.recipeReducer.recipeList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipeList: () => dispatch({
            type: 'FETCH_RECIPES_LIST',
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
