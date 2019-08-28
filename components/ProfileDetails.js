import React from 'react'
import {ScrollView,Button,Text,Image,StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    text:{
        fontSize:18
    },
    block:{
        padding:15,
    }
})

export default class ProfileDetails extends React.Component{
    render(){
        const {username,image} = this.props.details;
        return  <ScrollView style={styles.block}>
                    <Text style={styles.text}>Nice to meet you, {username}</Text>
                    <Image source={{ uri: image }} style={{ width: 300, height: 300,alignSelf:"center" }} />
                </ScrollView>
    }
}