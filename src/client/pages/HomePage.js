var React = require('react');
// import { Container } from 'react-bootstrap';

const HomePage = () => {
    return (    
        <React.Fragment>
            <div className="container py-5">
                <h1 className="mb-0">Welcome to React</h1>
                <h3>Server Side Rendering Boilerplate</h3>
                <button className="btn btn-dark rounded" onClick={() => alert('halo!!!')}>Halo</button>
            </div>
        </React.Fragment>    
    )
}
 
export default {
    component : HomePage
}