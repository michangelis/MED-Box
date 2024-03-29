import React, {useEffect, useState} from 'react';
import {Button} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../api";

function Pop(props) {
    const [show, setShow] = useState(false);
    const [box, setBox] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function fetchBox() {
        try {
            const response = await axios.get(API_URL + 'get_box/');
            console.log(response.data);
            setBox(response.data.box);
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
        }
    }
    async function handleClick() {
         fetchBox();
        if (box) {
            try {
                const response = await axios.post(API_URL + 'take_pill/', { pill_id: props.pill_id, 'box': box });
                setMessage(response.data.message);
                setBox(false);
                console.log(response.data.message);
            } catch (error) {
                setError(error);
            }
        }
        setShow(true);
    }

     async function handleOk(){
         await fetchBox();
         if (box) {
             try {
                 const response = await axios.post(API_URL + 'take_pill/', { pill_id: props.pill_id, 'box': box });
                 setMessage(response.data.message);
                 setBox(false);
                 console.log(response.data.message);
             } catch (error) {
                 setError(error);
             }
         }
        setShow(false);
    }

    return (
        <>
            <Button className="btn" outline color="info" onClick={() => {
                handleClick();
                handleShow();
            }}>
                Give me
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{message}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click Ok to <strong>continue</strong> or Cancel to <strong>return</strong></Modal.Body>
                <Modal.Footer>
                        <Button className="btn" outline color="success" onClick={handleOk}>
                            OK
                        </Button>
                    <Button className="btn" outline color="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Pop;