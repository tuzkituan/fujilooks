import React, { Component } from 'react'
import { Text, TouchableHighlight, View, Image, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';

import { GoogleSignin, statusCodes } from 'react-native-google-signin';

import styles from './index.scss';

class Settings extends Component {
    componentDidMount = () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], webClientId: '223513467650-h2lcdo909cu7eg2fcjdarql4pc9s4n27.apps.googleusercontent.com',
            offlineAccess: true,
            hostedDomain: '',
            forceConsentPrompt: true,
            accountName: '',
            // iosClientId: 'XXXXXX-krv1hjXXXXXXp51pisuc1104q5XXXXXXe.apps.googleusercontent.com'
        });
    }
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo: userInfo, loggedIn: true });

            const { saveLoginUser = () => { } } = this.props;
            saveLoginUser(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    _signOut = async () => {
        const { saveLoginUser = () => { } } = this.props;

        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            await saveLoginUser({});
        } catch (error) {
            console.error(error);
        }
    };

    renderLoginBtn = () => {
        return (
            <View>
                <Text style={styles.loginStatusText}>
                    You are not signed in
                </Text>
                <View style={styles.signInBtn}>
                    <TouchableHighlight onPress={this._signIn}>
                        <Text style={styles.signInText}>
                            SIGN IN WITH GOOGLE
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
    renderScreen = () => {
        const { currentUser = {} } = this.props;
        const { user = {} } = currentUser;
        const { id = '', name = '', photo = '', email = '' } = user;
        return (
            <ScrollView style={styles.Settings}>
                <View>
                    <View style={styles.userContainer}>
                        {!id ? this.renderLoginBtn() :
                            <View>
                                <View style={styles.information}>
                                    <Image style={styles.userImage} source={{ uri: photo }} />
                                    <Text style={styles.nameText}>
                                        {name}
                                    </Text>
                                    <Text style={styles.emailText}>
                                        {email}
                                    </Text>
                                    <TouchableHighlight onPress={this._signOut}>
                                        <Text style={styles.logoutBtn}>Logout</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styles.menu}>
                        <TouchableHighlight style={styles.eachMenuItem} onPress={() => { }}>
                            <View style={styles.eachRow}>
                                <View style={styles.leftPart}>
                                    <Text style={styles.labelClickable}>Favorites</Text>
                                </View>
                                <View style={styles.rightPart}>
                                    <MaterialIcons style={styles.arrowIcon} name='arrow-forward-ios' />
                                </View>
                            </View>
                        </TouchableHighlight>
                        {id !== '' && <TouchableHighlight style={styles.eachMenuItem} onPress={() => { }}>
                            <View style={styles.eachRow}>
                                <View style={styles.leftPart}>
                                    <Text style={styles.labelClickable}>Your uploaded presets</Text>
                                </View>
                                <View style={styles.rightPart}>
                                    <MaterialIcons style={styles.arrowIcon} name='arrow-forward-ios' />
                                </View>
                            </View>
                        </TouchableHighlight>}
                        <View style={styles.spacer}></View>
                        <TouchableHighlight style={styles.eachMenuItem} onPress={() => { }}>
                            <View style={styles.eachRow}>
                                <View style={styles.leftPart}>
                                    <Text style={styles.labelClickable}>Donate me</Text>
                                </View>
                                <View style={styles.rightPart}>
                                    <MaterialIcons style={styles.arrowIcon} name='arrow-forward-ios' />
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.eachMenuItem} onPress={() => { }}>
                            <View style={styles.eachRow}>
                                <View style={styles.leftPart}>
                                    <Text style={styles.label}>Developer</Text>
                                </View>
                                <View style={styles.rightPart}>
                                    <Text style={styles.value}>Lewis Nguyen</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }
    render() {
        return (
            <>{this.renderScreen()}</>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.loginReducer.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveLoginUser: (currentUser) => dispatch({
            type: 'SAVE_GOOGLE_USER',
            payload: { currentUser }
        }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);