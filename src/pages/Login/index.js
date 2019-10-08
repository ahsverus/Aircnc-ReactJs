import React, { useState } from 'react';
import api from '../../services/api'

export default function Login({ history }) {

  const [email, setEmail] = useState('')

  async function handleSubmit(event) {
    event.preventDefault() // evitar o funcionamento default
    const response = await api.post('/user', { email })
    console.log(response)
    const { _id } = response.data
    localStorage.setItem('user', _id)
    history.push('/dashboard')
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Seu melhor email"
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}