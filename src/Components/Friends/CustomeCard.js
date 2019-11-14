import React from 'react'
import { Card, Row , Col, Image} from 'react-bootstrap'
import chaticone from '../icons/chat-icon.png'

function CustomeCard(props){
    let { url, email, name } = props

    return(
        <Card style={{ width: '220px', wordWrap: "normal", backgroundColor:"#f8f9fa99" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" roundedCircle  /> */}
            <Card.Header style={{"textAlign": "-webkit-center"}}>
                <Col xs={10} md={8}>
                    <Image src={url}  thumbnail />
                </Col>
            </Card.Header>
            <Card.Body>
                <Card.Text>{name}</Card.Text> 
                <div className="text-muted">{email}
                    {/* <span className="tooltiptext" >{email}</span> */}
                </div>
            </Card.Body>
                <Card.Footer>
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