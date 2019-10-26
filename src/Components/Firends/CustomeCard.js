import React from 'react'
import { Card, Row , Col, Image} from 'react-bootstrap'
import chaticone from '../icons/chat-icon.png'

function CustomeCard(props){
    let { url, email, name } = props

    return(
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" roundedCircle  /> */}
            <Card.Header style={{"textAlign": "-webkit-center"}}>
                <Col xs={10} md={8}>
                    <Image src={url}  thumbnail />
                </Col>
            </Card.Header>
            <Card.Body>
                <Card.Text>{name}</Card.Text> 
                <span className="text-muted">{email}</span>
            </Card.Body>
                <Card.Footer className="text-muted" >
                    <Row>
                        <Col>Friend</Col>
                        <Col>
                          <Image src={chaticone}  className="button-action"  roundedCircle onClick={props.onClick} /></Col>
                    </Row>
                </Card.Footer>
        </Card>
    )
}

 
export default CustomeCard