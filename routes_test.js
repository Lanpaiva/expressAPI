// pages/index.js
import { useEffect, useState } from 'react'

export default function Home() {
    const [dados, setDados] = useState(null)

    useEffect(() => {
        async function fetchDados() {
            const response = await fetch('/api/dados')
            const dados = await response.json()
            setDados(dados)
        }

        fetchDados()
    }, [])

    if (!dados) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>{dados.titulo}</h1>
            <p>{dados.descricao}</p>
        </div>
    )
}

// pages/__tests__/index.test.js
import { render, screen } from '@testing-library/react'
import Home from '../index'

test('renderiza a página com os dados da API', async () => {
    // Simula a resposta da API
    const dados = { titulo: 'Meu Título', descricao: 'Minha Descrição' }
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(dados)
        })
    )

    render(<Home />)

    // Verifica se a mensagem de "Carregando..." não é exibida
    const mensagemDeCarregando = screen.queryByText('Carregando...')
    expect(mensagemDeCarregando).toBeNull()

    // Verifica se o título e a descrição são renderizados com os dados da API
    const titulo = screen.getByText('Meu Título')
    const descricao = screen.getByText('Minha Descrição')
    expect(titulo).toBeInTheDocument()
    expect(descricao).toBeInTheDocument()
})
