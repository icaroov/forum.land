import { doc, getDoc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import safeJsonStringify from 'safe-json-stringify'

import Community from '@src/components/ui/Community/Community'
import { firestore } from '@src/lib/firebase/clientApp'
import { CommunityType } from '@src/shared/types/community.type'

type CommunityPageProps = {
  community: CommunityType
}

const CommunityPage = ({ community }: CommunityPageProps) => {
  return <Community community={community} />
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const communityId = String(context.params?.communityId ?? '')

  try {
    const communityDocRef = doc(firestore, 'communities', communityId)
    const communityDoc = await getDoc(communityDocRef)

    if (!communityDoc.exists()) {
      return {
        notFound: true
      }
    }

    const community = JSON.parse(
      safeJsonStringify({
        id: communityDoc.id,
        ...communityDoc.data()
      })
    )

    return {
      props: {
        community
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default CommunityPage
