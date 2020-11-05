import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Route = () => {
    return (
        <div>
            <h1>Hello from component ROUTE</h1>
            <InertiaLink href={route('home')}>Voltar para HOME</InertiaLink>
        </div>
    );
}

export default Route;
