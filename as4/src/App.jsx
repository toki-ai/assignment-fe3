import { useEffect, useState}from 'react';
import List from './components/List';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1 style={{fontSize: '20px', marginLeft: '10px'}}>Assignment 4</h1>
      <List data={data}></List>
    </div>
  )
}

export default App
