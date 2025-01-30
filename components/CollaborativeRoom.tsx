'use client'
import React from 'react';
import {ClientSideSuspense, RoomProvider} from "@liveblocks/react";
import Header from "@/components/Header";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {Editor} from "@/components/editor/Editor";

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className="colloaborative-room"></div>
                <Header>
                    <div className="flex w-fit items-center justify-center gap-2">
                        <p className="document-title">Share</p>
                    </div>
                    <SignedOut><SignInButton/></SignedOut>
                    <SignedIn><UserButton/></SignedIn>
                </Header>
                <Editor></Editor>
            </ClientSideSuspense>
        </RoomProvider>
    )
};

export default CollaborativeRoom;