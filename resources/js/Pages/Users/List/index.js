import React from 'react';

const List = ({users}) => {
    return (
        <div>
            <h1>Lista de usuários</h1>
            <ul>
            {
                users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    )
                )
            }
            </ul>
        </div>
    );
}

export default List;
