import React from "react";
import {Row,Col} from 'react-bootstrap';

const FragContainer = ({ data }) => {
    if (!data) return <div />;
    return (  
           <div>
                <Row>
                    <Col sm={12}>
                        <Row>
                            <div className='details-title' dangerouslySetInnerHTML={{__html:data.title}}></div>
                        </Row>
                        <Row>
                            <div className='details-tenure'  dangerouslySetInnerHTML={{__html:data.tenure}}></div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className='details-info'>
                        <Row>
                            <p dangerouslySetInnerHTML={{__html:data.details}}></p>
                        </Row>
                        <Row>
                            <p dangerouslySetInnerHTML={{__html:data.others}}></p>
                        </Row>
                    </Col>
                </Row>
           </div>
    
    );
  };

  export default FragContainer