import React from 'react';
import "./Shirt.css";
import {Link} from 'react-router-dom'
class Shirt extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="col shirtItem">
                <div id="shirtPicture">
                    <img src="http://www.patagonia.ca/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc89f3efd/images/hi-res/52921_CTYB.jpg?sw=750&sh=750&sm=fit&sfrm=png"/>
                </div>
                <div id="shirtActionButtons">
                    <div id="shirtAddButton">
                        <Link to="" className="h2">Add To Cart</Link>
                    </div>
                    <div id="shirtBuyButton">
                        <Link to="" className="h2">Buy Now</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Shirt;
