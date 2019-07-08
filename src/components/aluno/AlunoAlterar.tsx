import { Container, Row, Col } from "reactstrap";
import AlunoForm from "./form/AlunoForm";
import React from "react";

const AlunoAlterar = props => (
    <Container>
        <Row>
            <Col>
                <AlunoForm/>
            </Col>
        </Row>
    </Container>
)

export default AlunoAlterar;