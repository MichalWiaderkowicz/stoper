import Hero from './components/Hero/Hero'
import Container from './components/Container/Container';
import Button from './components/Button/Button';

const App = () => {


  
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
