import React from 'react';
import { Container } from 'react-bootstrap';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <Container className="py-5">
            <h1>Ooops, route not Found</h1>
        </Container>
    )
}

export default {
    component : NotFoundPage
}