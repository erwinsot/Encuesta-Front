import React, { useState } from 'react';
import Paso2 from './Paso2';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import VistaPrincipla from './VistaPrincipla';
import Paso3 from './Paso3';

function FormularioPl(props) {
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [paso3, setpaso3] = useState(false);
    
    const [authorizedTreatment, setAuthorizedTreatment] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [validatedFields, setValidatedFields] = useState({
        paso1: false,
        paso2: false,
        // Agrega más campos de validación según tus pasos
    });

    const handleAgreedTermsChange = (event) => {
        setAgreedTerms(event.target.checked);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
      };
    

    const handleAuthorizedTreatmentChange = (event) => {
        setAuthorizedTreatment(event.target.checked);
    };

    const handleSubmit = (event) => {
        //event.preventDefault(); // Evita que el formulario se envíe por defecto
        //const form = event.currentTarget;
        /* if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            
            return;
        }

        setValidated(true); */

       // const isValid = validateFields(); // Reemplaza "validateFields" con tu propia función de validación

        // Si el paso actual no es válido, puedes mostrar un mensaje de error o realizar otras acciones
        /* if (!isValid) {
            console.log('El paso actual no es válido');
            return;
        } */
        
            // Ir al siguiente paso del formulario
            setCurrentStep(currentStep + 1);
        

        

    }

    const validateFields = () => {
        // Implementa tu lógica de validación específica para cada paso
        // Puedes acceder a los valores de los campos del paso actual y realizar las validaciones necesarias

        // Ejemplo de validación para el Paso 1
        if (currentStep === 1) {
            if (!agreedTerms || !authorizedTreatment) {
                // Mostrar mensajes de error o tomar alguna acción
                alert('Debe aceptar los términos y autorizar el tratamiento de datos');
                return false;
            }
            else{
                return true;
            }
            // Verificar si los campos del Paso 1 son válidos
            // Devuelve true si son válidos, o false si hay algún error de validación
            // Aquí debes implementar tu lógica de validación para el Paso 1
            // Cambia esto con tu propia validación
        }

        // Ejemplo de validación para el Paso 2
        if (currentStep === 2) {
            if(paso3===false){
                alert('es neceasario llenar todos los campos');
                return false;
            }
            else{
                return true;
            }
            // Verificar si los campos del Paso 2 son válidos
            // Devuelve true si son válidos, o false si hay algún error de validación
            // Aquí debes implementar tu lógica de validación para el Paso 2
             // Cambia esto con tu propia validación
        }

        // Agrega más validaciones para otros pasos si es necesario

        // Si no se encuentra una validación específica para el paso actual, devuelve true
        return true;
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {currentStep === 1 && (
                <div>
                    <VistaPrincipla
                       /*  agreedTerms={agreedTerms}
                        onAgreedTermsChange={handleAgreedTermsChange}
                        onAuthorizedTreatmentChange={handleAuthorizedTreatmentChange} */
                    onNextStep={handleSubmit}
                    />
                    <button onClick={handleSubmit}>Siguiente</button>
                </div>

            )}

            {currentStep === 2 && (
                <div>
                    <Paso2
                        nextStep={paso3}
                        onNextStep={handleSubmit}
                     />
                    {/* <button onClick={handleSubmit}>Siguiente</button> */}
                </div>
            )}
            {currentStep === 3 && (
                <div>
                    <Paso3 />
                    {/* <button onClick={handleSubmit}>Siguiente</button> */}
                </div>
            )}

            {/* Botón de envío del formulario */}
            {currentStep === 10 && (
                <button type="submit">Enviar</button>
            )}
        </Form>
    );
}

export default FormularioPl;