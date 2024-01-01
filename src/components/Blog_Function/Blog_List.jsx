//rfc
import React, { useEffect, useState } from 'react'

//i18n
import { withTranslation } from 'react-i18next'

//ROUTER
import { useNavigate } from 'react-router-dom';

//BlogApi
import BlogApi from '../../services/BlogApi';

//FUNCTION
function Blog_List(props) {

    //Redirect
    let navigate = useNavigate();

    // STATE
    const [header, setHeader] = useState(null);
    const [content, setContent] = useState(null);
    const [blogList, setBlogList] = useState([]);

    // FETCH DATA
    useEffect(() => {
        BlogApi.blogServiceList()
            .then((response) => {
                setBlogList(
                    response.data,
                )
            })
            .catch((err) => {
                console.error(err);
            });
    }) //end useEffect

    const { t } = props;

    //RETURN
    return (
        <React.Fragment>
            <h1 className="text-center text-uppercase display-4 mt-5">{t('blog_list')}</h1>
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
                        blogList.map((temp) =>
                            <tr key={temp.id}>
                                <td>{temp.id}</td>
                                <td>{temp.header}</td>
                                <td>{temp.content}</td>
                                <td>{temp.systemDate}</td>
                                {/* UPDATE */}
                                <td>
                                    <i className="fa-solid fa-pen-nib"></i>
                                </td>
                                {/* VIEW */}
                                <td>
                                    <i className="fa-solid fa-binoculars"></i>
                                </td>
                                {/* DELETE */}
                                <td>
                                    <i className="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                        ) //end map
                    }
                </tbody>
            </table>
        </React.Fragment>
    )//end return
}//end function

export default withTranslation()(Blog_List);
