import React from 'react'
import { Container } from 'react-bootstrap';
import _Navbar from './NavBar';

class AppPage extends React.Component
{

    render(){
        return(
            <Container>
                <_Navbar />
                <h1 className="text-center">Hi Welcome</h1>
            </Container>
        )
    }

}

export default AppPage