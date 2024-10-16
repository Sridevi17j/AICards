import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Header({ scrollToCards, scrollToPrompts, scrollToPlansandPricing }) {
  const { data: session } = useSession()
  const router = useRouter()

  const handleAuth = async () => {
    if (session) {
      await signOut({ redirect: false })
      router.push('/')
    } else {
      await signIn('google'); 
    }
  };

  const handleNavigation = (action) => {
    if (router.pathname === '/') {
      action();
    } else {
      router.push('/').then(() => {
        setTimeout(action, 100);  // Delay to ensure the page has loaded
      });
    }
  }

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-red-600 mr-8"><span className="text-blue-600">AI</span>Cards</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => handleNavigation(scrollToCards)} 
                className="hover:text-blue-600"
              >
                Sample Cards
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation(scrollToPrompts)} 
                className="hover:text-blue-600"
              >
                Sample Prompts
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation(scrollToPlansandPricing)} 
                className="hover:text-blue-600"
              >
                Plans and pricing
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="space-x-4">
        <button 
          onClick={handleAuth}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {session ? 'Log out' : 'Log in'}
        </button>
      </div>
    </header>
  )
}