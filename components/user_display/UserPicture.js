import React from 'react'
import ImageWithDefault from './ImageWithDefault'
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    picture:{
        width: 120, height: 120
    },
})

const UserPicture = ({img,minuature}) => (
   <ImageWithDefault style={styles.picture} source={{uri: minuature?img.medium:img.large}} />
)

export default UserPicture;