import React, { useState, useEffect } from 'react';
import {Button} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { API_URL } from '../api';


function Pop() {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchNextUser = async () => {
            const response = await axios.get(API_URL+ 'get_next_user/');
            setUser(response.data);
        };

        fetchNextUser();
    }, []);

    useEffect(() => {
        let timerId;

        if (user) {
            const now = new Date();
            const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), user.alarm_time.split(':')[0], user.alarm_time.split(':')[1], user.alarm_time.split(':')[2]);

            if (now < alarmTime) {
                timerId = setTimeout(() => setShow(true), alarmTime.getTime() - now.getTime());
            }
        }

        return () => clearTimeout(timerId);
    }, [user]);

    const handleClose = () => {
        setShow(false);
    };

    const handleOk = () => {
        setShow(false);
    };

    return (
        <>
            {show && user && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Time to take {user.pill_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>It's {user.alarm_time}! Time for {user.full_name} to take {user.pill_name}.</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn" outline color="success" onClick={handleOk}>
                            OK
                        </Button>
                        <Button className="btn" outline color="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default Pop;
