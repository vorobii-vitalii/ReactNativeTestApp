import React from 'react'
import {ScrollView,Text} from 'react-native'
import UserDetails from '../components/UserDetails'

export default class ViewSingleUser extends React.Component{
    
    render(){
        return <ScrollView>
                    <UserDetails user={this.props.navigation.getParam('user')} />
               </ScrollView>
    }

}