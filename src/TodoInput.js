import React, { Component } from "react";

class TodoInput extends Component{

    state = {
        title:''
    }
    render() {
        return(
            <input type="text" placeholder="Enter Todo task...." value={this.state.title}></input>
        );
    }
}

export default TodoInput;