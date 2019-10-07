import React, { useState } from 'react';
import api from '../../services/api'

export default function Login() {

  const [email, setEmail] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await api.post('/user', { email })
    const { _id } = response.data
    localStorage.setItem('user', _id)
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa
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