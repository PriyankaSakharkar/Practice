import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';

function App() {
  return (
    <div>
       <h1>First React Project</h1>
       <p> Test p tag</p>

       <Add a= '8' b= '2'></Add>
       <Sub a= '5' b= '2'/>

       <table>
  <tr>
    <th>Name</th>
    <th>Collage</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Priyanka Sakharkar</td>
    <td>KDK</td>
    <td>Nagpur</td>
  </tr>
  <tr>
    <td>Neha Likhar</td>
    <td>NIT</td>
    <td>Nagpur</td>
  </tr>
  <tr>
    <td>Vaishali Barai</td>
    <td>NIT</td>
    <td>Nagpur</td>
  </tr>
</table>

    </div>
  );
}

export default App;
