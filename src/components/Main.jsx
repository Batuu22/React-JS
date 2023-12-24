//rcc
import React, { Component } from 'react';

//i18next
import { withTranslation } from 'react-i18next';

//CLASS
class Main extends Component {
    //Componentteki isim
    static displayName = "Router_Main";

    //constructor
    constructor(props) {
        super(props);

        //STATE
        this.state = {};

        //BIND

    }//end constructor

    //CDM

    //FUNCTION

    //Render
    render() {
        //Return
        return (
            <React.Fragment>Main</React.Fragment>
        )// end Return
    }// end Render
}// end Class

//Higher Order Component
export default withTranslation()(Main);