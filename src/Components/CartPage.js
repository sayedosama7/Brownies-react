

import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { CartProvider, useCart } from 'react-use-cart';
import NavBar from './NavBar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function Cart() {
  const { cartTotal, emptyCart, isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) {
    return <h2 className="text-center mt-5">سلة الشراء فارغة
      <NavLink className='btn btn-danger m-auto d-block main w-25 mt-5 mt-2' to='/'>
        الرجوع للقائمة الرئيسية
      </NavLink>
    </h2>
      ;
  }

  return (
    <div>
      <Container>
        <Row>
          <div className='cart-title'>
            <h2>عربة التسوق</h2>
            <h6 className='mb-4'>عدد المنتجات {totalUniqueItems}</h6>
          </div>
          <Col md="12" className='text-center'>
            <table className="table w-75 m-auto">
              <thead className='text-brown'>
                <th></th>
                <th>السعر</th>
                <th>الكمية</th>
                <th>الصنف</th>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className='d-flex table-btn'>
                        <button
                          className="btn btn-light cart-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          &#10006;
                        </button>
                        <button
                          className="btn btn-light mx-2 cart-btn"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-light cart-btn"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </div>
                    </td>

                    <td>{item.price * item.quantity} ج.م. </td>
                    <td>{item.quantity}</td>
                    <td>
                      ( {item.name} )
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className='mt-4 say'> السعر الكلي {cartTotal} ج.م.</h3>
            <div className='mt-4'>
              <NavLink className='btn btn-danger  mb-2' to='/register'>متابعة عملية الشراء</NavLink>
            </div>
            <button className="btn btn-danger " onClick={() => emptyCart()}>حذف كل المنتجات </button>

          </Col>
          <Col md='12' lg='6' className='text-center'>
          </Col>
        </Row>
      </Container>
      <NavLink className='btn btn-danger m-auto d-block main w-25 mb-5 mt-2' to='/'>القائمة الرئيسية</NavLink>

    </div>
  );
}

function CartPage() {
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <div className='pt-5'></div>
      <Cart />
      <Footer />
    </CartProvider>
  )
}
export default CartPage
