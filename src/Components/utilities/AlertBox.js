import React ,{ useState } from 'react'
import {Alert ,Button} from 'react-bootstrap'

function AlertBox(msg){
    const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" className="alert-box" >
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
      </Alert>
    </>
  )

}

export default AlertBox