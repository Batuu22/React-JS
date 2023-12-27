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
  constructor(props) {
    super(props);

    //STATE
    this.state = {
      blogList: [],
    };

    //BIND

  }// end constructor

  //CDM
  componentDidMount() {
    BlogApi.blogServiceList()
      .then((response) => {
        this.setState({
          blogList: response.data,
        }) //end setState
      })
      .catch((err) => {
        console.error(err);
      });
  }// end CDM

  //FUNCTION

  //Render
  render() {

    //object destructing
    const { t } = this.props;
    const {blogList} = this.state;

    //Return
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase">Blog List</h1>
        {/* table.table.table-hover.table-striped>thead>tr>th{item $}*4^^tbody>tr>td{item $}*4 */}
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>{t('blog_id')}</th>
              <th>{t('blog_header')}</th>
              <th>{t('blog_content')}</th>
              <th>{t('date')}</th>
              <th>{t('update')}</th>
              <th>{t('view')}</th>
              <th>{t('delete')}</th>
            </tr>
          </thead>
          <tbody>
            {
              blogList.map((temp)=>
              <tr key={temp.id}>
                <td>{temp.id}</td>
                <td>{temp.header}</td>
                <td>{temp.content}</td>
                <td>{temp.systemDate}</td>
                <td><i className="fa-solid fa-pen-nib text-primary" style={{"cursor":"pointer"}}></i></td>
                <td><i className="fa-solid fa-binoculars text-warning" style={{"cursor":"pointer"}}></i></td>
                <td><i className="fa-solid fa-trash text-danger" style={{"cursor":"pointer"}}></i></td>
              </tr>) //end map
            } 
          
          </tbody>
        </table>
      </React.Fragment>
    )//end Return
  }//end Render
}// end Class

//Higher Order Component
export default withTranslation()(BlogList);
