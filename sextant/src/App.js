import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <Banner title={'Cisco Intern app'}/>
        <Card>
          <h3>Card-title</h3>
          <p>Card-text</p>
        </Card>
    </div>
  );
}

export default App;
