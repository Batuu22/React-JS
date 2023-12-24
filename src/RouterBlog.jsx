//rcc
import React, { Component } from 'react';

// i18next
import { withTranslation } from 'react-i18next';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//CLASS
class RouterBlog extends Component {

    //Componentteki isim
    static displayName = "Router_Blog"; 

    //Constructor
    constructor(props){
        super(props);

        //STATE
        this.state={};

        //BIND
        
    } //end constructor
    
    //CDM

    //FUNCTION

  //Render
  render() {

    //Return
    return (
      <React.Fragment>
        <Header/>
        <br />
        <Main/>
        <br/>
        <Footer/>
      </React.Fragment>
    ) //end return
  } //end render
} //end class

// Class adı aşağıda gösterme
//export default RouterBlog;

// Higher Order Component
export default withTranslation()(RouterBlog);