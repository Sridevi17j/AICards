import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Hero() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleGenerateYourCard = () => {
    if (session) {
      router.push('/maindashboard')
    } else {
      signIn('google')
    }
  }

  return (
    <section className="text-center py-8 flex flex-col justify-center min-h-[40vh]">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Where <span className="text-blue-600">AI</span> brings greetings to life
        </h1>
        <p className="text-xl">AICards creates personalized greeting cards for all your special occasions!</p>
        <div>
          <button 
            onClick={handleGenerateYourCard}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Generate your card
          </button>
        </div>
      </div>
    </section>
  )
}