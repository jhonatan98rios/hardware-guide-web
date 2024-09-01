"use client"
 
import { Suspense } from 'react'
import { ResultView } from './resultView'


export default function Result() {
  return (
    <Suspense fallback={
      <p className="text-center text-sm text-white leading-6"> Carregando </p>
    }>
      <ResultView />
    </Suspense>
  )
}