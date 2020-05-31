import React,{Component} from 'react';
import styles from './App.module.css';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Chart from './Components/Chart/Chart';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
 
export default App;

