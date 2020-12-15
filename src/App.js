import './App.scss';
import img from './assets/images/dawid.jpg'

import FlippingCard from './components/FlippingProfileCard'

function App() {
  return (
    <div className="App">
      <FlippingCard 
      picture={img}
      fullName="DAWID SZPENER"
      miniTitle="Software Engineer"
      description="Jestem Dawid, od 2 lat ucze sie programowac, lubie gotowac i spedzac czas z Ola"
      />
    </div>
  );
}

export default App;
