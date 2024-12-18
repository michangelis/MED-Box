import {Card, CardBody, CardTitle, Table} from "reactstrap";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import axios from "axios";
import { API_URL } from '../../api';
import {MDBCardImage} from "mdb-react-ui-kit";


const Comments = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(API_URL+`get_comments/${id}/`)
            .then(response => {
                setComments(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h2">Comments about this pill</CardTitle>
                {comments.length === 0 ? (
                    <p>Be the first to comment about this pill</p>
                ) : (
                <Table className="no-wrap mt-4 align-middle" responsive borderless>
                    <tbody>
                        {comments.map(comment => (
                            <tr key={comment.id}>
                                <td>
                                    <div className="d-flex align-items-center p-2">
                                        <Link to={{pathname: `/profile/${comment.user.id}`}} style={{ textDecoration: 'none' }}>
                                            <MDBCardImage
                                                src= {comment.user.imgSrc}
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: '150px' }}
                                                fluid />
                                        </Link>
                                        <div className="ms-5">
                                            <h6 className="mb-0" style={{color:"black"}}>{comment.user.full_name}</h6>
                                            <span className="text-muted">{comment.user.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6>{comment.commentText}</h6>
                                </td>
                            </tr>
                    ))}
                        </tbody>
                </Table>
                    )}
            </CardBody>
        </Card>
    );
};

export default Comments;
