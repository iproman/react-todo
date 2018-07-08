var React = require('react');
var createReactClass = require('create-react-class');

var AddItem = module.exports = createReactClass({
   render: function () {
       return(
         <form id="add-todo">
             <input type="text" required/>
             <input type="submit" value="Hit me"/>
         </form>
       );
   }
});

module.exports = AddItem;