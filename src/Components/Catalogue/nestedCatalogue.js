import React from 'react';
// Shirts
class Shirts extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="nav-bar">
                <Link to="catalogue/shirts"><h1 id="shirt_title">Shirts</h1></Link>
            </div>
        )
    }
}
// End Shirts
// Shoes
class Shoes extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="shoes">
                <Link to="catalogue/shoes"><h1 id="shoes_title">Shoes</h1></Link>
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
                <Link to="catalogue/pants"><h1 id="pants_title">Pants</h1></Link>
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
                <Link to="catalogue/sales"><h1 id="sales_title">Pants</h1></Link>
            </div>
        )
    }
}
// End Sales
export {Shirts, Shoes, Pants, Sales};
