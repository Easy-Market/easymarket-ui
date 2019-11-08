import React, {Component} from 'react';
import {Container, Row, Col, Button, ButtonToolbar} from 'react-bootstrap';
import styled from 'styled-components';
import image1 from '../img/mobileapp.svg';
import image2 from '../img/mobileapp2.svg';
import image3 from '../img/playstore.svg';
import '../styles/DownloadApp.css'

const imageDimension = {
    marginTop: "-50px",
    width: "450px",
    height: "450px"
}

const subText = {
    fontSize: "15px",
    textAlign: "left"
}

const mainText = {
    fontSize: "40px",
    textAlign: "left"
}

const midiSpace = {
    width: "100%",
    height: "100px"
}

const iconDimension = {
    width: "50px",
    height: "50px",
    marginLeft: "10px",
    marginRight: "10px"

}

// const hoverButton = styled.button`
//     color: #E60D98;
//     :hover {
//         color: #000;
//         background: #E60D98;
//         cursor: pointer;
//     }
// `;

class DownloadApp extends Component {
    render() {
        return (
            <div>
                <div style={midiSpace}></div>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={7}>
                            <img style={imageDimension} src={ image2 } fluid/>
                        </Col>
                        <Col xs={12} md={12} lg={5}>
                            <h4 style={subText}><strong>DOWNLOAD</strong></h4>
                            <h2 style={mainText}><strong>Easy Market</strong></h2>
                            <p style={{textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae commodi, cum necessitatibus ea quia accusamus blanditiis dolore dolorem ad voluptate, distinctio adipisci! Tenetur iusto.</p>
                            <Row>
                                <Col>
                                        <ButtonToolbar>
                                            {/* <Button style={{height: "100px", width: "60px", marginLeft: "30px"}} >Apple</Button> */}
                                            
                                                <Button className="hoverButton" block>
                                                        <img src={image3}  style={iconDimension}/>
                                                        Get it on <strong>Google PlayStore</strong>
                                                </Button> 
                                        </ButtonToolbar>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div style={midiSpace}></div>
            </div>
        )
    }
    
}

export default DownloadApp
