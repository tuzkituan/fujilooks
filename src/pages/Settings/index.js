import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import { connect } from 'react-redux';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import styles from './index.scss';
import { watchSaveGoogleUser } from '../../sagas/loginSaga';
class Settings extends Component {
    componentDidMount
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

            const { saveGoogleUser = () => { } } = this.props;
            // console.log('userInfo',userInfo);
            saveGoogleUser(userInfo);
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
    renderScreen = () => {
        const { loginWithGoogle = () => { }, currentUser = {} } = this.props;
        return (
            <View>
                <TouchableHighlight onPress={loginWithGoogle}>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn} />
                </TouchableHighlight>
                <Text style={{ color: '#fff' }}>
                    {currentUser.idToken}
                </Text>
            </View>
        )
    }
    render() {
        const { currentUser = {} } = this.props;
        // console.log('currentUser',currentUser);
        return (
            <MainLayout children={this.renderScreen()} title="SETTINGS" />
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
        saveGoogleUser: (currentUser) => dispatch({
            type: 'SAVE_GOOGLE_USER',
            currentUser
        }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);