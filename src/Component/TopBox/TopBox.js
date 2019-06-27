import React from 'react';
import './TopBox.scss';
import Logo from './Logo';
import Category from './Category';


class TopBox extends React.Component{
    render(){
        return(
            <div className = 'categoryBox'>
                <Logo />
                <Category text="Projects"/>
                <Category text="About me"/>
                <Category text="Git Hub" />
            </div>
        )
    }
}

export default TopBox;