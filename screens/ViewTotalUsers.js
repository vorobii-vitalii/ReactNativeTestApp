import React from 'react'
import {ScrollView,Text,Button} from 'react-native'
import {fetchUsers} from '../api'
import ListUsers from '../components/ListUsers'

import {connect} from 'react-redux'

import {addUsers,provideSeed,providePage} from '../redux/actions'

import {compareUsers} from '../helperFunctions'


const loadMoreConstant=10;

class ViewTotalUsers extends React.Component{

    state={
        loadedNum:0,
        sortedNum:0
    }

    fillUsers=async (result)=>{
        await this.props.addUsers(result.users);
        await this.props.provideSeed({seed:result.seed})
        await this.props.providePage({nextPage:result.nextPage});
    }

    provideUsers=async ()=>{

        if(!this.canLoadMoreFromStorage()){
            await this.getUsersAPI();
        }
        this.addConstant(); 
    }

    addConstant=()=>{
        this.setState(prevState=>({
            loadedNum:prevState.loadedNum+loadMoreConstant
        }))
    }

    sorted = ()=>{
        const sorted=this.props.users.slice(0,this.state.sortedNum).sort(compareUsers);
        return sorted;
    }

    sort=()=>{
        this.setState(prevState=>({
            sortedNum:prevState.loadedNum
        }))
    }

    getUsersAPI=async()=>{
        const {nextPage,seed}=this.props.apiData;
        console.log(nextPage);
        const result=await fetchUsers(seed,nextPage);
        this.fillUsers(result); 
    }

    componentDidMount(){
        this.provideUsers();
    }

    canLoadMoreFromStorage=()=> this.props.users.length < this.state.loadedNum+1+loadMoreConstant;

    onSingleUserPress=(user)=>{
        this.props.navigation.push('View single user',{
            user:user
        })
    }

    addUser=()=>{
        this.props.navigation.push('Add user');
    }

    getUsers=()=>{
        console.log(this.sorted());
        console.log(this.props.users.slice(this.state.sortedNum-1,this.state.loadedNum));
        return [ ...this.sorted() , ...this.props.users.slice(this.state.sortedNum,this.state.loadedNum) ];
    }

    render(){
        return (
            <ScrollView>
                <Button onPress={this.addUser} title="Add new user" />
                <Button onPress={this.sort} title="Sort" />
                <ListUsers 
                    users={this.getUsers()} 
                    onSingleUserPress={this.onSingleUserPress}
                    canLoadMore={true}
                    onLoadMore={this.provideUsers}
                />
            </ScrollView>
        )
    }


}

const mapStateToProps = state => ({
    users: state.users,
    apiData: state.apiData
})
  
export default connect(mapStateToProps,{addUsers: addUsers,
                                        provideSeed:provideSeed,
                                        providePage:providePage})
                      (ViewTotalUsers)