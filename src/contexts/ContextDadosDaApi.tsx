import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/Axios'

// type 01
interface DadosDaApiProviderType {
  children: ReactNode
}
// type 02 --> é para ser usada no useState e define o que vou extrair do repositorio do github

interface Repositorio {
  name: string
  created_at: string
  id: number
  description: string | null
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
}

// contexto
export const ContextDadosDaApi = createContext<createContextType | undefined>(
  undefined,
)

// função provider
export function DadosDaApiProvider({ children }: DadosDaApiProviderType) {
  const [repositorio, setRepositorio] = useState<Repositorio[]>([])
  const [dadosUser, setDadosUser] = useState<NomeUser | null>(null)
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

  // Useffect
  useEffect(() => {
    getDadosApi()
  }, [])
  return (
    <ContextDadosDaApi.Provider value={{ repositorio, dadosUser }}>
      {children}
    </ContextDadosDaApi.Provider>
  )
}
