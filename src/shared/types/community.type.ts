import { FieldValue } from 'firebase/firestore'

export enum COMMUNITY_PRIVACY_TYPE {
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
  PRIVATE = 'private'
}

export type CommunityType = {
  id?: string
  name: string
  creatorId: string | undefined
  membersCount: number
  privacyType: COMMUNITY_PRIVACY_TYPE
  createdAt?: FieldValue
  imageURL?: string
}

export type CommunitySnippetType = {
  communityId: string
  isModerator: boolean
}
