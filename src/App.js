import React, { Component } from 'react';
import Header from './components/Header';
import Compose from './components/Compose';
import Post from './components/Post';
import UserInfo from './components/UserInfo';
import Search from './components/Search'
import './ToDo.css'

import axios from 'axios'


export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoList: [],
            userName: '',
            userIcon: ''
        }
    }

    componentDidMount(){
        axios.get('/todos').then(res =>{
            this.setState({
                todoList: res.data
            })
        }).catch(err => {
            alert(`Unable to fetch data Error: ${err}`);
        })
    }

    postToDo = (e, text) => {
        let date = new Date();
        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
        let AmPm = date.getHours() > 11 ? 'PM' : 'AM';

        let post = {
            userIcon: this.state.userIcon,
            userName: this.state.userName,
            text,
            postTime: `${hours}:${minutes} ${AmPm}`
        }

        console.log(post)

        axios.post('/todos', post).then( res => {
            // console.log(res.data)
            this.setState({
                todoList: res.data
            })
        }).catch( err => {
            alert(`Unable to post to server Error: ${err}`)
        })
    }

    editPost = (id, message) => {
        let post = this.state.todoList[id];
        post.text = message;
        axios.put(`/todos/${id}`, post).then(res => {
            this.setState({
                todoList: res.data
            })
        }).catch(err => {
            alert(`Unable to edit postId: ${id} Error: ${err}`);
        })
    }

    deletePost = id => {
        axios.delete(`/todos/${id}`).then(res => {
            this.setState({
                todoList: res.data
            })
        }).catch(err => {
            alert(`Unable to delete postId: ${id} server Error: ${err}`)
        })
    }

    setUserName = userName => {
        this.setState({
            userName
        })
    }

    setUserIcon = userIcon => {
        this.setState({
            userIcon
        })
    }

    renderPosts = () => {
        return this.state.todoList.map((item, index) => {
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
                showBtns={true}
            />)
        })
    }

    render(){
        return(
            <div>
                <Header />
                <body className="body">
                    <UserInfo 
                        setUserName={this.setUserName}
                        setUserIcon={this.setUserIcon}
                        userName={this.state.userName}
                        userIcon={this.state.userIcon}
                    />
                    <section className="center">
                        <Compose 
                            postToDo={this.postToDo}
                        />
                        <div className="postArea">
                            {this.renderPosts()}
                        </div>                        
                    </section>
                    <Search />
                </body>
            </div>
        )
    }
    
}