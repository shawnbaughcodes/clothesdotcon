import React from 'react';
import "./ShirtsPage.css";
import Shirt from "./Shirt.js"
import {Link} from 'react-router-dom'
class ShirtsPage extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="shirtsPage">
                <div id="shirtItem">
                    <Shirt/>
                </div>
            </div>
        )
    }
}
export default ShirtsPage;
