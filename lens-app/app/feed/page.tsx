'use client'
import React from "react";
import { useAccessToken, useActiveProfile, useExplorePublications, useFeed } from "@lens-protocol/react-web";
import { fetchFeeData } from "wagmi/actions";
import { ProfileId } from "@lens-protocol/react-web";
import LoginButton from "../authentication";
import { Button } from "../components/ui/button";
import Post from "./Post";

export default function Feed() {
    const { data: activeProfile, loading: isLoginLoading } = useActiveProfile();

        let profileId = activeProfile?.id || '0x02' as ProfileId;
        const { data: feedItems, loading: isFeedLoading, hasMore, next } = useExplorePublications()
    return (
        <>
            <LoginButton />
            {feedItems?.map((feedItem, index) => (
                feedItem.__typename == "Post" && 
                    <Post key={index} post={feedItem} />
            ))}
            <Button onClick={next}> Next Posts</Button>

        </>

    )

}