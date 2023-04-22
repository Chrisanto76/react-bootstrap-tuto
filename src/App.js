import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//install bootstrap components from react-bootstrap
import {
    Container,
    Row,
    Col,
    Button,
    Alert,
    Breadcrumb,
    Card,
    Form,
} from 'react-bootstrap';

// create container and grid with row/col to make bootstrap grid
function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item>Test</Breadcrumb.Item>
                        <Breadcrumb.Item>Test2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
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
                                <Form.Group controlId='formPassword'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='password'
                                    />
                                    <Button
                                        className='mt-3 mb-3'
                                        variant='secondary'
                                    >
                                        Login
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <Card className='mb-3' style={{ color: '#000' }}>
                        <Card.Img src='https://media.istockphoto.com/id/182931185/fr/photo/vide-hard-court-de-tennis.jpg?s=612x612&w=0&k=20&c=jWX3N6sCJuN9UxuBrpB74hnVaRB_N7ueB2p78buZbu0=' />
                        <Card.Body>
                            <Card.Title>Card Example</Card.Title>
                            <Card.Text>
                                This is an example of BS Cards
                            </Card.Text>
                            <Button variant='primary'>read more</Button>
                        </Card.Body>
                    </Card>

                    <Alert variant='secondary'>This is a Button</Alert>
                    <Button>Test Button</Button>
                </Container>
            </header>
        </div>
    );
}

export default App;
