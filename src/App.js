import Container from './components/Container';
import MainLayout from './components/MainLayout';
import Router from './router';

export default function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Container>
          <Router />
        </Container>
      </MainLayout>
    </div>
  );
}
