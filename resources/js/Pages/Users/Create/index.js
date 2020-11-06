import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'

export default function Create({errors}) {
  const [data, setData] = useState({
    name: "",
    email: "",
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
    e.preventDefault()
    Inertia.post(route('users.store'), data, {preserveState: false})
  }

  return (
      <>
        { errors.name && <p style={{color:"red"}}>Nome é obrigatório</p> }
        { errors.email && <p style={{color:"red"}}>Email é obrigatório</p> }
        { errors.password && <p style={{color:"red"}}>Senha é obrigatório</p> }
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label><br/>
        <input id="name" onChange={handleChange} /><br/>
        <label htmlFor="email">Email:</label><br/>
        <input id="email" onChange={handleChange} /><br/>
        <label htmlFor="password">Senha:</label><br/>
        <input id="password" onChange={handleChange} /><br/><br/>
        <button type="submit">Submit</button>
        </form>
    </>
  )
}
