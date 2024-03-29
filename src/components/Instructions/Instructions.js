import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
export default function Instructions(){
    return(
            <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <Row>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="feather feather-book-open" style={{marginRight: "20px"}}>
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                                <span><h2 style={{textAlign:"center"}}>User manual</h2></span>
                            </Row>
                </CardTitle>
                <CardBody>
                    <h3>1. Go get a glass of water</h3>
                    <div style={{textAlign:"center"}}>
                        <p style={{fontSize: "20px"}}>Drinking water when taking a pill helps to
                            ensure proper absorption and avoid irritation to the esophagus,
                            while also preventing dehydration.</p>
                    </div>
                    <h3>2. Stand in a visible spot so the camera can detect you</h3>
                    <div style={{textAlign:"center"}}>
                        <p style={{fontSize: "20px"}}>When using a camera with a machine learning (ML) algorithm to detect your presence,
                            it is important to take a step back. This allows the algorithm to better analyze your
                            features and improve accuracy, while also preventing distortion that can occur when you
                            are too close to the camera. By giving the ML algorithm a clear view of you, you can ensure
                            that it can properly detect and identify you.</p>
                    </div>
                </CardBody>
            </Card>
  )
}