var React = require('react');
var createReactClass = require('create-react-class');
import {Link} from 'react-router-dom';

var About = module.exports = createReactClass({
   render: function () {
       return(
           <div>
               <Link to={'/'}>Home</Link>
               <h2>All about me</h2>
               <p>Awesome, here is my first project using React</p>
           </div>
       );
   }
});

module.exports =About;