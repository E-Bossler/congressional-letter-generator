import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


class Header extends Component {


    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container>
                        <h1>Congressional Letter Generator</h1>
                        <p>
                            Easily create beautiful letters to your representatives.
                        </p>
                    </Container>
                </Jumbotron>
            </>
        )
    }
};

export default Header;