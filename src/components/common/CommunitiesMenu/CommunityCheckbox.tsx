import { Checkbox, Flex, Icon, Text } from '@chakra-ui/react'
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'

export type CommunityType = 'public' | 'restricted' | 'private'

type CommunityCheckboxProps = {
  name: CommunityType
  communityType: CommunityType
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const communityTypeOptions = {
  public: 'Público',
  restricted: 'Restrito',
  private: 'Privado'
}

const communityTypeDescriptions = {
  public: 'Qualquer pessoa pode ver e participar.',
  restricted: 'Qualquer pessoa pode ver, mas apenas membros podem participar.',
  private: 'Somente membros podem ver e participar.'
}

const ICONS = {
  public: BsFillEyeFill,
  restricted: BsFillPersonFill,
  private: HiLockClosed
}

const CommunityCheckbox = ({
  name,
  communityType,
  onChange
}: CommunityCheckboxProps) => {
  const community = communityTypeOptions[name]
  const commuityTypeDescription = communityTypeDescriptions[name]

  return (
    <Checkbox
      name={community}
      isChecked={communityType === community}
      onChange={onChange}
      colorScheme="pink"
    >
      <Flex alignItems="center">
        <Icon as={ICONS[name]} color="gray.500" marginRight={2} />

        <Text fontSize="10pt" marginRight={1} fontWeight={600}>
          {community}
        </Text>

        <Text fontSize="8pt" color="gray.400" paddingTop={1}>
          {commuityTypeDescription}
        </Text>
      </Flex>
    </Checkbox>
  )
}

export default CommunityCheckbox