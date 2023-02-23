import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">
        <Banner bannerText={'Cisco Intern app'}/>
        <Exhibit name="ex 1">
          <p>Card-text</p>
          <FetchData adressType='ipv6'/>
        </Exhibit>
        <Exhibit name="ex 2">
          <p>Card-text 2</p>
          <FetchData adressType='ipv4'/>
        </Exhibit>
        {/* <Exhibit name="ex 3">
          <p>Card-text 3</p>
        </Exhibit>
        <Exhibit name="ex 4">
          <p>Card-text 4</p>
        </Exhibit> */}
    </div>
  );
}

export default App;
