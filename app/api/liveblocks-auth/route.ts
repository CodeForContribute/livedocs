import {liveblocks} from "@/lib/liveblocks";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getUserColor} from "@/lib/utils";


export async function POST(request:Request) {
    /**
     * Implement your own security here.
     *
     * It's your responsibility to ensure that the caller of this endpoint
     * is a valid user by validating the cookies or authentication headers
     * and that it has access to the requested room.
     */

    const clerkUser = await currentUser();
    if (!clerkUser) {
        redirect('/sign-in')
    }
    const {id, firstName, lastName, emailAddresses, imageUrl} = clerkUser;
    console.log("id:",id);

    const user = {
        id: id, info: {
            id,
            name: `${firstName} ${lastName}`,
            email: emailAddresses[0].emailAddress,
            avatar: imageUrl,
            color: getUserColor(id)
        }
    };
    console.log(user);

    const {status, body} = await liveblocks.identifyUser({
        userId: user.info.email, groupIds: []
    }, {
        userInfo: user.info
    })
    console.log("body >>>> " ,body);
    console.log("status>>>", status);
    return new Response(body, {status});
}