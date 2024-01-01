//rcc
import React, { Component } from 'react'

//i18next
import { withTranslation } from 'react-i18next';

//Component
import ReusabilityBlogInput from '../ReusabilityBlogInput';

//ROUTER
import { Link } from 'react-router-dom';

//BlogApi
import BlogApi from '../../services/BlogApi';

//CLASS
class BlogUpdate extends Component {

  //Componentteki isim
  static displayName = "Blog_Update";

  //constructor
  constructor(props) {
    super(props);

    //STATE
    this.state = {
      id: localStorage.getItem("Blog_ID"), //this.props.match.params.id
      header: null,
      content: null,
      systemDate:null,
      isRead: false, //sözleşme kuralları
      spinnerData: false, //Spinner
      multipleRequest: false, // Çoklu Kayıtlara izin verme
      validationErrors: {}, //Backendden gelen verileri almak
    };

    //BIND
    this.reset = this.reset.bind(this);
    this.clearValidaton = this.clearValidaton.bind(this);
    this.onChangeIsRead = this.onChangeIsRead.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.updateSubmit = this.updateSubmit.bind(this);
  }// end constructor

  //CDM
  async componentDidMount() {
    try {
      const response = await BlogApi.blogServiceFindById(this.state.id);
      if (response.status === 200) {
        //console.log(response.data);
        this.setState({
          header:response.data.header,
          content:response.data.content,
          systemDate:response.data.systemDate,
        })
      }
    } catch (err) {
      console.error(err);
    }
  }

  //FUNCTION
  reset() {
    document.getElementById("header").value = null;
    document.getElementById("content").value = null;
  }

  clearValidaton() {
    document.getElementById("headerValidation_id").innerHTML = null;
    document.getElementById("contentValidation_id").innerHTML = null;
  }

  onChangeIsRead = (event) => {
    //1.YOL event.target.checked
    //2.YOL
    const { checked } = event.target;
    this.setState({
      isRead: checked,
    })
  }

  //ONCHANGE
  onChangeInputValue = (event) => {
    //1.YOL
    //const name=event.target.name;
    //console.log("name => " + name);
    //const value = event.target.value;
    //console.log("value => " + value);
    //2.YOL
    const { name, value } = event.target;
    //console.log(name + " "+ value);
    console.log(`${name} ${value}`); // => interpolation yapısı
    //STATE 
    this.setState({
      [name]: value,
    })
  }

  updateSubmit = async (event) => {
    // Browser Sen dur bir şey yapma!
    event.preventDefault();
    const { header, content } = this.state;
    const blogDto = {
      header, content
    }
    //1.YOL (promise)
    // BlogApi.blogServiceCreate(blogDto)
    // .then((response)=>{
    //   if(response.status===200) {
    //     window.alert("Success");
    //   }
    // }) // end then
    // .catch((err)=>{
    //   console.error(err);
    // });

    //2.YOL (asyn-await)
    try {
      //SPINNER GÖNDERMEDEN ÖNCE
      this.setState({
        spinnerData: true,
        multipleRequest: true
      });
      //CREATE
      const response = await BlogApi.blogServiceUpdateId(this.state.id, blogDto);
      if (response.status === 200) {
        alert('Güncelleme Başarılı');
        //localStorage
        localStorage.setItem("Blog_Header", this.state.header);
        localStorage.setItem("Blog_Content", this.state.content);
        //SPINNER GÖNDERDİKTEN SONRA
        this.setState({
          spinnerData: false,
          multipleRequest: false
        });
        //PHP
        // this.props.history.push("/blog/list");
      } //end if
    } //end try
    catch (err) {
      console.error(err);
      //HATA SPINNER ÇALIŞSIN!
      this.setState({
        spinnerData: true,
        multipleRequest: false
      });
      // Validation Errors
      const { header, content } = err.response.data.validationErrors;
      this.setState({
        validationErrors: { header, content }
      })

    }//end catch
  } // end createSubmit

  //Render
  render() {

    //object destructing
    const { t } = this.props;
    const { isRead, multipleRequest, validationErrors } = this.state;
    // Hatayı yakalamak
    const { header, content } = validationErrors;

    //Return
    return (
      <React.Fragment>
        <Link to={'/blog/list'}><button className="btn btn-warning mt-5">{t('directTo_BlogList')}</button></Link>
        <h1 className="text-center display-4 text-uppercase mt-2">{t('blog_update')}</h1>
        <form>
          {/* HEADER */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="header">{t('blog_header')}</label>
            <input
              type="text"
              id="header"
              name="header" //backende veri gönderme için kullanılır. //backende giden veri
              placeholder={t('blog_header')}
              className="form-control"
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValue}
              value={this.state.header}
            /> 
            {/* Validaton Header */}
             <span id="headerValidation_id" className='text-danger'>{header}</span>

            {/* HEADER REUSABILITY */}
            {/* <ReusabilityBlogInput
              type="text"
              id="header"
              name="header"
              placeholder={t('blog_header')}
              classNameProps="form-control"
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValue}
              //errors = {this.state.validationErrors.header}
              errors={header}
              onKeyDown={this.clearValidaton}
            /> */}
          </div>

          {/* CONTENT */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="content">{t('blog_content')}</label>
            <input
              className="form-control"
              id="content"
              name="content" //backende veri gönderme için kullannılır. //backende giden veri
              placeholder={t('blog_content')}
              required={true}
              autoFocus={false}
              rows="4"
              onChange={this.onChangeInputValue}
              onKeyDown={this.clearValidaton}
              value={this.state.content}
            />
            
            {/* Validaton Content */}
            <span id="contentValidation_id" className='text-danger'>{content}</span>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn btn-primary mb-5"
            disabled={(!isRead) || (multipleRequest)}
            onClick={this.updateSubmit}>
            {t('update')}
            {(this.state.spinnerData) && <span className="spinner-border text-warning"></span>}
          </button>

          {/* RESET */}
          <button
            type="submit"
            className="btn btn-danger mb-5 ms-2"
            onClick={this.reset}>
            {t('reset')}
          </button>

          {/* CHECKBOX */}
          <input
            id="isRead"
            name="isRead"
            type="checkbox"
            className="form-check-input"
            onChange={this.onChangeIsRead}
          />
          <label htmlFor="isRead">Anlaşmayı okudunuz mu?</label>
          <br /><br /><br /><br /><br /><br /><br />

        </form>
      </React.Fragment>
    )//end Return
  }//end Render
}// end Class

//Higher Order Component
export default withTranslation()(BlogUpdate);
