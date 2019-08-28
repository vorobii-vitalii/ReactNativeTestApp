import React from 'react'
import {Text,ScrollView} from 'react-native'
import {capitalize} from '../../helperFunctions'

const UserTitle=( {name} )=>(
    <ScrollView>
        <Text>{ `${ capitalize(name.first)} ${capitalize(name.last)}` }</Text>
    </ScrollView>
)

export default UserTitle;