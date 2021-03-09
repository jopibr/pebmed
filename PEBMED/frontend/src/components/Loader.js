import React from "react";
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation={'border'} role={'status'} size="sm">
            <span className={'sr-only'}>Carregando...</span>
        </Spinner>
    );
}

export default Loader;