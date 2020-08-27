var React = require('react');
import { Container } from 'react-bootstrap';

const HomePage = () => {
    return (    
        <React.Fragment>
            <Container className="py-5">
                <h1 className="mb-0">Welcome to React</h1>
                <h3>Server Side Rendering Boilerplate</h3>
                <button className="btn btn-dark rounded" onClick={() => alert('halo!!!')}>Halo</button>
            </Container>
        </React.Fragment>    
    )
}
 
export default {
    component : HomePage
}