import React from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

const jumbotron = {
    backgroundColor: "white",
}

const mainText = {
    color: "#263238"
}

function OurPromise() {
    return (
        <div>
            <Jumbotron fluid style = {jumbotron}>
                <Container style = {mainText}>
                    <h1>Our Promise</h1>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <img />
                        Image div
                        xs=12 md=3
                    </Col>
                    <Col xs={12} md={9}>
                        <h2>Zero Effort</h2>
                        <h4>Opening an EasyMarket account with us is 100% paperless. No physical forms, photocopies or photographs.</h4>
                        xs=12 md=9
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <img />
                        Image div
                        xs=12 md=3
                    </Col>
                    <Col xs={12} md={9}>
                        <h2>Eliminate Trust Issues</h2>
                        <h4>We understand nobody wants to get scammed You don't want to release your goods before getting your money, and they don't want to pay you before receiving what they ordered. Don't worry. Just release the item. We will transfer the money to your account promptly.</h4>
                        xs=12 md=9
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <img />
                        Image div
                        xs=12 md=3
                    </Col>
                    <Col xs={12} md={9}>
                        <h2>Safe and Secure</h2>
                        <h4>EasyMarket uses bank-grade security to manage your money and your personal data is not shared with anyone.</h4>
                        xs=12 md=9
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <img />
                        Image div
                        xs=12 md=3
                    </Col>
                    <Col xs={12} md={9}>
                        <h2>Always Available</h2>
                        <h4>EasyMarket are always there to provide an extra source of income.</h4>
                        xs=12 md=9
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <img />
                        Image div
                        xs=12 md=3
                    </Col>
                    <Col xs={12} md={9}>
                        <h2>Fully Transparent</h2>
                        <h4>No hidden charges or fees, get full account of how your money and goods are managed on your personal dashboard.</h4>
                        xs=12 md=9
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default OurPromise
