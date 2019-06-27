import React from 'react';
import TopBox from '../Component/TopBox'
import HeaderImg from '../Component/HeaderImg'
import ValueText from '../Component/ValueText'
import './HomePage.scss';
// import Img from '../img/computerImg.jpg';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <TopBox />
                <HeaderImg/>
                <ValueText />
            </div>
        )
    }
}

export default HomePage;