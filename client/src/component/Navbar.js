import { useState } from 'react'
import { Button, Offcanvas, Container } from 'react-bootstrap'
import './Navbar.css'

const Navbar  = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className='p-0 fixed-top d-flex justify-content-end align-items-center' style={{
        height: '60px'
    }}>
      <Button onClick={handleShow} className="d-block text-dark fontNav bg-light">
        <i className="bi bi-list-ul"></i>
      </Button>
      <Offcanvas placement='top' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {props.body}
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default Navbar