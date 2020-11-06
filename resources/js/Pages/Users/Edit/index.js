import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'

export default function Create({user, errors}) {
    const [data, setData] = useState({
      name: user.name,
      email: user.email,
      password: "",
    })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setData(data => ({
        ...data,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    Inertia.put(route('users.update', { id : user.id }), data, {preserveState:false})
  }

    return (
        <>
            { errors.name && <p style={{color:"red"}}>Nome é obrigatório</p> }
            { errors.email && <p style={{color:"red"}}>Email é obrigatório</p> }
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label><br/>
            <input id="name" value={data.name} onChange={handleChange} /><br/>
            <label htmlFor="email">Email:</label><br/>
            <input id="email" value={data.email} onChange={handleChange} /><br/>
            <label htmlFor="password">Senha:</label><br/>
            <input id="password" value={data.password} onChange={handleChange} /><br/><br/>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}
