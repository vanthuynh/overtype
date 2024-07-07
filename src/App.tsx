import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const words = faker.random.words(10);

const App = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } = useEngine();

  return (
    <>
      <CountdownTimer timeleft={30} />
      <GeneratedWords words={words} />;

      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  )
}

const GeneratedWords = ({ words }: {words: string}) => {
  return <div className="text-4xl text-center text-slate-500"> {words} </div>
}

const CountdownTimer = ({ timeleft } : { timeleft: number }) => {
  return <h2 className=" text-primary-400 font<medium">Time: {timeleft}</h2>
}

export default App;
