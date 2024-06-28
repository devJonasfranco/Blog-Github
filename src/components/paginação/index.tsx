import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { StyleLayout } from './style'
import { useContext } from 'react'
import { ContextDadosDaApi } from '../../contexts/ContextDadosDaApi'

export function Paginacao() {
  const contex = useContext(ContextDadosDaApi)
  const { previous, next } = contex
  return (
    <StyleLayout>
      <span>
        <button onClick={() => previous()}>
          <CaretLeft size={32} />
          <p>Privious</p>
        </button>
        <button onClick={() => next()}>
          <p>Next</p>
          <CaretRight size={32} />
        </button>
      </span>
    </StyleLayout>
  )
}
