//rcc
import React, { Component } from 'react';

// External Css
// import styles from '../../styles.module.css';

// i18n
import { withTranslation } from 'react-i18next';

// Blog Api
import BlogApi from '../../services/BlogApi';

//Router
import { Link } from 'react-router-dom';

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
    this.update=this.update.bind(this);
    this.delete=this.delete.bind(this);
    this.view=this.view.bind(this);

  }// end constructor

  //CDM
  componentDidMount() {
    BlogApi.blogServiceList()
      .then((response) => {
        // console.log(response.data);
        this.setState({
          blogList: response.data,
        }) //end setState
      })
      .catch((err) => {
        console.error(err);
      });
  }// end CDM

  //FUNCTION
  //UPDATE
  update(id) {
      //alert(id);
      window.open("/blog/update/"+id);
  }

  //DELETE
  delete(id) {
    BlogApi.blogServiceDeleteId(id)
    .then((response)=>{
      this.setState({
        blogList:this.state.blogList.filter((temp_filter)=>temp_filter.id!=id)
      })
    })
    .catch((err)=>{
      window.alert("Silmede bir hata var" + err);
    });
  }

  //VIEW
  view(id) {
    //alert(id);
  }

  //Render
  render() {

    //object destructing
    const { t } = this.props;
    const {blogList} = this.state;

    //Return
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">{t('blog_list')}</h1>
        <Link to={'/blog/create'}>
        <button className="btn btn-primary"><i className="fa-solid fa-plus"></i> {t('blog_create')}</button>
        </Link>
        <button className="btn btn-danger ms-2"><i className="fa-solid fa-trash"></i> {t('blog_delete_all')}</button>

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
                {/* UPDATE */}
                <td>
                  <i 
                  className="fa-solid fa-pen-nib text-primary text-center" 
                  style={{"cursor":"pointer"}}
                  onClick={()=>this.update(temp.id)}>
                  </i>
                </td>
                {/* VIEW */}
                <td>
                  <Link to={`/blog/view/${temp.id}`}>
                  <i
                  className="fa-solid fa-binoculars text-warning text-center"
                  style={{"cursor":"pointer"}}
                  onClick={()=>this.view(temp.id)}>
                  </i>
                  </Link>
                </td>
                {/* DELETE */}
                <td>
                  <i
                  className="fa-solid fa-trash text-danger text-center"
                  style={{"cursor":"pointer"}}
                  onClick={()=>{
                    if(window.confirm("Silmek istediğinize emin misiniz ?")) {
                      this.delete(temp.id);
                      window.alert("İşlem Başarılı");
                    }
                    else {
                      window.alert("Silinmedi !!!");
                    }
                  }}>
                  </i>
                </td>
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
