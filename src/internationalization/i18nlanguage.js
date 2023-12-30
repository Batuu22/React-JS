import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'homepage': "Home Page",
                    'about': "About",
                    'blog':"Blog",
                    'search_input':"Search",
                    'search_button':"Search",
                    'blog_create':"Blog Create",
                    'blog_update':"Blog Update",
                    'blog_delete':"Delete Blog",
                    'blog_delete_all':"Delete All Blog",
                    'blog_list':"Blog List",
                    'blog_id':"ID",
                    'blog_header':"Blog Header",
                    'blog_content':"Blog Content",
                    'date':"Date",
                    'submit':"Submit",
                    'reset':"Reset",
                    'update':"Update",
                    'view':"View",
                    'delete':"Delete",
                    'member_process':"Member Process",
                    'log_in':"Sign in",
                    'register':"Register",
                    'directTo_BlogList': "Redirect To BlogList",
                 } 
            },
        tr:
            {
                translations: {
                    'homepage': "Anasayfa",
                    'about': "Hakkımızda",
                    'blog':"Blog",
                    'search_input':"Araştır",
                    'search_button':"Ara",
                    'blog_create':"Blog Ekle",
                    'blog_update':"Blog Güncelle",
                    'blog_delete':"Bloğu Sil",
                    'blog_delete_all':"Tüm Bloğu Sil",
                    'blog_list':"Blog Liste",
                    'blog_id':"Blog ID",
                    'blog_header':"Blog Başlığı",
                    'blog_content':"Blog İçeriği",
                    'date':"Tarih",
                    'submit':"Gönder",
                    'reset':"Temizle",
                    'update':"Güncelle",
                    'view':"Göster",
                    'delete':"Sil",
                    'member_process':"Üye İşlemleri",
                    'log_in':"Oturum Aç",
                    'register':"Kayıt Ol",
                    'directTo_BlogList': "Blog Liste Yönlen",
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;