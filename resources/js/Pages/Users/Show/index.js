import React from 'react';

const Show = ({user}) => {
    return (
        <div>
            <h1>Usuário</h1>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
        </div>
    );
}

export default Show;
