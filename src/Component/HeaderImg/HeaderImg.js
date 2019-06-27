import React from 'react';
import './HeaderImg.scss';
import Img from '../../img/computerImg.jpg';

class HeaderImg extends React.Component{
    render(){
        return(
            <div className='imgDiv'>
                <img className='homeImg' src={Img} alt="" />
                <p className='imgText'>
                    비 전공자의 개발 공간
                    </p>
                <p className='subText'>
                    포기란 배추를 셀 때만 쓰는 단어입니다.
                </p>
                <p className='subText bottom'>
                비전공자가 어떻게 이루어 나가는지 확인하세요.
                </p>
            </div>
        )
    }
}

export default HeaderImg;