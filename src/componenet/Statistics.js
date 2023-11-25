import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <h1>
                        The Fast Pinpoint
                        Get Started
                        Tracking & Reservation.
                    </h1>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}

export default ShapeExample;