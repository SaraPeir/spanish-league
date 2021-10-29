import React from 'react';
import {HeaderWrapper, mainColor} from './StyledHeader'
import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = ({teams}) => {
    return (
        <HeaderWrapper>
                <NavLink 
                    exact to="/"
                    activeStyle={{
                        fontWeight: "bold",
                        color: mainColor,
                        padding: "20px",
                        margin: "20px"
                    }}
                    className="nav-header-link"
                >
                    Homepage
                </NavLink>
            
            {teams.length ?
                <NavLink 
                   exact to="/teams"
                    activeStyle={{
                        fontWeight: "bold",
                        color: mainColor,
                        padding: "20px",
                        margin: "20px"
                    }}
                    className="nav-header-link"
                >
                    Teams
                </NavLink>
             : null 
            }
        </HeaderWrapper>
    )
}

export default Header