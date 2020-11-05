import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const InitComponent = ({name, url_route}) => {
    return (
        <div>
            <h1>Hello from component INIT</h1>
            <p>Meu parametro é {name}</p>
            <InertiaLink href={route('my-first-route')}>Ir para componente ROUTE</InertiaLink>
            {/* <p>rota para component ROUTE {url_route}</p> */}
        </div>
    );
}

export default InitComponent;
