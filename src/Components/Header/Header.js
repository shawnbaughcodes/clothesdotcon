import React from 'react';
import "./Header.css";
import Catalogue from "../Catalogue/Catalogue.js"
import ShirtsPage from "../Shirts/ShirtsPage.js"
import {Route, Link} from 'react-router-dom'
import {StickyContainer, Sticky} from 'react-sticky';
class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <StickyContainer>
                <Sticky>
                    {
                        ({
                            style,
                            isSticky
                        }) => {
                            return (
                                <nav className="tabs" id="theNav" style={style}>
                                    <div data-component="sticky">
                                        <ul id="myNav">
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/collections">Collections</Link>
                                            </li>
                                            <li>
                                                <Link to="/catalogue">Catalogue</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Route path="/catalogue" component={Catalogue} />
                                    <Route path="/shirts" component={ShirtsPage} />

                                </nav>
                            )
                        }
                    }
                </Sticky>
            </StickyContainer>
        )
    }
}
export default Header;
