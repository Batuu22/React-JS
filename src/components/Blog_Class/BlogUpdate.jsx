//rcc
import React, { Component } from 'react'

//i18next
import { withTranslation } from 'react-i18next';

//CLASS
class BlogUpdate extends Component {

    //Componentteki isim
    static displayName = "Blog_Update";

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
      <React.Fragment>BlogUpdate</React.Fragment>
    )//end Return
  }//end Render
}// end Class

//Higher Order Component
export default withTranslation()(BlogUpdate);
