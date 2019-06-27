import React from 'react';
import './ValueText.scss';

class ValueText extends React.Component{
    render(){
        return(
            <div className = 'bodyTextDiv'>
                <p className = 'bodyText'>
                    가치관의 대한 이야기
                </p>
                <p className = 'bodySubText'>
                    2019년 개발를 시작하면서, 단순히 프로그램 구현 이상의 근본적인 혁신을 만들기를 추구합니다.                    
                </p>
                <p className = 'bodySubText'>
                    '비 전공자'로 시작해서 더 큰 '개발자'로서 나아가고자 끊임 없이 궁금해하며 
                </p>
                <p className = 'bodySubText'>
                    성공을 금전적 성취가 아닌 발전에 대한 충족감으로 목표로 삼고 있습니다.
                </p>
            </div>
        )
    }
}

export default ValueText;