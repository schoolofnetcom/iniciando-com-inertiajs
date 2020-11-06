import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'

const Link = () => {
    return (
        <>
            <h1>Trabalhando com Links</h1>

            {/* Descobrir links - php artisan route:list (links.action) */}

            {/* Criar links */}
            <InertiaLink href={route('links.index')}>INDEX | </InertiaLink>
            <InertiaLink href={route('links.create')}>CREATE | </InertiaLink>
            <InertiaLink href={route('links.edit', {id: 1})}>EDIT | </InertiaLink>
            <InertiaLink href={route('links.show', {id: 1})}>SHOW | </InertiaLink>
            <InertiaLink href={route('links.update', {id: 1})} method="patch">UPDATE | </InertiaLink>
            <InertiaLink href={route('links.destroy', {id: 1})} method="delete">DELETE | </InertiaLink>
            <InertiaLink
                href={route('links.store')}
                method="post"
                data={ {name: "Thiago", email: "thiago@email.com"} }
                headers={ {SON: "ddfojdfhudfd121332fodfddf"} }
                as="button"
            >
                STORE |
            </InertiaLink>
        </>
    );
}

export default Link;
