import React, { Component } from 'react';
import randomItems from './randomItems'
import Button from './Button';

export default class UserInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            userName: this.props.userName,
            userIcon: this.props.userIcon
        }
    }
    componentWillMount(){
        this.randomize()
    }

    randomize = () => {
        let pictureSeed = Math.floor(Math.random() * 10);
        let firstNameSeed = Math.floor(Math.random() * 20);
        let lastNameSeed = Math.floor(Math.random() * 20);

        let name = `${randomItems.firstNames[firstNameSeed]} ${randomItems.lastNames[lastNameSeed]}`;
        let icon = randomItems.pictures[pictureSeed];

        this.setState({
            userName: name,
            userIcon: icon
        })

        this.props.setUserName(name);
        this.props.setUserIcon(icon);
    }

    render(){
        return(
            <div className="userInfo">
                <h1>User Info</h1>
                <div className="userInfoCard">
                    <div>
                        <img 
                            className="userInfoIcon"
                            src={this.props.userIcon} 
                            alt="user" />
                    </div>
                    <input 
                            type="text" 
                            placeholder="userName"
                            className="userNameInput"
                            value={this.props.userName} />
                    <Button
                        classprop="randomBtn"
                        randomize={this.randomize}>
                        Randomize!
                    </Button>
                </div>
            </div>
        )
    }
}