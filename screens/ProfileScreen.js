import React from 'react'
import {ScrollView,Text,Button,} from 'react-native'
import ProfileDetails from '../components/ProfileDetails'

import {connect} from 'react-redux'


class ProfileScreen extends React.Component{

    onLogOutPress=()=>{
        this.props.navigation.navigate('SignUp');
    }

    render(){
        return (
            <ScrollView>
                <ProfileDetails details={this.props.currentAppUser} />
                <Button title="Log out..." onPress={this.onLogOutPress} />
            </ScrollView>
        )
    }


}

const mapStateToProps = state => ({
    currentAppUser: state.currentAppUser,
})
  
export default connect(mapStateToProps) (ProfileScreen)