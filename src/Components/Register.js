import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { Form, Link } from 'react-router-dom'

function Register() {
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <Container className='pt-5 register'>
        <Row>
          <h2 className='title-center'>التسجيل</h2>
          <Col md="12">
            <Form className='w-50 m-auto'>

              <FormGroup>
                <Label className='text-brown' for="exampleEmail">الاسم </Label>
                <Input id="exampleName" name="name" placeholder="" type="text" required />
              </FormGroup>

              <FormGroup>
                <Label className='text-brown' for="exampleEmail">الايميل </Label>
                <Input id="exampleEmail" name="email" placeholder="" type="email" required />
              </FormGroup>

              <FormGroup>
                <Label className='text-brown' for="examplePassword">الرقم السري</Label>
                <Input id="examplePassword" name="password" placeholder="" type="password" required />
              </FormGroup>

              <FormGroup>
                <Label className='text-brown' for="examplePassword">تأكيد الرقم السري</Label>
                <Input id="examplePassword" name="password" placeholder="" type="password" required />
              </FormGroup>
              <Link to="/continue-shiping" className='btn btn-danger m-auto d-block w-25 mt-4'>
                تسجيل
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </CartProvider>
  )
}

export default Register





// import { useState } from 'react';
// import {Row, InputGroup , Form ,Col, Container } from 'react-bootstrap';
// import NavBar from './NavBar';
// import { Link } from 'react-router-dom';

// function Register() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <div>
//       <NavBar/>
//       <div className='pt-5'></div>
//     <Container className='pt-4 register'>
//       <Row>
//       <h2 className='title-center mb-0'>التسجيل</h2>
//         <Col>
//         <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-50 m-auto'>
      
//         <Form.Group className="my-3" controlId="validationCustom01">
//           <Form.Label className='text-brown'>الاسم</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder=""
            
//           />
//         </Form.Group>
//         <Form.Group className="my-3" controlId="validationCustom01">
//           <Form.Label className='text-brown'>الايميل</Form.Label>
//           <Form.Control
//             required
//             type="email"
//             placeholder=""
            
//           />
//         </Form.Group>

//         <Form.Group className="my-3" md="4" controlId="validationCustomUsername">
//           <Form.Label className='text-brown'>الرقم السري</Form.Label>
//           <InputGroup hasValidation>
            
//             <Form.Control
//               type="password"
//               placeholder=""
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//           </InputGroup>
//         </Form.Group>
//         <Form.Group className="my-3" md="4" controlId="validationCustomUsername">
//           <Form.Label className='text-brown'>تأكيد الرقم السري</Form.Label>
//           <InputGroup hasValidation>
            
//             <Form.Control
//               type="password"
//               placeholder=""
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//           </InputGroup>
//         </Form.Group>
//       <Link to="/continue-shiping" className='btn btn-danger m-auto d-block w-25 mt-5' type="submit">Submit form</Link>
//     </Form>
//         </Col>
//       </Row>
//     </Container>

//     </div>
//   );
// }

// export default Register;





// import { useState, useEffect } from "react";

// function App() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
      

//       <form onSubmit={handleSubmit} action="ContineuShiping">
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
          
//           <button  className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";
// import FormInput from "./FormInput";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     birthday: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "birthday",
//       type: "date",
//       placeholder: "Birthday",
//       label: "Birthday",
//     },
//     {
//       id: 4,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       required: true,
//     },
//     {
//       id: 5,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <Link onSubmit={handleSubmit} to="/continue-shiping">Submit</Link>
//       </form>
//     </div>
//   );
// };

// export default Register;