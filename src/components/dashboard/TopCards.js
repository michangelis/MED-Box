import {Card, CardBody} from "reactstrap";


const TopCards = (props) => {
  return (
        <Card>
            <CardBody>
              <div className="d-flex">
                <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
                  <i className={props.icon}/>
                </div>
                <div className="ms-3">
                    <small className="text-muted">{props.subtitle}</small>
                  <h3 className="mb-0 font-weight-bold">{props.earning}</h3>
                </div>
              </div>
            </CardBody>
          </Card>
  );
};

export default TopCards;
