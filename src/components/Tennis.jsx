import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Tennis = () => {
    return (
        <Card className='mb-3' style={{ color: '#000' }}>
            <Card.Img
                src='https://media.istockphoto.com/id/182931185/fr/photo/vide-hard-court-de-tennis.jpg?s=612x612&w=0&k=20&c=jWX3N6sCJuN9UxuBrpB74hnVaRB_N7ueB2p78buZbu0='
                height={'300px'}
            />
            <Card.Body>
                <Card.Title>Card Example</Card.Title>
                <Card.Text>This is an example of BS Cards</Card.Text>
                <Button variant='primary'>read more</Button>
            </Card.Body>
        </Card>
    );
};

export default Tennis;
