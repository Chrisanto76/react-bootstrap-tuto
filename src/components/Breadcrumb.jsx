import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Ariana = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Test</Breadcrumb.Item>
                <Breadcrumb.Item>Test2</Breadcrumb.Item>
                <Breadcrumb.Item active>Test3</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export default Ariana;
