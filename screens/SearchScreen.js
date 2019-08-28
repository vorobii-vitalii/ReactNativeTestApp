import React from 'react'
import {ScrollView,View,Text,Button} from 'react-native'
import ListUsers from '../components/ListUsers'
import Search from '../components/Search'
import {compareUsers} from '../helperFunctions'

import {connect} from 'react-redux'



const loadMoreConstant=10;

class SearchScreen extends React.Component{

    state={
        showSearchForm:false,
        searched:[],
        loadedNum:0,
    }

    searchUsers=(keywordSensitive)=>{
        const keyword=keywordSensitive.toLowerCase();
        const searchResult=keyword !=='' ? this.props.users.filter( user =>
                                        (user.name.first.indexOf(keyword) != -1) || (user.name.last.indexOf(keyword) != -1) )                                   
                                         : []
        this.setState({
            searched:searchResult
        })
    }

    sort=async ()=>{
        console.log('clicked');
        const sorted=await this.state.searched.sort(compareUsers);
        this.setState(prevState=>({
            searched:sorted
        }))
    }

    provideUsers=async ()=>{
        this.addConstant();
    }

    addConstant=()=>{
        this.setState(prevState=>({
            loadedNum:prevState.loadedNum+loadMoreConstant
        }))
    }

    componentDidMount=async ()=>{
        this.provideUsers();
    }

    onSingleUserPress=(user)=>{
        this.props.navigation.push('View single user',{
            user:user
        })
    }

    canLoadMore=()=>{

        if(this.state.searched.length==0) return false;

        if(this.state.loadedNum<this.state.searched.length){
            return true;
        }

        return false;

    }

    render(){
        return (
            <ScrollView>
                <Search onSubmit={this.searchUsers} />
                {this.state.searched.length==0 && <Text>Type to search...</Text>}
                {this.state.searched.length > 1 && <Button  onPress={this.sort} title="Sort" /> }
                <ListUsers 
                    users={this.state.searched.slice(0,this.state.loadedNum)} 
                    onSingleUserPress={this.onSingleUserPress} 
                    canLoadMore={this.canLoadMore()} 
                    onLoadMore={this.provideUsers}
                />
            </ScrollView>
        )
    }


}

const mapStateToProps = state => ({
    users: state.users,
})
  
export default connect(mapStateToProps)(SearchScreen)