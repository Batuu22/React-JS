//rcc
import React, { Component } from 'react';

//i18next
import { withTranslation } from 'react-i18next';

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
      blogDto: {}, //object
      isRead: false, // Sözleşme kuralları ?
    };

    //BIND
    this.reset = this.reset.bind(this);
    this.onChangeIsRead = this.onChangeIsRead.bind(this);

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

  //Render
  render() {

    //object destructing
    const { t } = this.props;
    const { isRead } = this.state;

    //Return
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">{t('blog_create')}</h1>
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
            />
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
            >
            </textarea>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn btn-primary mb-5"
            disabled={!isRead}
          >
            {t('submit')}
          </button>

          {/* CLEAN */}
          <button
            type="submit"
            className="btn btn-danger mb-5 ms-2"
            onClick={this.reset}
          >
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
