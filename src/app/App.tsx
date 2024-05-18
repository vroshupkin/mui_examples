import Container from '@mui/material/Container/Container';
import { MainLayout } from '../MainLayout';

function App() {
  const div = document.querySelector('#what?');
  console.log(div);
  
  return (
    <Container fixed maxWidth="lg">
        <div id='what?' style={{ height: '100px', width: '100px' }}>hello world</div>
      <MainLayout />
    </Container>
  );
}

export default App;
