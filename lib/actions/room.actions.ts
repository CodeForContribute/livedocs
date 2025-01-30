'use server';

import {CreateDocumentParams} from "@/types";
import {nanoid} from "nanoid";
import {liveblocks} from "@/lib/liveblocks";
import {RoomAccesses} from "@liveblocks/node";
import {revalidatePath} from "next/cache";
import {parseStringify} from "@/lib/utils";

export const createDocument = async ({userId, email}: CreateDocumentParams) => {
    const roomId = nanoid();
    try {
        const metadata = {
            creatorId: userId,
            email: email,
            title: 'Untitled'
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: [],

        });

        revalidatePath('/');
        return parseStringify(room);

    } catch (error) {
        console.log(`Error occurred while creating room with id ${roomId}, err: ${error}`);
    }
}