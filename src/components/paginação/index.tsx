import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { StyleLayout } from './style'

export function Paginacao() {
  return (
    <StyleLayout>
      <span>
        <button>
          <CaretLeft size={32} />
        </button>
        <button>
          <CaretRight size={32} />
        </button>
      </span>
    </StyleLayout>
  )
}
