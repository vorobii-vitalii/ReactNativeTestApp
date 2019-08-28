import React from 'react'
import {ScrollView,StyleSheet,Text} from 'react-native'
import UserTitle from './user_display/UserTitle'
import UserPicture from './user_display/UserPicture'

const styles=StyleSheet.create({
    block:{
        flex:1,
    }
})

const UserDetails=(props)=>{
    const {name,picture}=props.user;
    return <ScrollView style={styles.block}>
                <UserTitle name={name} />
                <UserPicture img={picture} minuature={false} />
           </ScrollView>
}

export default UserDetails;