/**
 * @type {React}
 */
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/index.css');

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

//////////// state
var TodoComponent = module.exports = createReactClass({
    getInitialState: function () {
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
        }
    },
    render: function () {
        var todos = this.state.todos;
        todos = todos.map(function (item, index) {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete = this.onDelete.bind(this)}/>
            );
        }.bind(this));

        return (
            <div id="todo-list">
                <p>The busiest people have the most leasure...</p>
                <ul> {todos}</ul>
                <AddItem onAdd={this.onAdd}/>
                <listComponent todos={this.state.todos}/>
            </div>
        );
    }, // render

    // Custom functions

    onDelete: function (item) {
        var updatedTodos = this.state.todos.filter(function(val,index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    },

    onAdd: function (item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },

    // Lifecycle functions
    // It's called before the render DOM
    componentWillMount: function () {
        console.log('componentWillMount');
    },

    // It's called before the render DOM and after componentWillMount
    componentDidMount: function () {
        console.log('componentDidMount');
        // any grabbing of external data
    },

    // It's called after the render DOM and update initialState
    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    }
});



// Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));