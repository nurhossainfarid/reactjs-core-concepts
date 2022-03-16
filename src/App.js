import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Farid></Farid>
      <Farid></Farid>
      <Farid></Farid>
      <Farid></Farid>
      <Abid></Abid>
    </div>
  );
};
const Farid = () => {
  return (
    <div className='farid-style'>
      <h2>Nur Hossain Farid</h2>
      <p>Job: Student of DIU</p>
    </div>
  );
}; 
const Abid = () => {
  return (
    <div className='abid-style'>
      <h2>Shariya Alam Abid</h2>
      <p>Job: Student of TM</p>
    </div>
  )
}

export default App;
