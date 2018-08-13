import React, { Component } from 'react';
import { UniversalResponsiveTable } from './components';
import './App.css';

const getRandom = () => Math.floor(Math.random() * (1 - 1000)) + 1000;

const getRandomDate = () => new Date(Math.floor(Math.random() * 10000000000000));

const getRandomLine = () => [
  getRandomDate(),
  getRandom(),
  getRandom(),
  getRandom(),
  getRandom(),
  getRandom(),
  getRandom(),
  getRandom(),
  getRandom(),
  getRandom(),
];

const labels = [
  'Date', 'Hits', 'Unique', 'Registrations', 'Demo registrations', 'Conversion', 'Deposit', 'Ftd', 'Deals', 'Profit',
];
const data = [
  getRandomLine(),
  getRandomLine(),
  getRandomLine(),
  getRandomLine(),
  getRandomLine(),
  getRandomLine(),
];


class App extends Component {
  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto', paddingTop: '100px' }}>
        <UniversalResponsiveTable
          labels={labels}
          dataTable={data}
          // resolutions for deletion columns, number elements = number of columns minus one
          resize={[1400, 1300, 1200, 1100, 1000, 900, 800, 700, 600]}
        />
  
        <br/><br/><br/>
  
        <UniversalResponsiveTable
          labels={['Date', 'Hits', 'Deposit', 'Ftd', 'Profit']}
          dataTable={[
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom()],
          ]}
          // resolutions for deletion columns, number elements = number of columns minus one
          resize={[1400, 1300, 1200, 1100]}
        />
        <br/><br/><br/>
        <UniversalResponsiveTable
          labels={
            ['Date', 'Hits', 'Unique', 'Registrations', 'Demo registrations', 'Conversion', 'Deposit', 'Ftd', 'Deals',
             'kills', 'deaths', 'channels', 'cases', 'homes', 'cats', 'dogs', 'birds', 'profit'
            ]}
          dataTable={[
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()],
            [getRandomDate(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()],
            
          ]}
          // resolutions for deletion columns, number elements = number of columns minus one
          resize={[1850, 1750, 1700, 1650, 1600, 1500, 1400, 1300, 1200, 1100, 1000, 950, 900, 850, 800, 750, 700]}
        />
        
        
      </div>
    );
  }
}

export default App;
