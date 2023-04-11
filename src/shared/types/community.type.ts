import { FieldValue } from 'firebase/firestore'

export enum COMMUNITY_PRIVACY_TYPE {
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
  PRIVATE = 'private'
}

export type CommunityType = {
  name: string
  creatorId: string | undefined
  createdAt: FieldValue
  membersCount: number
  privacyType: COMMUNITY_PRIVACY_TYPE
}
