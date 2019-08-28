import React from 'react'
import {FlatList,StyleSheet,View,Button,Text} from 'react-native'
import SingleUser from './SingleUser'

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1
    },
    centered:{
        alignSelf:'center',
        padding:10,
        width:"50%"
    }
})

export default class ListUsers extends React.Component{

    representSingleUser=({item})=>(
        <SingleUser user={item}onSingleUserPress={this.onSingleUserPress}   />
    )

    onSingleUserPress=(user)=>{
        this.props.onSingleUserPress(user);
    }

    onLoadMorePressed=()=>{
        this.props.onLoadMore();
    }

    render(){
        return (
            <View style={styles.container}> 
                <FlatList 
                    data={this.props.users}
                    renderItem={this.representSingleUser}
                    numColumns={2}
                    keyExtractor={(item, index) => 'key'+index}
                />
                <View style={styles.centered}>
                    {this.props.canLoadMore && <Button color="green" onPress={this.onLoadMorePressed} title="Load more..." /> }
                </View>
                
            </View>
        )
    }
}

