import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import MenuItem from '../MenuItem'
import CommunityModal from './CommunityModal'

const ICONS = {
  ADD: FiPlus
}

const CommunitiesMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <CommunityModal isOpen={open} onClose={() => setOpen(false)} />

      <MenuItem
        icon={ICONS.ADD}
        iconColor="gray.200"
        onClick={() => setOpen(true)}
        text="Criar comunidade"
      />
    </>
  )
}

export default CommunitiesMenu
