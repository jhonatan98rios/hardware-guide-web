"use client"
 
import { Carousel } from '@/components/carousel'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Result() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const [content, setContent] = useState(null)
  const [error, setError] = useState<any>(null)

  async function handleRequest(sample: string) {

    //const resultUrl = "https://tz4t8f081h.execute-api.us-east-1.amazonaws.com/dev/smart"
    const resultUrl = "http://localhost:5000/dev/smart"
    return await axios.post(resultUrl, { text: sample })
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
      <section className="max-w-[480px] w-11/12 h-96 justify-center items-center border border-[#4CC392] border-solid rounded-3xl p-8">

        <h1 className="text-center w-full mx-0 my-4 text-[#4CC392] text-lg font-bold"> Encontre o computador ideal para você! </h1>

        <p className="text-center text-sm text-white leading-6">
          { (!content && !error) && "Carregando" }
        </p>

        <p className="text-center text-sm text-white leading-6">
          { content && <Carousel cards={content} /> }
        </p>

        <p className="text-center text-sm text-white leading-6">
          { error && JSON.stringify(error.message) }
        </p>
      </section>
    </main>
  );
}
