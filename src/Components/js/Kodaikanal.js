import React from 'react'
import {kodaikanalContent} from './ContentDetails';
import { Container, Row, Col, Card ,Button} from "react-bootstrap";
import {kodaikanalCard} from "./CardDetails";
const Content = () => {
    return (
        <div id='kodaikanal'>
        <div className='content pt-5'>
            {kodaikanalContent.map((content)=>(
                <>
                 <div className='contentImage'>
                 <h1>{content.heading}</h1>
                 <img style={{ maxHeight: "55vh" }} src={content.image} alt="contentimage" />
                </div>
             <div className="contentDetails">
                 <h6 className='pb-4'>{content.secondHeading}</h6>
                 <p>{content.p1}</p>
                 <p>{content.p2}</p>
             </div>
             </>
            ))}           
        </div>
        <div>
        <h3 style={{textAlign:'center'}}>Must Visit Place In Kodaikanal</h3>
       <div className='pb-5'>
        <Container>
            <Row>
                {kodaikanalCard.map((placeCardDetail)=>(
                <Col className="d-flex pt-5 ">
                    <Card style={{width: '18rem' }}>
                        <Card.Img variant="top" src={placeCardDetail.placeImg}  />
                        <Card.Body >
                            <Card.Title className="cardtitle">{placeCardDetail.placeTitle}</Card.Title>
                            <Card.Text className="cardtext">
                                {placeCardDetail.placeDetails}
                            </Card.Text>
                            <Button variant="primary" >Read more </Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
       </div>
    </div>
        </div>
    )
}

export default Content