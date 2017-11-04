import React from 'react';
import "./Shirt.css";
import {Link} from 'react-router-dom'
class Shirt extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="shirtItem">
                <div id="shirtPicture">
                    <img src="https://cdn.lookastic.co.uk/navy-and-white-gingham-long-sleeve-shirt/ging-crosby-gingham-standard-fit-sport-shirt-original-16076.jpg"/>
                </div>
            </div>
        )
    }
}
export default Shirt;
