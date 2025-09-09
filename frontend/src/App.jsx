import React, { useEffect, useState } from 'react'

const API = '/api/usuarios'

export default function App() {
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({ nome: '', salario: '', idade: '' })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function load() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(API)
      const data = await res.json()
      setUsuarios(data)
    } catch (e) {
      setError('Falha ao carregar usuários')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function save(e) {
    e.preventDefault()
    setError('')
    try {
      const payload = {
        nome: form.nome,
        salario: Number(form.salario),
        idade: Number(form.idade)
      }
      if (editingId) {
        await fetch(`${API}/${editingId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      } else {
        await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      }
      setForm({ nome: '', salario: '', idade: '' })
      setEditingId(null)
      load()
    } catch (e) {
      setError('Falha ao salvar')
    }
  }

  async function edit(u) {
    setEditingId(u.id)
    setForm({ nome: u.nome, salario: u.salario, idade: u.idade })
  }

  async function remove(id) {
    if (!confirm('Excluir este usuário?')) return
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CRUD de Usuários</h1>

      <form onSubmit={save} style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr 1fr auto' }}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={onChange} required />
        <input name="salario" placeholder="Salário" type="number" step="0.01" value={form.salario} onChange={onChange} required />
        <input name="idade" placeholder="Idade" type="number" value={form.idade} onChange={onChange} required />
        <button type="submit">{editingId ? 'Atualizar' : 'Adicionar'}</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Carregando...</p>}

      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', marginTop: 16 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Salário</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nome}</td>
              <td>{Number(u.salario).toFixed(2)}</td>
              <td>{u.idade}</td>
              <td>
                <button onClick={() => edit(u)}>Editar</button>
                <button onClick={() => remove(u.id)} style={{ marginLeft: 8 }}>Excluir</button>
              </td>
            </tr>
          ))}
          {usuarios.length === 0 && !loading && (
            <tr><td colSpan="5" align="center">Nenhum registro</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
