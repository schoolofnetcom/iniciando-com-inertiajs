import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const List = ({users}) => {
    return (
        <div>
            <h1>Lista de usuários</h1>
            <InertiaLink href={route('users.create')}>Criar novo usuário</InertiaLink>
            <ul>
            {
                users.map((user) => (
                    <li key={user.id} style={{marginBottom: "20px"}}>
                        {user.name}
                        <span style={{marginLeft: "20px"}}>
                            <InertiaLink href={route('users.show', { user: user.id })} as="button">
                                Ver
                            </InertiaLink>
                            <InertiaLink href={route('users.edit', { user: user.id })} as="button">
                                Editar
                            </InertiaLink>
                            <InertiaLink
                                as="button"
                                href={route('users.destroy', { user: user.id })}
                                method="delete"
                            >
                                Excluir
                            </InertiaLink>
                        </span>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default List;
