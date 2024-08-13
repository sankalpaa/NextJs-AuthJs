import { signIn } from "@/configuration/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button className="btn btn-blue" type="submit">Signin</button>
    </form>
  )
} 