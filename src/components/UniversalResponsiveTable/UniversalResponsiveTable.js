import React, { Component } from 'react';
import './line-awesome/line-awesome/css/line-awesome.css';


const prepareTableHead = labels => labels.map(label => ({ isShow: true, label }));

const prepareTableBody = dataTable => dataTable.map(line => line.map(value => ({ isShow: true, value })));

const prepareTotal = (dataTable, labels) => {
  let total = new Array(labels.length).fill(0);
  dataTable.map((line) => {
    line.map((coll, id) => {
      total[id] += +coll;
    });
  });
  total = total.map((value) => {
    return {
      isShow: true,
      value,
    };
  });
  return total;
};

class UniversalResponsiveTable extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      table: {
        thead: prepareTableHead(this.props.labels),
        tbody: prepareTableBody(this.props.dataTable),
      },
      total: prepareTotal(this.props.dataTable, this.props.labels),
      resize: this.props.resize,
      details: [],
      sortBy: [],
    };
  }
  
  componentDidMount() {
    this.handleScreenSize();
    window.addEventListener('resize', () => this.handleScreenSize());
  }
  
  handleScreenSize() {
    const { table, resize, total } = this.state;
    const width = document.body.clientWidth;
    resize.map((size, sizeId) => {
      const numberTr = sizeId + 2;
      if (width < size) {
        
        table.tbody.map((line, lineId) => {
          table.tbody[lineId][line.length - numberTr].isShow = false;
        });
        table.thead[table.thead.length - numberTr].isShow = false;
        total[total.length - sizeId - 2].isShow = false;
        
      } else {
        
        table.tbody.map((line, lineId) => {
          table.tbody[lineId][line.length - numberTr].isShow = true;
        });
        table.thead[table.thead.length - numberTr].isShow = true;
        total[total.length - sizeId - 2].isShow = true;
        
      }
    });
    this.setState({ table, total });
  }
  
  toggleDetails(collId) {
    const { details } = this.state;
    details[collId] = !details[collId];
    this.setState({ details });
  }
  
  mySort(collId) {
    const { table, sortBy } = this.state;
    table.tbody.sort((a, b) => {
      if (a[collId].value > b[collId].value) {
        return sortBy[collId] ? 1 : -1;
      }
      if (a[collId].value < b[collId].value) {
        return sortBy[collId] ? -1 : 1;
      }
      
      return 0;
    });
    
    sortBy[collId] = !sortBy[collId];
    
    this.setState({ table, sortBy });
  }
  
  render() {
    const { table: { thead, tbody }, details, total } = this.state;
    
    return (
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th onClick={() => this.mySort(0)}>
              {thead[0].label}
              <i className="la la-unsorted"></i>
            </th>
      
            {thead.slice(1, thead.length - 1).map((item, id) => {
              if (item.isShow) {
                return (
                  <th onClick={() => this.mySort(id + 1)} key={id}>
                    {item.label}
                    <i className="la la-unsorted"></i>
                  </th>
                );
              }
            })}
      
            <th onClick={() => this.mySort(tbody.length - 1)}>
              {thead[thead.length - 1].label}
              <i className="la la-unsorted"></i>
            </th>
          </tr>
        </thead>
    
        <tbody>
          {tbody.map((item, collId) => {
            return (
              <tr key={collId}>
                <td>
                  {`${item[0].value.getFullYear()}-${item[0].value.getMonth()}-${item[0].value.getDay()}`}
                  <div>
                    {item.slice(1, tbody[collId].length - 1).find(x => x.isShow === false) && (
                      <span onClick={() => this.toggleDetails(collId)} style={{ backgroundColor: 'orange', color: 'white' }}>
                        More details
                      </span>
                    )}
                    {item.slice(1, tbody[collId].length - 1).map((itemTr, id) => {
                      if (!itemTr.isShow && details[collId]) {
                        return (
                          <li key={id}>
                            {thead[id + 1].label} - {itemTr.value}
                          </li>
                        );
                      }
                    })}
                  </div>
                </td>
                
                {item.slice(1, tbody[collId].length - 1).map((itemTr, id) => {
                  if (itemTr.isShow) {
                    return (
                      <td key={id}>
                        {itemTr.value}
                      </td>
                    );
                  }
                })}
                
                <td>
                  {item[tbody[collId].length - 1].value}
                </td>
              </tr>
            );
          })}
          
          <tr style={{backgroundColor: '#ff000033'}}>
            <td>Total</td>
            {total.slice(1).map((column, id) => {
            if (column.isShow) {
              return (
                <td key={id}>
                  {column.value}
                </td>
              );
            }
            })}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default UniversalResponsiveTable;
