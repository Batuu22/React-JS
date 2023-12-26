//rcc
import React, { Component } from 'react';

// External Css
// import styles from '../../styles.module.css';

// i18n
import { withTranslation } from 'react-i18next';

// Blog Api
import BlogApi from '../../services/BlogApi';

// CLASS
class BlogList extends Component {

    //Componentteki isim
    static displayName = "Blog_List";

    //constructor
    constructor(props){
        super(props);

        //STATE
        this.state={
          blogList:[],
        };

        //BIND

    }// end constructor

    //CDM
    componentDidMount(){
      BlogApi.blogServiceList()
      .then((response)=>{
        this.setState({
          blogList:response.data,
        }) //end setState
      })
      .catch((err)=>{
        console.error(err);
      });
    }// end CDM

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
