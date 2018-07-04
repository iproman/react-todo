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

var TodoComponent = module.exports = createReactClass({
    render: function () {
        return (
            <div>
                <p>
                    <strong>Cheese name: </strong> {this.props.cheese.name}
                </p>
                <p>
                    <strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}
                </p>
                <p>
                    <strong>Cheese price: </strong> {this.props.cheese.price}
                </p>
            </div>
        );
    }
});

var myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'};

// Put component into html page
ReactDOM.render(<TodoComponent mssg="I like cheese" cheese={myCheese}/>, document.getElementById('todo-wrapper'));