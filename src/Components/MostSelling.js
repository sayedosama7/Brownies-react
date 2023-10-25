import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
export class MostSelling extends Component {
    render() {
        return (
            <div>
                <div class="container most">
                    <div class="row">
                        <h2 className="title-center">الأكثر مبيعا</h2>

                        <div class="col-md-3 mb-4 text-center">
                            <Card>
                                <img class="img-fluid" alt="Sample" src="images/most/most-1.png" />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        باتون ساليه سمسم
                                    </CardTitle>
                                    <CardSubtitle className="my-3 text-muted" tag="h6">
                                        160.00 ج.م.
                                    </CardSubtitle>
                                    <hr />
                                    <Link>
                                        <button className='btn btn-danger btn-block'>
                                            add to cart
                                        </button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                        <div class="col-md-3 mb-4 text-center">
                            <Card>
                                <img class="img-fluid" alt="Sample" src="images/most/most-2.png" />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        بسيمة بندق
                                    </CardTitle>
                                    <CardSubtitle className="my-3 text-muted" tag="h6">
                                        200.00 ج.م.
                                    </CardSubtitle>
                                    <hr />
                                    <Link>
                                        <button className='btn btn-danger btn-block'>
                                            add to cart
                                        </button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                        <div class="col-md-3 mb-4 text-center">
                            <Card>
                                <img class="img-fluid" alt="Sample" src="images/most/most-3.png" />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        زبيب
                                    </CardTitle>
                                    <CardSubtitle className="my-3 text-muted" tag="h6">
                                        150.00 ج.م.
                                    </CardSubtitle>
                                    <hr />
                                    <Link>
                                        <button className='btn btn-danger btn-block'>
                                            add to cart
                                        </button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                        <div class="col-md-3 mb-4 text-center">
                            <Card>
                                <img class="img-fluid" alt="Sample" src="images/most/most-4.png" />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        فادج كيك
                                    </CardTitle>
                                    <CardSubtitle className="my-3 text-muted" tag="h6">
                                        100.00 ج.م.
                                    </CardSubtitle>
                                    <hr />
                                    <Link>
                                        <button className='btn btn-danger btn-block'>
                                            add to cart
                                        </button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default MostSelling