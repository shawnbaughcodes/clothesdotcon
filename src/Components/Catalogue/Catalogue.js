import React from 'react';
import "./Catalogue.css";
import {Shirts, Shoes, Pants, Sales} from "./nestedCatalogue"
import {Route, Link} from 'react-router-dom'
class Catalogue extends React.Component{
    render(){
        return(
            <div className="catalogueContainer">
                <div className="subHead">
                    <h1>Catalogue</h1>
                </div>
                <div id="shirts">
                    <Shirts/>
                </div>
                <div id="shoes">
                    <Shoes/>
                </div>
                <div id="pants">
                    <Pants/>
                </div>
                <div id="sales">
                    <Sales/>
                </div>
                <Route path="/catalogue/shirts" component={Shirts} />
                <Route path="/catalogue/shoes" component={Shoes} />
                <Route path="/catalogue/pants" component={Shoes} />
                <Route path="/catalogue/sales" component={Sales} />
            </div>
        )
    }
}
export default Catalogue;
