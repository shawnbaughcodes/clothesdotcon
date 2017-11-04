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
            <div className="row">
                <div className="col col-8 push-middle push-center shirtsPage">
                    <div className="row gutters">
                        <div className="col col-3" id="sidebar">
                            <div id="shirtsSideBar">
                                <h3 className="h3">Shirts</h3>
                                <div id="shirtTypes">
                                    <ol>
                                        <li>All</li>
                                        <li>Long Sleve</li>
                                        <li>Short Sleeve</li>
                                        <li>Tanks</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col col-9 content" id="shirtItem">
                            <Shirt/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShirtsPage;
