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

var TodoComponent = module.exports=createReactClass({
   render:function(){
       return(
         <div>
             <h1>Hello world</h1>
         </div>
       );
   }
});

// Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));