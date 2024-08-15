"use client"

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {

  const router = useRouter()
  const [ sample, setSample ] = useState<string>('')
  const [ active, setActive ] = useState(false)

  function next(){
    setSample('')
    setActive(false)
    router.push("/result?sample=" + sample)
  }

  function eventHandler(e: ChangeEvent<HTMLTextAreaElement>){

    setSample(e.target.value)

    if(sample.replace(/[0-9]| /g, '').length >= 3){
      setActive(true)
      if(e.target.value == "Enter") next();
      
    } else {
      setActive(false)
    }
  }

  return (
    <main className="flex items-center justify-center bg-[#0a0a1a] w-full h-screen">
      <section className="flex flex-col max-w-[480px] w-11/12 justify-center items-center rounded-3xl p-8">

        <h1 className="text-center w-full mx-0 my-4 text-[#4CC392] text-lg font-bold"> Me fale sobre o computador que você precisa </h1>

        <textarea
          value={sample}
          onChange={eventHandler}
          className="h-60 w-full border border-[#4CC392] border-solid rounded-3xl bg-[#0a0a1a] text-white p-4"
          name="input"
          id="input"
        />

        {
          active && (
            <button 
              onClick={next}
              className="w-full p-2 mt-4 bg-[#8257E6] border-none text-base 
              font-medium rounded-lg flex justify-center items-center text-white"
            >
              Confirmar
            </button>
          )
        }

        <div className="text-white text-xs mt-16 text-center">
          * O algoritmo esta em fase de treino e pode apresentar inconsistências. as frases serão armazenas e posteriormente utilizadas no treino do algoritmo.
        </div>
      </section>
    </main>
  );
}
