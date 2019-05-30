import React, { Component } from 'react';

export default class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: this.props.text,
            edit: false
        }
    }



    render(){
        return(
            <div className="post">
                <div className="postImg">
                    <img 
                        className="userIcon"
                        src={this.props.userIcon} 
                        alt="userIcon" />
                </div>
                <div className="postBody">
                    <div className="postBodyHeader">
                        <h4>{this.props.userName}</h4>
                        <p>{this.props.postTime}</p>
                    </div>
                    {this.state.edit ? 
                        <textarea rows="4" cols="25" 
                        onChange={e => this.setState({message: e.target.value})} value={this.state.message}
                        className="postTextEdit" />
                        :
                        <p
                            className="postText"
                        >{this.state.message}</p>
                    }
                    
                </div>
                {this.props.showBtns ? 
                <div className="postBtnsArea">
                    {this.state.edit ? 
                    <div className="postBtns">
                        <button
                        onClick={e => {
                            this.setState({edit: false});
                            this.props.editPost(this.props.id, this.state.message);
                        }}
                        >
                            <i className="fa fa-paper-plane"></i>
                        </button>
                    </div>
                    :
                    <div className="postBtns">
                        <button
                            onClick={() => this.props.deletePost(this.props.id)}
                            >
                            <i className="fa fa-times-circle"></i>
                        </button>
                        <button
                            onClick={() => this.setState({edit: true})}
                            >
                            <i className="fa fa-pencil"></i>
                        </button>
                    </div>
                    }
                </div>
                : 
                undefined
                }
            </div>
        )
    }
    
}