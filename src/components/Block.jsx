import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Ariana from './Breadcrumb';
import Title from './Title';
import Tennis from './Tennis';

const Block = () => {
    return (
        <>
            <header className='App-header'>
                <Container>
                    <Title />
                    <Ariana />
                    <Form>
                        {/*create container and grid with row/col to make bootstrap grid*/}
                        <Row>
                            <Col md>
                                <Form.Group controlId='formEmail'>
                                    <Form.Label>Email Adress</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Example@email.com'
                                    />
                                    <Form.Text className='text-muted'>
                                        We'll never share infos
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Label htmlFor='inputPassword5'>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type='password'
                                    id='inputPassword5'
                                    aria-describedby='passwordHelpBlock'
                                />
                                <Form.Text id='passwordHelpBlock' muted>
                                    Your password must be 8-20 characters.
                                </Form.Text>
                            </Col>
                        </Row>
                        <Tennis />
                    </Form>
                </Container>
            </header>
        </>
    );
};

export default Block;
