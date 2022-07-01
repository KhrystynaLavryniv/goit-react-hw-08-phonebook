import BackgroundImg from './img.png';
import { Title } from './HomePage.styled';
import Container from '@mui/material/Container';

const HomePage = () => (
  <>
    <Container maxWidth="xs">
      <div
        style={{
          backgroundImage: 'url(' + BackgroundImg + ')',
          backgroundSize: 'cover',
          height: '450px',
          width: '350px',
          margin: 'auto',
        }}
      ></div>
      <Title>My Phonebook</Title>
    </Container>
  </>
);

export default HomePage;
