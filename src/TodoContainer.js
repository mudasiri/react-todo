import React from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title:'Visit the Masjid',
                completed:false
            },
            {
                id: 2,
                title:'Visit the Brewry',
                completed:false
            },
            {
                id: 3,
                title:'Visit the Hub',
                completed:false
            }
        ]
    }

     handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
    
                    }
                }
                return todo;
            })
        }));
    }

    deleteItem = (id) => {
        console.log('trying to delete item', id);
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    }
    render() {
        return(
            <div>
                <Header />
                <TodoInput />
                <TodoList todos={this.state.todos} handleChangeProp={this.handleChange} deleteItemProp= {this.deleteItem}/>
            </div>
        );
    }
}

export default  TodoContainer;