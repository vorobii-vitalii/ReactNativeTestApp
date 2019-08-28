import React from 'react'
import {TouchableOpacity,StyleSheet} from 'react-native'
import UserTitle from './user_display/UserTitle'
import UserPicture from './user_display/UserPicture'

const styles=StyleSheet.create({
    block:{
        width:'40%',
        paddingVertical:'2%',
        alignSelf:"center",
        marginLeft:'10%',

    }
})

class  SingleUser extends React.Component {

    onSingleUserPress=()=>{
        this.props.onSingleUserPress(this.props.user);
    }

    render(){
        const {name,picture}=this.props.user;
        return <TouchableOpacity style={styles.block} onPress={this.onSingleUserPress}>
                    <UserTitle name={name} />
                    <UserPicture img={picture} minuature={true} />
               </TouchableOpacity>
    }

}

export default SingleUser;

// {"gender":"male","name":{"title":"monsieur","first":"fridolin","last":"jean"},
// "login":{"uuid":"578407ed-1bce-4515-98d3-3ab73c85468a","username":"ticklishelephant311","password":"kenny","salt":"hSX7wguM","md5":"893213c837f11b37858d8fbef9f96fcc","sha1":"4e171ebc658be5b15013fc0ad40e3ea5c1c4fc66","sha256":"90fd5252eea6163698876604dad1128ecfb889a369df99c6991457fa9dae3354"},"dob":{"date":"1980-08-03T20:45:10Z","age":39},"registered":{"date":"2013-06-01T22:32:35Z","age":6},"phone":"(753)-245-6116","cell":"(391)-384-2409","id":{"name":"AVS","value":"756.4734.3771.77"},
// "picture":{"large":"https://randomuser.me/api/portraits/men/49.jpg","medium":"https://randomuser.me/api/portraits/med/men/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/49.jpg"},"nat":"CH"}