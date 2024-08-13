import { auth } from "@/configuration/auth"
export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return null

    return (
        <div>
            {
                session.user.image && (
                    <img src={session.user.image} className="avator-image" alt="User Avatar" />
                )
            }
            <h5><a href="/pages/profile">{session.user.name}</a></h5>
        </div>
    )
}