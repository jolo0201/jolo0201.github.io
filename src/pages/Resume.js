import React from "react"
import { Outlet } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import ProExpContainer from "../components/ProExpContainer"
import SkillContainer from "../components/SkillContainer"
import './Custom.css'

function Resume() {
    return (
        <div className="center-scrollable">
        <br/>
        <Container fluid="sm">
          <Row>
              <Col sm={12}>
                  <Row>
                    <p className="home-header-sub">
                      PROFESSIONAL EXPERIENCE
                    </p>
                  </Row>
              </Col>
              <ProExpContainer/>
          </Row>
          <Row>
              <Col sm={12}>
                  <Row>
                    <p className="home-header-sub">
                      TECH STACK
                    </p>
                  </Row>
              </Col>
              <SkillContainer/>
          </Row>
      
        </Container>
        <Outlet/>
      </div>
    )
}

export default Resume