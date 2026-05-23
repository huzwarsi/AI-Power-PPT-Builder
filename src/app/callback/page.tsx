import { onAuthenticateUser } from '@/actions/user'
import { redirect } from 'next/navigation'

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser()

  // Next.js standard rules ke mutabik redirect se pehle 'return' lagana zaroori hai
  if (auth.status === 200 || auth.status === 201) {
    return redirect('/dashboard')
  }

  if (auth.status === 400 || auth.status === 403 || auth.status === 500) {
    return redirect('/sign-in')
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      Authenticating... Please wait.
    </div>
  )
}

export default AuthCallbackPage
