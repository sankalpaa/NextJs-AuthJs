import { auth, signOut } from "@/configuration/auth";

const profile = async () => {
    const session = await auth()

    if (!session?.user) return null

    return (
        <div>
            <h2>User Profile</h2>
            {
                session.user.image && (
                    <img src={session.user.image} alt="User Avatar" />
                )
            }
            <h4>Name: {session.user.name}</h4>
            <h4>Email: {session.user.email}</h4>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button className="btn btn-blue" type="submit">Sign Out</button>
            </form>
        </div>
    )
}

export default profile;