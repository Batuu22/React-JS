//rcc
import React, { Component } from 'react';

// External Css
// import styles from '../../styles.module.css';

//i18next
import { withTranslation } from 'react-i18next';

//CLASS
class BlogList extends Component {

    //Componentteki isim
    static displayName = "Blog_List";

    //constructor
    constructor(props){
        super(props);

        //STATE
        this.state={};

        //BIND

    }// end constructor

    //CDM

    //FUNCTION

  //Render
  render() {
    //Return
    return (
      <React.Fragment>BlogList</React.Fragment>
    )//end Return
  }//end Render
}// end Class

//Higher Order Component
export default withTranslation()(BlogList);