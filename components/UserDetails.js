import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import UserTitle from './user_display/UserTitle'
import UserPicture from './user_display/UserPicture'

const styles=StyleSheet.create({
    block:{
        justifyContent: 'center',
        flex: 1,
        padding:20,
        alignItems:"center",
        fontSize:15
    }
})

const UserDetails=(props)=>{
    const {name,picture}=props.user;
    return <View style={styles.block}>
                <UserTitle name={name} />
                <UserPicture img={picture} minuature={false} />
           </View>
}

export default UserDetails;