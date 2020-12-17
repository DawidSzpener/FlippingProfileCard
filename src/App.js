import './App.scss';
import img from './assets/images/dawid.jpg'

import FlippingCard from './components/FlippingProfileCard'

function App() {
  return (
    <div className="App">
      <div style={{float: 'left'}}>
        <FlippingCard 
          theme="black"
          picture={img}
          fullName="Dawid Szpener"
          miniTitle="Software Engineer"
          description="Jestem Dawid, od 2 lat ucze sie programowac, lubie gotowac i spedzac czas z Ola"
        />
      </div>
      <div style={{float: 'left', marginLeft: '4%'}}>
        <FlippingCard 
          theme="blue"
          picture={img}
          fullName="Dawid Szpener"
          miniTitle="Software Engineer"
          description="Jestem Dawid, od 2 lat ucze sie programowac, lubie gotowac i spedzac czas z Ola"
        />
      </div>
      <div style={{float: 'left', marginLeft: '4%'}}>
        <FlippingCard 
          theme="red"
          picture={img}
          fullName="Dawid Szpener"
          miniTitle="Software Engineer"
          description="Jestem Dawid, od 2 lat ucze sie programowac, lubie gotowac i spedzac czas z Ola"
        />
      </div>
      <div style={{float: 'left', marginLeft: '4%'}}>
        <FlippingCard 
          theme="green"
          picture={img}
          fullName="Dawid Szpener"
          miniTitle="Software Engineer"
          description="Jestem Dawid, od 2 lat ucze sie programowac, lubie gotowac i spedzac czas z Ola"
        />
      </div>
    </div>
  );
}

export default App;
