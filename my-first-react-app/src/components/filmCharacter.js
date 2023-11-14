import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const FilmCharacter = (props) => {

  const [show, setShow] = useState(false);
  const [dataSource, setDataSource] = useState(props.dataSource);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showDetails = () => {

    handleShow()
  }
  const saveMe = () => {
    console.log(dataSource)
  }

  const changeName = (e) => {
    setDataSource({ ...dataSource, name: e.target.value })
  }

  return <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.dataSource.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={dataSource.name} onChange={(e) => { changeName(e) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Height</Form.Label>
            <Form.Control type="text" value={props.dataSource.height} onChange={(e) => { setDataSource({ ...dataSource, height: e.target.value }) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mass</Form.Label>
            <Form.Control type="text" value={props.dataSource.mass} onChange={(e) => { setDataSource({ ...dataSource, mass: e.target.value }) }} />
          </Form.Group>

        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveMe}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    <table>
      <tbody>
      <tr><td>
        <img src={props.filmCharImg} style={{ width: '80%' }} alt="" />
      </td></tr>
      <tr><td>
        <Button variant="primary" onClick={showDetails}>{props.filmCharName + ' Details'}</Button>
      </td></tr>
      </tbody>
    </table>
  </>

}


export default FilmCharacter
