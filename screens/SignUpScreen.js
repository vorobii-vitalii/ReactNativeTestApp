import React from 'react'
import {Button,Image,View, ScrollView, StyleSheet, Text, TextInput,Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import {userSignedUp} from '../redux/actions'
import {connect} from 'react-redux'

class SignUpScreen extends React.Component {
  
    state = {
      username: '',
      password: '',
      err:"",
      image:null
    }

    signUp=async ()=>{    
        const {username,password,image}=this.state;
        if(username===''){
            this.setState({
                err:"Provide username in order to sign up"
            })
            return;
        }
        if(!image){
            this.setState({
                err:"Provide image in order to sign up"
            })
            return;
        }
        if(password===''){
            this.setState({
                err:"Provide password in order to sign up"
            })
            return;
        }

        if(this.noSuchUsernameProfile(username)){
            await this.props.userSignedUp( {username:username,password:password,image:image} )
            await this.saveToGallery(image);
            await this.switchToLogin();
        }

    }

    // componentDidMount() {
    //     FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
    //       console.log(e, 'Directory exists');
    //     });
    //   }

    saveToGallery=async (url)=>{
        await MediaLibrary.createAssetAsync(url);
    }


    noSuchUsernameProfile=(username)=> this.props.appSignedUsers.filter( user => user.username == username  ).length == 0

    switchToLogin=()=>{
        this.props.navigation.navigate('Login');
    }
  
    handleUsernameUpdate = username => {
      this.setState({username})
    }
  
    handlePasswordUpdate = password => {
      this.setState({password})
    }
  
    render() {
        return (
            <View style={styles.container}>
            
            <Text style={styles.error}>{this.state.err}</Text>
            <TextInput
                placeholder="username"
                style={{borderWidth:2,padding:15,margin:10}}
                value={this.state.username}
                onChangeText={this.handleUsernameUpdate}
                autoCapitalize="none"
            />
            <TextInput
                placeholder="password"
                style={{borderWidth:2,padding:15,margin:10}}
                value={this.state.password}
                onChangeText={this.handlePasswordUpdate}
                secureTextEntry
            />
            <ScrollView style={styles.centered}>
                    <Button
                    title="Pick an image from gallery"
                    onPress={this._pickImage}
                    />
            </ScrollView>

            <ScrollView style={styles.centered}>
                    <Button
                    title="Take image from camera"
                    onPress={this._launchCamera}
                    />
            </ScrollView>
                    
            <ScrollView style={styles.centered}>
                <Button style={styles.centered} title="Press to Sign Up" onPress={this.signUp} />
            </ScrollView>

            <Text style={styles.text}>Already registered?</Text>

            <ScrollView style={styles.centered}>
                <Button title="Log in" onPress={this.switchToLogin} />
            </ScrollView>

                    
            </View>
        )
    }

    getPermissionGalleryAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            await this.setState({err:"Permission for gallery is required"});
        }
    }

    getPermissionCameraAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
          if (status !== 'granted') {
            await this.setState({err:"Permission for camera is required"});
          }
        }
    }
    
    _pickImage = async () => {
        await this.getPermissionGalleryAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    _launchCamera=async() => {
        await this.getPermissionGalleryAsync();
        await this.getPermissionCameraAsync();

        let result=await ImagePicker.launchCameraAsync({});

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }
    
}
  
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding:20,
        alignItems:"center",
        fontSize:15
    },
    text: {
        textAlign: 'center',
    },
    error: {
        textAlign: 'center',
        color: 'red',
    },
    centered:{
        alignSelf:'center',
        padding:10,
        width:"70%"
    }
})

const mapStateToProps = state => ({
    appSignedUsers: state.appSignedUsers,
})

  
export default connect( mapStateToProps , { userSignedUp: userSignedUp } ) (SignUpScreen)