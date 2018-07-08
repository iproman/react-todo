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
                <ul>
                    {todos}
                </ul>
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
    }
});



// Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));