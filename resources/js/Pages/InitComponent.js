import React from 'react';

const InitComponent = ({name}) => {
    return (
        <div>
            <h1>Hello from component INIT</h1>
            <p>Meu parametro é {name}</p>
        </div>
    );
}

export default InitComponent;
