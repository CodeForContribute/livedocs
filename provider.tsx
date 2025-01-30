'use client'

import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react";
import Loader from "@/components/Loader";
import {ReactNode} from "react";


const Provider = ({children}: { children: ReactNode }) => {
    return (
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
            <ClientSideSuspense fallback={<div><Loader/></div>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}
export default Provider;