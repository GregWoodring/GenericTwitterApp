import React, { Component } from 'react';

export default class Compose extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: ''
        }
    }

    updateMessage = e => {
        this.setState({
            message: e.target.value
        })
    }

    render(){
        return(
            <div className="composeWrapper">
                <textarea rows="4" cols="25"
                    className="composeMsg" 
                    onChange={this.updateMessage} 
                    value={this.state.message}/>
                <div className="composeFooter">
                    <button
                        className="composeBtn"
                        onClick={e => {
                            this.props.postToDo(e, this.state.message)
                            this.setState({message: ''})
                        }}
                    >
                       Send <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
                
            </div>
        )
    }
}