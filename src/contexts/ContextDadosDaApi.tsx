import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/Axios'

// type 01
interface DadosDaApiProviderType {
  children: ReactNode
}
// type 02 --> é para ser usada no useState e define o que vou extrair do repositorio do github
interface Owner {
  login: string
}

interface Repositorio {
  name: string
  created_at: string
  id: number
  description: string | null
  full_name: string
  owner: Owner
}
// type 3 --> para ser usando no useState para o retorno dos dados do usuario.
interface NomeUser {
  blog: string
  login: string
  avatar_url: string
  bio: string
  followers: number
  html_url: string
  company: string | null
  public_repos: number
}
// type 04 --> é para dizer ao contexto o que vai ser enviado ou compartilhado
interface createContextType {
  // Retorna um lista de objetos
  repositorio: Repositorio[]
  // Retorna um objeto ou null
  dadosUser: NomeUser | null

  currentItems: Repositorio[]
  previous: () => void
  next: () => void
  BuscaRepositorio: (dados: string) => void
}

// contexto
export const ContextDadosDaApi = createContext({} as createContextType)
// função provider
export function DadosDaApiProvider({ children }: DadosDaApiProviderType) {
  const [repositorio, setRepositorio] = useState<Repositorio[]>([])
  const [dadosUser, setDadosUser] = useState<NomeUser | null>(null)
  const [buscaRepositorio, setBuscaRepositorio] = useState<string | null>(null)

  const nomeUsuario = 'devjonasfranco'
  // devjonasfranco
  async function getDadosApi() {
    // get dados do repositorio
    try {
      const repositorioResponse = await api.get<Repositorio[]>(
        `${nomeUsuario}/repos`,
      )
      setRepositorio(repositorioResponse.data)
    } catch (error) {
      console.error('erro ao buscar dados na api', error)
      console.log('Erro ao buscar dados do repositorio da api do github')
    }
    // get dados do usuario
    try {
      const responseUser = await api.get<NomeUser>(`${nomeUsuario}`)
      setDadosUser(responseUser.data)
    } catch (error) {
      console.error('erro ao buscar dados na api', error)
      console.log('Erro ao buscar dados do usuario na API')
    }
  }

  const [correntPage, setCorrentPage] = useState(1)

  const itemsPage = 8
  const indexOfLastItem = correntPage * itemsPage
  const indexOfFirstItem = indexOfLastItem - itemsPage
  // const currentItems = repositorio.slice(indexOfFirstItem, indexOfLastItem)

  // programa para buscar ou filtrar dados
  const filteredRepos = buscaRepositorio
    ? repositorio.filter((repos) =>
        repos.name.toLowerCase().includes(buscaRepositorio.toLowerCase()),
      )
    : repositorio

  const currentItems = filteredRepos.slice(indexOfFirstItem, indexOfLastItem)

  function next() {
    if (indexOfLastItem < filteredRepos.length) {
      setCorrentPage((prevPage) => prevPage + 1)
    }
  }
  function previous() {
    if (correntPage > 1) {
      setCorrentPage((prevPage) => Math.max(prevPage - 1, 1))
    }
  }

  // função de busca
  function BuscaRepositorio(dados: string) {
    setBuscaRepositorio(dados)
    setCorrentPage(1)
  }

  // Useffect
  useEffect(() => {
    getDadosApi()
  }, [])
  return (
    <ContextDadosDaApi.Provider
      value={{
        repositorio,
        dadosUser,
        currentItems,
        previous,
        next,
        BuscaRepositorio,
      }}
    >
      {children}
    </ContextDadosDaApi.Provider>
  )
}
