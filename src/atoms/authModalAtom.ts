import { atom } from 'recoil'

export type AuthModalStateType = {
  isOpen: boolean
  view: 'login' | 'register' | 'resetPassword'
}

const defaultModalState: AuthModalStateType = {
  isOpen: false,
  view: 'login'
}

export const authModalAtom = atom<AuthModalStateType>({
  key: 'authModal',
  default: defaultModalState
})
