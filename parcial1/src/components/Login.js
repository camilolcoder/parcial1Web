import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import { Card, Col, Carousel, Image, Button, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';




function Login() {

    var roleBoolean = Math.random() < 0.5;
    const [formValues, setFormValues] = useState({email:"", password:"", role:roleBoolean})
    const [validationStates, setValidationStates] = useState({ emailState: false, passwordState: false });

    const navigate = useNavigate()

    const handleEmailChange = ((e) => {
  
      setFormValues({...formValues, email: e.target.value})
      
      });
  
    const handlePasswordChange = ((e) => {
      
      // const password = e.target.value;
      setFormValues({...formValues, password: e.target.value})
  
      const isLengthValid = formValues.password.length >= 5 // No sé por qué pero para que sea >= 6 tengo que dejarlo con 5;
    //   const containsLetter = /[a-zA-Z]/.test(formValues.password);
    //   const containsNumber = /[0-9]/.test(formValues.password);
  
      const isPasswordValid = isLengthValid //&& containsLetter && containsNumber;
      console.log(isPasswordValid)
      setValidationStates({ ...validationStates, passwordState: isPasswordValid });
      });
  
    const clickSubmit = (() => {
      const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email);
      console.log(isEmailValid)
      setValidationStates({ ...validationStates, emailState: isEmailValid })
      if (!isEmailValid) {
        alert("Please correct the form errors before submitting");
      }
      })

      const clickSubmit2 = (() => {
        if (validationStates.passwordState) {
          alert(JSON.stringify(formValues));
          console.log(JSON.stringify(formValues))
          localStorage.setItem("userLogged", JSON.stringify(formValues))
          navigate("/parts")
        } else {
          alert("Please correct the form errors before submitting");
        }
        })
  
  return (
    <Container className='p-5'>
    <Row className='p-5' style={{backgroundColor:'grey'}}>
    <Col  className='w-50'>
      <Form className='w-75'>
        {validationStates.emailState ? 
        (<div>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label><h2>{formValues.email}</h2></Form.Label>
        <Form.Control type="password" placeholder="Password"
        onChange={handlePasswordChange} value={formValues.password} style={{borderColor: validationStates.passwordState ? '' : 'red'}} />
        { !validationStates.passwordState && <Form.Text
        className="text-muted">Your password should be at least 6 char long</Form.Text>}
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit2}>
        <FormattedMessage id='next' />
        </Button>
        </div>)
         : 
        (<div>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label> { validationStates.emailState ? 
            (<h2>{formValues.email}</h2>):
            (<div> <h1> <FormattedMessage id='access'/> </h1> <h4> <FormattedMessage id='user_your_account'/> </h4> </div>)}
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email"
            onChange={handleEmailChange} value={formValues.email} style={{borderColor: validationStates.emailState ? '' : 'red'}}/>
            { validationStates.emailState ? (<Form.Text className="text-muted">We'll
            never share your email with anyone else.</Form.Text>)
            :
             (<Form.Text className="text-muted">Your email should follow an established
              format.</Form.Text>)}
              </Form.Group>
              <Button variant="primary" onClick={clickSubmit}>
              <FormattedMessage id='next' />
            </Button>
            </div>)}
     
      </Form>
    </Col> 
    </Row>
    </Container>
  );
  }

export default Login;