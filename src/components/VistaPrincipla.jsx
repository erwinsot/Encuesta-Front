import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function VistaPrincipla({ onNextStep }) {
    const [authorizedTreatment, setAuthorizedTreatment] = useState(false);
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(true);
        if (!agreedTerms || !authorizedTreatment) {
            // Mostrar mensajes de error o tomar alguna acción
            alert('Debe aceptar los términos y autorizar el tratamiento de datos');
            return false;
        }
        onNextStep(); // Llama a la función de callback para avanzar al siguiente paso
      };

      const handleAgreedTermsChange = (event) => {
        setAgreedTerms(event.target.checked);
    };   

    const handleAuthorizedTreatmentChange = (event) => {
        setAuthorizedTreatment(event.target.checked);
    };
    const isPasswordEmpty = agreedTerms === false || authorizedTreatment ===false;
    const shouldShowFeedback = isButtonClicked && isPasswordEmpty;

    

    return (
        <div>

            <div className="multisteps-form__panel js-active" id="div0" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner  clearfix">
                        <div className="wizard-title text-center">
                            <h3>TÉRMINOS Y CONDICIONES</h3>
                        </div>

                        {/* Página 1 */}
                        <div className="wizard-day-item text-center">
                            <span className="wizard-sub-text">CONDICIONES GENERALES</span>
                            <p>Estimado(a) estudiante</p>
                            <br />
                            <p>
                                Esta encuesta tiene como principal objetivo evaluar sus actuales condiciones en los ámbitos demográfico, de
                                salud, académico, de dinámica personal y social, socioeconómico y de intereses y prácticas deportivas,
                                artísticas y comunitarias; con el propósito de identificar posibles estrategias para mitigar vulnerabilidades
                                o dificultades en su proceso de integración a la vida universitaria. Antes de continuar tenga en cuenta las
                                siguientes consideraciones:
                            </p>
                            <br />
                            <ol>
                                <li>La encuesta tiene una duración de aproximadamente 30 a 35 minutos en ser contestada.</li>
                                <li>Responder la encuesta NO implica de ninguna manera o de forma automática la obtención de cualquier tipo de apoyo o acompañamiento.</li>
                                <li>Con su diligenciamiento del presente formulario, nos autoriza a realizar la verificación de su situación a través de la revisión de bases de datos internas y externas a las cuales tenemos acceso.</li>
                                <li>Solo se estudiará una respuesta a la encuesta por estudiante en un mismo periodo.</li>
                            </ol>
                        </div>

                        {/* Página 2 */}
                        <div className="wizard-day-item text-center">
                            <span className="wizard-sub-text">POLÍTICA DE TRATAMIENTO DE DATOS</span>
                            <p>
                                La Universidad Nacional de Colombia, como responsable del Tratamiento de Datos Personales, informa que los
                                datos de carácter personal recolectados mediante este formulario se encuentran bajo medidas que garantizan la
                                seguridad, confidencialidad e integridad, y su tratamiento se realiza bajo el cumplimiento normativo de la Ley
                                1581 de 2012 y el de Nuestra Política de Tratamiento de Datos Personales.
                            </p>
                            <br />
                            <p>
                                Si usted es menor de edad, o es Representante Legal del menor de edad, en virtud de lo dispuesto en el literal
                                b) del artículo 12 de la Ley 1581 de 2012, es obligación de la Universidad informarle del carácter facultativo
                                de las respuestas a las preguntas que versen sobre datos de niños, niñas y adolescentes. Es así como, de
                                aceptarse el tratamiento de los datos personales del menor de edad, por medio de la presente se autoriza el
                                tratamiento de los datos, específicamente para las finalidades en el marco de las funciones legales de la
                                Universidad, bajo la premisa que será respetado el interés superior de los niños, niñas y adolescentes,
                                asegurando sus derechos fundamentales.
                            </p>
                            <br />
                            <p>
                                Puede ejercer sus derechos como titular de conocer, actualizar, rectificar y revocar las autorizaciones dadas a
                                las finalidades aplicables a través de los canales dispuestos y disponibles en{" "}
                                <a href="https://www.unal.edu.co" style={{ color: "blue" }}>
                                    www.unal.edu.co
                                </a>{" "}
                                o e-mail:{" "}
                                <a href="mailto:protecdatos_na@unal.edu.co" style={{ color: "blue" }}>
                                    protecdatos_na@unal.edu.co
                                </a>
                            </p>
                            <br />

                            <div className="wizard-checkbox-option">

                                <Form.Group className="mb-7">
                                    <Form.Check
                                        required
                                        onChange={handleAgreedTermsChange}
                                        label="Estoy de acuerdo con las condiciones generales estipuladas anteriormente"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                        isInvalid={shouldShowFeedback}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-7" >
                                    <Form.Check
                                        required
                                        isInvalid={shouldShowFeedback}
                                        onChange={handleAuthorizedTreatmentChange}
                                        label="Autorizo de manera voluntaria, previa, explícita, informada e inequívoca a la Universidad Nacional de
                            Colombia para el tratamiento de los datos personales"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button onClick={handleButtonClick}>Validar</Button>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="wizard-v3-progress">
                            <span>1 de 10 </span>
                            <h3>10% completado</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "10%" }}></div>
                            </div>
                        </div>
                    </div>
                    {/* /.inner */}
                    {/* <div className="vector-img-one">
          <img src="assets/img/vb1.png" alt="" />
        </div> */}
                    <div className="actions">
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default VistaPrincipla;
