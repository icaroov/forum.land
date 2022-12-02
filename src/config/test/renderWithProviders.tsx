import { render } from '@testing-library/react'
import { useEffect } from 'react'
import { RecoilRoot, RecoilState, useRecoilValue } from 'recoil'

import { AuthModalStateType } from '@src/atoms/authModalAtom'

type RecoilObserverProps = {
  node: RecoilState<AuthModalStateType>
  handler?: (value?: unknown) => void
}

const RecoilObserver = ({ node, handler }: RecoilObserverProps) => {
  const value = useRecoilValue(node)
  useEffect(() => handler && handler(value), [handler, value])
  return null
}

type Options = {
  node?: RecoilState<AuthModalStateType>
  handler?: (value?: unknown) => void
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { node, handler }: Options = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <RecoilRoot>
        {node && handler && <RecoilObserver node={node} handler={handler} />}
        {children}
      </RecoilRoot>
    )
  }

  return render(ui, { wrapper: Wrapper })
}
