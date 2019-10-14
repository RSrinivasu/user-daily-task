import React from 'react'
import { Card, Row , Col, Image} from 'react-bootstrap'

function CustomeCard(props){
    let { url , friend ,chart } = props
    return(
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" roundedCircle  /> */}
            <Image src="holder.js/171x180" roundedCircle />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col>Friend</Col>
                        <Col>Chat</Col>
                    </Row>
                </Card.Footer>
        </Card>
    )
}

 
export default CustomeCard