/**
 * @type {React}
 */
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// Create component
// var TodoComponent = React.createClass({
//     render: function () {
//         return (
//             <h1>Hello World</h1>
//         );
//     }
// });

//////////// props
// var TodoComponent = module.exports = createReactClass({
//     render: function () {
//         return (
//             <div>
//                 <p>
//                     <strong>Cheese name: </strong> {this.props.cheese.name}
//                 </p>
//                 <p>
//                     <strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}
//                 </p>
//                 <p>
//                     <strong>Cheese price: </strong> {this.props.cheese.price}
//                 </p>
//             </div>
//         );
//     }
// });

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
                <li>{item}</li>
            )
        })


        return (
            <div id="todo-list">
                <p>The busiest people have the most leasure...</p>
                <ul>
                    {todos}
                </ul>
                <listComponent todos={this.state.todos}/>
            </div>
        );
    } // render
});

// Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));