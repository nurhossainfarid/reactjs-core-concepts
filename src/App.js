import logo from './logo.svg';
import './App.css';
const friendsInfo = [
  { name: 'Sabbir', job: 'Student of DIU', department: 'Software Engineering', id: '221-35-845', section: 'A' },
  { name: 'Tareque', job: 'Student of DIU', department: 'Software Engineering', id: '221-35-842', section: 'A' },
  { name: 'Ibrahim', job: 'Student of DIU', department: 'Software Engineering', id: '221-35-975', section: 'A' },
  { name: 'Sagor', job: 'Student of DIU', department: 'Software Engineering', id: '221-35-973', section: 'A' },
  { name: 'Rakib', job: 'Student of DIU', department: 'Software Engineering', id: '221-35-876', section: 'D' },
];
function App() {
  const friends = ["Sabbir", "Salman", "Tareque", "Rakib", "Akib", "Sagor"]
  return (
    <div className="App">
      {
        friends.map(friend => <Farid name={friend} job="Student"></Farid>)
      }
      {/* <Farid name={friends[0]} job='Art Of Living'></Farid>
      <Farid name={friends[1]} job='Computer Fundamental'></Farid>
      <Farid name={friends[2]} job='Introduction Of Software Engineering'></Farid> */}
      {
        friendsInfo.map(info => <Abid name={info.name} job={info.job} department={info.department} id={info.id} section={info.section}></Abid>)
      }
    </div>
  );
};
const Farid = (props) => {
  return (
    <div className='farid-style'>
      <h2>Name: {props.name}</h2>
      <p>Job: {props.job}</p>
    </div>
  );
}; 
const Abid = (props) => {
  return (
    <div className='abid-style'>
      <h2>Name: {props.name}</h2>
      <p>Job: {props.job}</p>
      <p>Department: {props.department}</p>
      <p>Id: {props.id}</p>
      <p>Section: {props.section}</p>
    </div>
  )
}

export default App;
