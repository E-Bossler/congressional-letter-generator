import React, { Component } from 'react';
import './letters.css';

class Addresses extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    componentDidMount() {
      

    }

    render() {
        return (
            <>
                {this.props.location.state.letterData.map((letter,index) => {
                    return(
                    <div dangerouslySetInnerHTML={{__html: letter.html}}></div >)
                })}
            </>
        )
    }
}

export default Addresses;