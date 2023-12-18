import Hero from './components/Hero/Hero'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import { useState } from 'react';

const App = () => {

  /* W komponencie App dodaj dwie informacje do stanu.
  Jedna będzie tyczyć się aktualnej wartości odliczanego czasu
  (ustal jako wartość startową zero),
  a druga przyda nam się do przypisania intervalu (wartość startowa null). */
  const [time, setTime] = useState(0);
  const [stopwatch, setStopwatch] = useState(null);

  

  return (
    <Container>
      <Hero />
      <Button>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
    </Container>
  );
};

export default App;
