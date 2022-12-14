import { atom } from 'recoil'

import { ViewEnum } from '@shared/enums/View.enum'

export type AuthModalStateType = {
  isOpen: boolean
  view: ViewEnum.LOGIN | ViewEnum.REGISTER | ViewEnum.RESET_PASSWORD
}

const defaultModalState: AuthModalStateType = {
  isOpen: false,
  view: ViewEnum.LOGIN
}

export const authModalAtom = atom<AuthModalStateType>({
  key: 'authModal',
  default: defaultModalState
})
