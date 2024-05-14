import { ReactNode } from 'react'

export default function Error({ children }: { children: ReactNode }) {
  return (
    <p className='error'>{children}</p>
  )
}
