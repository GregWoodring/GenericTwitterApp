import React, { Component } from 'react';
import Post from './Post'
import axios from 'axios';


export default class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchText: '',
            searchList: []
        }
    }

    searchPosts = async () => {
        await this.setState({
            searchList: []
        })
        axios.get(`/todos?text=${this.state.searchText}`).then(res => {
            console.log(res.data)
            this.setState({
                searchList: res.data
            })
        })
    }

    renderPosts = () => {
        return this.state.searchList.map((item, index) => {
            console.log(item);
           return( <Post
                key={item.index}
                id={index}
                userIcon={item.userIcon}
                userName={item.userName}
                editPost={this.editPost}
                deletePost={this.deletePost}
                text={item.text}
                postTime={item.postTime}
            />)
        })
    }


    render(){
        return(
            <aside className="searchWrapper">
                <h1>Search</h1>
                <div className="searchBarWrapper">
            
                    <input
                        type="text"
                        placeholder="Search by Text"
                        className="searchBar"
                        onChange={e => this.setState({searchText: e.target.value})}
                        value={this.state.searchText} />
                    <button 
                        className="composeBtn"
                        onClick={this.searchPosts}>
                        Search
                    </button>
                </div>

                {this.renderPosts()}
            </aside>
        );
    }
}