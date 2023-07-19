import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
function EncuestaForm() {
  const [validated, setValidated] = useState(false);
  let navigate=useNavigate();
  
  /* const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
    navigate("/adentro")    
  }; */
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
    const userLogin = event.target.userLogin.value;
    const userPassword = event.target.userPassword.value;
    console.log(userLogin)  

    if (userLogin.trim() === '' || userPassword.trim() === '') {
      // Mostrar mensaje de error o realizar alguna acción
      alert('Por favor, completa todos los campos');
      return; // Detiene la ejecución del handleSubmit
    }
  
    // Realiza la petición de autenticación utilizando fetch
   /*  fetch('http:4001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userLogin: userLogin,
        userPassword: userPassword
      })
    })
      .then(response => {
        if (response.ok) {
          // Autenticación exitosa, redirecciona a otra vista
          history.push('/adentro');
        } else {
          // Autenticación fallida, muestra un mensaje de error
          document.getElementById('test').style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      }); */
      navigate('/adentro');
  };

  return (
 
    <Form noValidate validated={validated}  onSubmit={handleSubmit}>
      <section id="thank-you" className="thank-you-section">
        <div className="container">
          <div className="thank-you-wrapper position-relative thank-wrapper-style-one">
            {/* <div className="thank-you-close text-center">x</div> */}
            <div className="thank-txt text-center">
              <div className="thank-icon">
                <img src="/src/assets/assets_landing/img/unnamed.png" alt="" />
              </div>
              <h1>Ingreso a encuesta</h1>

              <div className="form-group row">
                <div className="col-4 col-form-label">
                  <label htmlFor="colFormLabelSm">Usuario Institucional <b>(sin el @unal.edu.co)</b></label>
                </div>
                <Form.Group as={Col} md="7" controlId="validationCustom01">          
                  <Form.Control
                    required
                    type="text"
                    placeholder="@unal.edu.co"
                    defaultValue=""
                    name="userLogin"
                  />
                  <Form.Control.Feedback type='invalid'>Introduce tu Usuario!</Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="form-group row">
                <div className="col-4 col-form-label">
                  <label htmlFor="colFormLabelSm">Contraseña</label>
                </div>                
                <Form.Group as={Col} md="7" controlId="validationCustom04">                
                <Form.Control  name="userPassword" type="password" placeholder="contraseña" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              </div>

              <Button type="submit">Ingresar</Button>
              <p id="test" style={{ display: 'none' }}>Usuario o contraseña incorrectos</p>
            </div><br /><br />

            <div className="th-bottom-vector position-relative">
              <img src="/src/assets/assets_landing/img/tv1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </Form>
    
  );
}

export default EncuestaForm;


