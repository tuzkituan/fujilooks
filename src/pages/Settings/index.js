import React, { Component } from 'react'
import { Text, TouchableHighlight, View, Image } from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import { connect } from 'react-redux';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import styles from './index.scss';

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

    _signOut = async () => {
        const { saveGoogleUser = () => { } } = this.props;
        
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          await saveGoogleUser({});
        } catch (error) {
          console.error(error);
        }
      };

    renderLoginBtn = () => {
        const { loginWithGoogle = () => { } } = this.props;

        return (
            <TouchableHighlight onPress={loginWithGoogle}>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn} />
            </TouchableHighlight>
        )
    }
    renderScreen = () => {
        const { currentUser = {} } = this.props;
        const { user = {} } = currentUser;
        const { id = '', name = '', photo = '', email = '' } = user;
        return (
            <View>
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
        )
    }
    render() {
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
            payload: { currentUser }
        }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);