/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class=" text-right text-lg-start text-brown mt-5">
                    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div class="me-5 d-none d-lg-block">
                            <span>تابعنا علي :</span>
                        </div>

                        <div>
                            <a href="https://web.facebook.com/profile.php?id=100074154131174" target='_blank' class="me-4" rel="noreferrer">
                                <i class="fab fa-facebook-f text-brown"></i>
                            </a>
                            <a href="https://web.facebook.com/profile.php?id=100074154131174" target='_blank' rel="noreferrer" class="me-4">
                                <i class="fab fa-twitter text-brown"></i>
                            </a>
                            <a href="https://web.facebook.com/profile.php?id=100074154131174" target='_blank' rel="noreferrer" class="me-4">
                                <i class="fab fa-google text-brown"></i>
                            </a>
                            <a href="https://web.facebook.com/profile.php?id=100074154131174" target='_blank' rel="noreferrer" class="me-4">
                                <i class="fab fa-instagram text-brown"></i>
                            </a>
                            <a href="https://www.linkedin.com/feed/?trk=hb_signin" target='_blank' rel="noreferrer" class="me-4">
                                <i class="fab fa-linkedin text-brown"></i>
                            </a>
                            <a href="https://github.com/sayedosama7" target='_blank' rel="noreferrer" class="me-4">
                                <i class="fab fa-github text-brown"></i>
                            </a>
                        </div>
                    </section>

                    <section>
                        <div class="container text-md-start mt-5">
                            <div class="row mt-3">
                                <div class="col-md-4 mb-4 text-right">
                                    <h6 class=" fw-bold mb-4">
                                        حلواني براونيز
                                    </h6>
                                    <p>
                                        راعي المناسبات السعيدة<br />
                                        معاك في اي حاجه حلوة
                                    </p>
                                    <p>
                                        ساعات العمل  <br />من 09:00 AM صباحا <br />الى 12:00 AM منتصف الليل<br /> 7 ايام في الاسبوع
                                    </p>
                                </div>

                                <div class="col-md-4 mb-4 text-right">
                                    <h6 class="fw-bold mb-4">
                                        الأقسام
                                    </h6>
                                    <p>
                                        <Link to="/oriental" class="text-reset">شرقي</Link>
                                    </p>
                                    <p>
                                        <Link to="/gateax" class="text-reset">غربي</Link>
                                    </p>
                                    <p>
                                        <Link to="/bakery" class="text-reset">مخبوزات</Link>
                                    </p>
                                    <p>
                                        <Link to="/elmoled" class="text-reset">حلاوة المولد</Link>
                                    </p>
                                    <p>
                                        <Link to="/yamesh" class="text-reset">ياميش ومكسرات</Link>
                                    </p>
                                </div>

                                <div class="col-md-4 mb-4 text-right">
                                    <h6 class="text-uppercase fw-bold mb-4">اتصل بنا</h6>
                                    <p><i class="fas fa-home me-3  text-brown"></i> ههيا شارع الجمهورية</p>
                                    <p>
                                        <i class="fas fa-envelope me-3 ml-2 text-brown"></i>
                                        www.brownies.com
                                    </p>
                                    <p><i class="fas fa-phone me-3  text-brown"></i> 01210304516</p>
                                    <p><i class="fas fa-print me-3  text-brown"></i> 01030608819</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="text-center pb-4">

                        <Link class="text-brown fw-bold" to="/">حلواني براونيز</Link>
                        <h5 className='text-brown mt-2'>by sayed osama</h5>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer