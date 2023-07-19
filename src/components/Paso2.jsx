import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Paso2({ onNextStep }) {
    const [password, setPassword] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
  
    const onPasswordChange = (e) => {
      setPassword(e.target.value.trim()); // Si password tiene algún valor, setPasswordFilled será true; de lo contrario, será false.
      // Aquí también puedes hacer otras acciones con el valor de la contraseña, si es necesario.
    };
  
    const handleButtonClick = () => {
      setIsButtonClicked(true);
      if (!password) {
        return; // Si la contraseña está vacía, no se avanza al siguiente paso
      }
      onNextStep(); // Llama a la función de callback para avanzar al siguiente paso
    };
  
    const isPasswordEmpty = password === '';
    const shouldShowFeedback = isButtonClicked && isPasswordEmpty;
  
    return (
      <div>
        <div className="form-group row">
          <div className="col-4 col-form-label">
            <label htmlFor="colFormLabelSm">Contraseña</label>
          </div>
          <Form.Group as={Col} md="7" controlId="validationCustom04">
            <Form.Control
              name="nombre1"
              type="password"
              placeholder="contraseña"
              onChange={onPasswordChange}
              isInvalid={shouldShowFeedback}
              required
            />
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Button onClick={handleButtonClick}>Validar</Button>
        </div>
      </div>
    );
  }
  

export default Paso2;