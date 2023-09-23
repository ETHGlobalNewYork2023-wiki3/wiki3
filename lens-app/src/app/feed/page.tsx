'use client'
import { useAccessToken, useActiveProfile, useExplorePublications, useFeed } from "@lens-protocol/react-web";
import { fetchFeeData } from "wagmi/actions";
import { ProfileId } from "@lens-protocol/react-web";
import LoginButton from "../authentication";


export default function Feed() {
    const { data: activeProfile, loading: isLoginLoading } = useActiveProfile();

        let profileId = activeProfile?.id || '0x02' as ProfileId;
        console.log("profileId", profileId)
        const { data: feedItems, loading: isFeedLoading, hasMore, next } = useExplorePublications()
        console.log(feedItems)
    return (
        <>
            <LoginButton />
            {feedItems?.map((feedItem, index) => {
                let content;
                if (feedItem.__typename === "Post") {
                    content = feedItem.metadata.content
                } else {
                    // Ignore Mirrors and comments
                    return null
                }

                return (
                <div key={index}>
                    <p>Author {feedItem.profile.name} </p>
                    <p>Date {feedItem.createdAt}</p>
                    <p>{content}</p>
                </div>
                )
            })
            }

        </>

    )

}