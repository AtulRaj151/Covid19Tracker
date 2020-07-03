import React from 'react';
import { Cards,Chart,CountryPicker} from './Component';
import styles from './App.module.css';
import {fetchData} from './api/index';
class App extends React.Component {

    //constructor automatically callled

      state = {
            data: {},
            country:'',

      }

   async  componentDidMount(){


         const fetchedData = await fetchData();
         //set data to the state
          this.setState({data:fetchedData});
   
    }
    handleCountryChange = async (country) => {
        // console.log(country)
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
    
           //set state

           this.setState({data:fetchedData,country:country});
    }
     
    render() {
        const {data} = this.state;

          return(

               <div className={styles.container}>

                   {/* pass data to the card as props */}
                   <Cards  data={data}/>
                   <CountryPicker handleCountryChange={this.handleCountryChange} />
                   <Chart/>
               </div>
          )
    }
}

export default App;