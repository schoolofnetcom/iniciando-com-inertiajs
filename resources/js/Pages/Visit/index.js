import React from 'react';
import { Inertia } from '@inertiajs/inertia'

const Visit = () => {

    function deletarLink(e) {
        e.preventDefault();

        // EVENTOS
        // onBefore
        // onStart
        // onProgress
        // onSuccess
        // onCancel
        // onFinish

        Inertia.delete(route('links.destroy', {id: 1}), {
            onBefore: (visit) => confirm('Deseja realmente excluir este link?'),
            onFinish: () => { console.log('finalizou o evento') }
        });
    }

    return (
        <>
            <h1>Trabalhando com Inertia Visit</h1>

            {/* Criar visits examples */}

            {
                // Inertia.visit(route('links.index'), {
                //     method: 'get'
                // })

                // Inertia.get(route('links.index'), {}, {})

                <a href="#" onClick={() => deletarLink(event)}>DELETE</a>
            }

        </>
    );
}

export default Visit;
