import React from 'react';
import './Category.scss';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <div className='categoryDiv'>
                <span className='category'  >      
                    {this.props.text}
                    <div className='colorBar'>
                    </div>
                </span>
            </div>
        )
    }
}

export default Category;