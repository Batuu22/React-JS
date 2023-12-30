//rcc
import React, { Component } from 'react';

//i18next
import { withTranslation } from 'react-i18next';

// BlogApi
import BlogApi from '../../services/BlogApi';

//ROUTER
import { Link } from 'react-router-dom';

//CLASS
class BlogCreate extends Component {

  //Componentteki isim
  static displayName = "Blog_Create";

  //constructor
  constructor(props) {
    super(props);

    //STATE
    this.state = {
      header: null,
      content: null,
      isRead: false, // Sözleşme kuralları ?
      spinnerData: false, //Spinner
      multipleRequest: false, // Çoklu Kayıtlara izin verme
      validationErrors: {}, //Validation Errors
    };

    //BIND
    this.reset = this.reset.bind(this);
    this.onChangeIsRead = this.onChangeIsRead.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.createSubmit = this.createSubmit.bind(this);
  }// end constructor

  //CDM

  //FUNCTION
  reset() {
    document.getElementById("header").value = null;
    document.getElementById("content").value = null;
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

  createSubmit = async (event) => {
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
      const response = await BlogApi.blogServiceCreate(blogDto);
      if (response.status === 200) {
        alert('Başarılı');
        //SPINNER GÖNDERDİKTEN SONRA
        this.setState({
          spinnerData: false,
          multipleRequest: false
        });
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
    const { header, content } = validationErrors;

    //Return
    return (
      <React.Fragment>
        <Link to={'/blog/list'}><button className="btn btn-warning mt-5">{t('directTo_BlogList')}</button></Link>
        <h1 className="text-center display-4 text-uppercase mt-2">{t('blog_create')}</h1>
        <form>
          {/* HEADER */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example2">{t('blog_header')}</label>
            <input
              type="text"
              id="header"
              name="header" //backende veri gönderme için kullanılır. //backende giden veri
              placeholder={t('blog_header')}
              className="form-control"
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValue}
            />
            {/* Validaton Header */}
            <span id="headerValidation_id" className='text-danger'>{header}</span>
          </div>

          {/* CONTENT */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example3">{t('blog_content')}</label>
            <textarea
              className="form-control"
              id="content"
              name="content" //backende veri gönderme için kullannılır. //backende giden veri
              placeholder={t('blog_content')}
              required={true}
              autoFocus={false}
              rows="4"
              onChange={this.onChangeInputValue}
            >
            </textarea>
            {/* Validaton Content */}
            <span id="contentValidation_id" className='text-danger'>{content}</span>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn btn-primary mb-5"
            disabled={(!isRead) || (multipleRequest)}
            onClick={this.createSubmit}>
            {t('submit')}
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
export default withTranslation()(BlogCreate);
