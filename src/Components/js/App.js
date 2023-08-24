import '../css/App.css';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Chennai from './Chennai';
import Rameshwaram from './Rameshwaram';
import Kodaikanal from './Kodaikanal';
import Ooty from './Ooty';
import  Kanyakumari  from './Kanyakumari';
import  Kumbakonam  from './Kumbakonam';
import  Madurai  from './Madurai';
import  Yercaud  from './Yercaud';
import  Theni  from './Theni';
import  Hogenakkal  from './Hogenakkal';



function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Carousel/>
        <Chennai/>
        <Rameshwaram/>
        <Kodaikanal/>
        <Ooty/>
        <Kanyakumari/>
        <Kumbakonam/>
        <Madurai/>
        <Yercaud />
        <Theni/>
        <Hogenakkal/>
    </div>
  );
}

export default App;
