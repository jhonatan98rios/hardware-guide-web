import { Carousel } from "@/components/carousel";
import { useResultViewModel } from "./resultViewModel";

export function ResultView() {

    const { content, error } = useResultViewModel();
  
    return (
      <main className="flex items-center justify-center bg-[#0a0a1a] w-full h-screen">
        <section className="max-w-[560px] w-11/12 justify-center items-center p-8">
          <h1 className="text-center w-full mx-0 mb-8 text-[#4CC392] text-lg font-bold"> Veja as sugestões que separamos para você </h1>
  
          <div>
            <p className="text-center text-sm text-white leading-6">
              { content && <Carousel cards={content} /> }
            </p>
  
            <p className="text-center text-sm text-white leading-6">
              { error && JSON.stringify(error) }
            </p>
          </div>
  
          <div className='text-white text-xs text-center'>
            *Os preços podem varias de acordo com o mercado. Os preços ilustrados são somente para comparação.
          </div>
  
        </section>
      </main>
    );
  }