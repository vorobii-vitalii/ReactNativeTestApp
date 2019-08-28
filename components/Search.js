import React from 'react'
import {Button,ScrollView,Text,TextInput} from 'react-native'

export default class Search extends React.Component{

    state={
        searchWord:""
    }

    handleSearchFormChange=(text)=>{
        this.setState({
            searchWord:text
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.searchWord!=this.state.searchWord){
            this.props.onSubmit(this.state.searchWord);
        }
    }

    render(){
        const {shouldSearch} = this.props;
        return <ScrollView style={{padding:7,borderWidth:2}}>
                            <TextInput value={this.state.searchWord} onChangeText={this.handleSearchFormChange} />
               </ScrollView>
                                    
    }

}