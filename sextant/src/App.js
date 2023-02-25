import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import FetchData from './components/FetchData';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Banner bannerText={'Cisco Intern app'}/>
        <div className='d-flex justify-content-between'>
        <Exhibit name="Public IPv4 Address">
          <FetchData adressType='ipv4'/>
        </Exhibit>
        <Exhibit name="Public IPv6 Address">
          <FetchData adressType='ipv6'/>
        </Exhibit>
        </div>
    </div>
  );
}

export default App;
