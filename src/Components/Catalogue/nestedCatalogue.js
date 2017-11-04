import React from 'react';
import {Link, Route} from 'react-router-dom';
import ShirtsPage from "../Shirts/ShirtsPage.js"
// Shirts
class Shirts extends React.Component{
    render(){
        return(
            <div className="shirts">
                <Link to="/shirts" component={ShirtsPage}><h1 id="shirt_title" className="h2">Shirts</h1></Link>
                
            </div>
        )
    }
}
// End Shirts
// Shoes
class Shoes extends React.Component{
    render(){
        return(
            <div className="shoes">
                <Link to="catalogue/shoes"><h1 id="shoes_title" className="h2">Shoes</h1></Link>
            </div>
        )
    }
}
// End Shoes
// Pants
class Pants extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="pants">
                <Link to="catalogue/pants"><h1 id="pants_title" className="h2">Pants</h1></Link>
            </div>
        )
    }
}
// End Pants
// Sales
class Sales extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="sales">
                <Link to="catalogue/sales"><h1 id="sales_title" className="h2">Sales</h1></Link>
            </div>
        )
    }
}
// End Sales
export {Shirts, Shoes, Pants, Sales};
