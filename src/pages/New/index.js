import React, { useState } from 'react';
import camera from '../../assets/camera.svg'
import './style.css'
import api from '../../services/api'

export default function New(history) {
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState([])
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const { user_id } = localStorage.getItem('user')

  async function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData();
    data.append('thumbnail', thumbnail)
    data.append('techs', techs)
    data.append('price', price)
    data.append('company', company)

    await api.post('/spot', data, {
      headers: { user_id }
    })

    history.push('/dashboard')

  }

  return (
    <form onSubmit={handleSubmit}>

      <label id="thumbnail">
        <input type="file" />
        <img src={camera} alt="Select img" onChange={event => setThumbnail(event.target.files[0])} />
      </label>

      <label htmlFor="company">Empresa</label>
      <input
        id='company'
        placeholder='Sua empresa'
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
      <label htmlFor="techs">Tecnologias</label>
      <input
        id='techs'
        placeholder='As tecnolgias da sua empresa'
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />
      <label htmlFor="price">Valor da Diaria</label>
      <input
        id='price'
        placeholder='Valor da diaria'
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
    </form>
  )
}