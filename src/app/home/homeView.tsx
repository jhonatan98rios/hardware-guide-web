import { useHomeViewModel } from './homeViewModel';

export default function HomeView() {
  const { sample, active, handleSampleChange, handleSubmit } = useHomeViewModel();

  return (
    <main className="flex items-center justify-center bg-[#0a0a1a] w-full h-screen">
      <section className="flex flex-col max-w-[480px] w-11/12 justify-center items-center rounded-3xl p-8">

        <h1 className="text-center w-full mx-0 my-4 text-[#4CC392] text-lg font-bold">
          Me fale sobre o computador que você precisa
        </h1>

        <textarea
          value={sample}
          onChange={handleSampleChange}
          className="h-60 w-full border border-[#4CC392] border-solid rounded-3xl bg-[#111] text-white p-4"
          placeholder="Procuro um PC para..."
          name="sample"
          id="sample"
        />

        {active && (
          <button
            onClick={handleSubmit}
            className="w-full p-2 mt-4 bg-[#8257E6] border-none text-base font-medium rounded-lg flex justify-center items-center text-white"
          >
            Confirmar
          </button>
        )}

        <div className="text-white text-xs mt-8 text-center">
          * O algoritmo está em fase de treino e pode apresentar inconsistências. As frases serão armazenadas e posteriormente utilizadas no treino do algoritmo.
        </div>
      </section>
    </main>
  );
}