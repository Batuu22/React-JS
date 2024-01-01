//rcc
import React, { Component } from 'react';

// i18next
import { withTranslation } from 'react-i18next';

// Router
import { Navigate, Route, Routes } from 'react-router-dom';

// Header,Main,Footer
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Component CLASS CRUD
import BlogList from './components/Blog_Class/BlogList';
import BlogCreate from './components/Blog_Class/BlogCreate';
import BlogUpdate from './components/Blog_Class/BlogUpdate';
import BlogView from './components/Blog_Class/BlogView';

// Component FUNCTION CRUD
import Blog_List from './components/Blog_Function/Blog_List';


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
        {/* Header */}
        <Header logo="fa-solid fa-blog"/>
        <br />
        
        <div className="container">
        <Routes>
            {/* Main */}
            <Route path='/' element={<Main/>} />

            {/* CLASS Component CRUD */}
            <Route path='/blog/list' element={<BlogList/>}/>
            <Route path='/blog/create' element={<BlogCreate/>}/>
            <Route path='/blog/update/:id' element={<BlogUpdate/>}/>
            <Route path='/blog/view/:id' element={<BlogView/>}/>

            {/* FUNCTION Component CRUD */}
            <Route path='/blog/list2' element={<Blog_List/>}/>
            
            {/* For Bad Request */}
            <Route path='*' element={<Navigate to='/'/>}/>

        </Routes>
        </div>

       {/* Footer */}
        <Footer copy="&copy; 2021 Copyright: "/>
      </React.Fragment>
    ) //end return
  } //end render
} //end class

// Class adı aşağıda gösterme
//export default RouterBlog;

// Higher Order Component
export default withTranslation()(RouterBlog);