import React from 'react'
import {View,TextInput,Text,Button,StyleSheet,} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {connect} from 'react-redux'

import {addUser} from '../redux/actions'

const styles=StyleSheet.create({
    block:{
        flex:1,
        padding:20,
        alignItems:"center"
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

class AddUserScreen extends React.Component{

    state={
        first:"",
        last:"",
        image:"",
        err:""
    }

    genericTextHandler= key => text => {
        this.setState({[key]:text})
    }

    getPermissionGalleryAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            await this.setState({err:"Permission for gallery is required"});
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

    add=async ()=>{
        const {first,last,image} = this.state; 
        
        if(first === '' || last === '' || image===''){
            this.setState({
                err:"Empty fields detected"
            })
            return;
        }

        const newUserObject={
            name:{
                first:first.toLowerCase(),last:last.toLowerCase()
            },
            picture:{
                medium:image,
                large:image
            }
        }

        await this.props.addUser(newUserObject);
        this.props.navigation.goBack();

    }

    render(){
        const {first,last,photoLink} = this.state;
        return (
            <View style={styles.block}>
                    <Text>{this.state.err}</Text>
                    <TextInput value={first} style={{borderWidth:2,padding:15,margin:10}} onChangeText={this.genericTextHandler("first")} placeholder="Enter First name" />
                    <TextInput value={last} style={{borderWidth:2,padding:15,margin:10}} onChangeText={this.genericTextHandler("last")} placeholder="Enter Last name" />
                    <View style={styles.centered}>
                    <Button
                        title="Pick an user image from gallery"
                        onPress={this._pickImage}
                    />
                    </View>
                    <Button onPress={this.add} title="Add new user" />
            </View>
        )
    }
}
  
export default connect(null,{addUser: addUser,} ) (AddUserScreen)

