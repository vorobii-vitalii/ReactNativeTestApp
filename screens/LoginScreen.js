import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'

import {logInUser} from '../redux/actions'

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
  }

  _login = async () => {
      const profileFull=this.findUserWithCredentials()
      if(typeof profileFull  === 'undefined' ) return;
      await this.props.logInUser({username:profileFull.username,image:profileFull.image})
      this.props.navigation.navigate('MainContainer');
  }

  findUserWithCredentials=()=>{
      const {username,password} = this.state;
      const user=this.props.appSignedUsers.find( user => user.username==username && user.password==password );
      return user;
  }

  switchToSignUp=()=>{
    this.props.navigation.navigate('SignUp');
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
        <Text style={styles.error}>{this.props.err}</Text>
        <View style={styles.centered}>
            <TextInput
            style={{borderWidth:2,padding:15,margin:10}}
            placeholder="username"
            value={this.state.username}
            onChangeText={this.handleUsernameUpdate}
            autoCapitalize="none"
            />
        </View>
        <View style={styles.centered}>
            <TextInput
            style={{borderWidth:2,padding:15,margin:10}}
            placeholder="password"
            value={this.state.password}
            onChangeText={this.handlePasswordUpdate}
            secureTextEntry
            />
        </View>
        <View style={styles.centered}>
            <Button title="Press to Log In" onPress={this._login} />
        </View>
        <View style={styles.centered}>
            <Text>Not yet registered?</Text>
        </View>
        <View style={styles.centered}>
            <Button title="Sign up" onPress={this.switchToSignUp} />
        </View>
      </View>
    )
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

  
export default connect( mapStateToProps , { logInUser: logInUser } ) (LoginScreen)