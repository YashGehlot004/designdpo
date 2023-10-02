import { Col, Row, Tab, Tabs } from "react-bootstrap";
import imgtab from '../images/main1.jpg';
import imgtad2 from '../images/main1.jpg';
import imgtad3 from '../images/main1.jpg';
import imgtad10 from '../images/main1.jpg';
import imgtad4 from '../images/main1.jpg';
import imgtad5 from '../images/main1.jpg';
import imgtad6 from '../images/main1.jpg';
import imgtad7 from '../images/main1.jpg';
import imgtad8 from '../images/main1.jpg';
import imgtad9 from '../images/main1.jpg';
import imgtad11 from '../images/main1.jpg';
import imgtad12 from '../images/main1.jpg';



export function Tabbing() {
    return (
        <div className="More_Design pt-3x">
            <h1 className=" text-center fw-bold  py-5">
                Trending More Design
            </h1>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3 tabss">
                <Tab eventKey="home" title="All Design">
                    <Row className="py-5 m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtab} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad2} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad3} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad4} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad5} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad6} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad7} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad8} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad9} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad10} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad12} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="profile" title="Bed Designs">
                    <Row className=" justify-content-center m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtab} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad9} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad12} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="contact" title="Wardrobe Designs">
                    <Row className="justify-content-center m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad8} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="tv" title="TV Unit Designs">
                    <Row className="justify-content-center m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad4} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad5} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad6} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Kitchen" title="Modular Kitchen Designs">
                    <Row className="justify-content-center m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad7} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Bedroom" title="Bedroom Designs">
                    <Row className="justify-content-center m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Childrens" title="Childrens Bedroom Designs">
                    <Row className="justify-content-center m-0">
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad12} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad9} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                        <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                            <img src={imgtad8} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Living" title="Living Room Designs">
                    <Row className="justify-content-center">
                        <Col className="col-lg-3  col-12 col-md-6 ">
                            <img src={imgtad4} width={'400px'} className="img-fluid tabimg py-2" alt="" />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
}