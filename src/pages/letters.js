import React, { Component } from 'react';
import './letters.css';

const letterJSXarray = [];

class Letters extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    genLetters() {
        // console.log('getting here')
        console.log(letterJSXarray)
        
        letterJSXarray.map(
            (letter) => {
                console.log(letter)
                // return {letter}
            }
        )

        return (
            <>
                {}
            </>
        )
    }

    componentDidMount() {
        // console.log(this.state)
        // console.log(this.props.location.state.userData)
        // console.log(this.props.location.state.letterData)
        const letterData = this.props.location.state.letterData
        // console.log(letterData)
        for (let i = 0; i < letterData.length; i++) {
            letterJSXarray.push(letterData[i].html)
        }
        // console.log(letterJSXarray)
        // this.genLetters()

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

export default Letters;