import Hero from './components/Hero/Hero'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import { useEffect, useState } from 'react';
import Timer from './components/Timer/Timer';

const App = () => {

  /* W komponencie App dodaj dwie informacje do stanu.
  Jedna będzie tyczyć się aktualnej wartości odliczanego czasu
  (ustal jako wartość startową zero),
  a druga przyda nam się do przypisania intervalu (wartość startowa null). */
  const [time, setTime] = useState(0);
  const [stopwatch, setStopwatch] = useState(null);

  const runStopwatch = () => {
    setStopwatch(setInterval(() => {
      setTime(prevValue => prevValue + 10);
    }, 10))
  };
  const holdStopwatch = () => {
    clearInterval(stopwatch);
    setStopwatch(null);
  };
  const clearStopwatch = () => {
    holdStopwatch();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if(stopwatch) clearInterval(stopwatch);
    };
  }, []);

  return (
    <Container>
      <Hero />
      <Timer time={time} />
      <Button isDisabled={!!stopwatch} onClick={runStopwatch}>START</Button>
      <Button onClick={holdStopwatch}>STOP</Button>
      <Button onClick={clearStopwatch}>RESET</Button>
    </Container>
  );
};

export default App;
