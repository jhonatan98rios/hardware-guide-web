"use client"
 
import { Carousel } from '@/components/carousel'
import { smartEndpoint } from '@/constants/endpoints'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'


export default function Result() {
  return (
    <Suspense fallback={
      <p className="text-center text-sm text-white leading-6"> Carregando </p>
    }>
      <Recommendations />
    </Suspense>
  )
}


function Recommendations() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const [content, setContent] = useState(null)
  const [error, setError] = useState<any>(null)

  async function handleRequest(sample: string) {
    return await axios.post(smartEndpoint, { text: sample })
  }

  useEffect(() => {

    const sample = searchParams.get('sample')

    if (!sample) {
      router.push("/")
      return
    }

    handleRequest(sample)
      .then(response => setContent(response.data))
      .catch(reject => setError(reject))
  }, [])

  return (
    <main className="flex items-center justify-center bg-[#0a0a1a] w-full h-screen">
      <section className="max-w-[560px] w-11/12 h-96 justify-center items-center p-8">
        <h1 className="text-center w-full mx-0 mb-8 text-[#4CC392] text-lg font-bold"> Veja as sugestões que separamos para você </h1>

        <div>
          <p className="text-center text-sm text-white leading-6">
            { content && <Carousel cards={content} /> }
          </p>

          <p className="text-center text-sm text-white leading-6">
            { error && JSON.stringify(error.message) }
          </p>
        </div>

        <div className='text-white text-xs text-center'>
          *Os preços podem varias de acordo com o mercado. Os preços ilustrados são somente para comparação.
        </div>

      </section>
    </main>
  );
}