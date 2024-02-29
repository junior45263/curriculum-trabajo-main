import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Card, useAccordionButton } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";

const initialState = {
  nombre: "",
  apellidos: "",
  correo_electronico: "",
  telefono: "",
  direccion: "",
  codigo_postal: "",
  localidad: "",
  titulo: "",
  fecha_nacimiento: "",
  lugar_nacimiento: "",
  genero: "",
  nacionalidad: "",
  estado_civil: "",
  linkedin: "",
  perfil: "",
  formacion: "",
  formacion1: "",
  formacion2: "",
  formacion3: "",
  formacion4: "",
  formacion5: "",
  institucion: "",
  institucion1: "",
  institucion2: "",
  institucion3: "",
  institucion4: "",
  institucion5: "",
  localidad_inst: "",
  localidad_inst1: "",
  localidad_inst2: "",
  localidad_inst3: "",
  localidad_inst4: "",
  localidad_inst5: "",
  fech_inic_inst: "",
  fech_inic_inst1: "",
  fech_inic_inst2: "",
  fech_inic_inst3: "",
  fech_inic_inst4: "",
  fech_inic_inst5: "",
  fech_fin_inst: "",
  fech_fin_inst1: "",
  fech_fin_inst2: "",
  fech_fin_inst3: "",
  fech_fin_inst4: "",
  fech_fin_inst5: "",
  desc_inst: "",
  desc_inst1: "",
  desc_inst2: "",
  desc_inst3: "",
  desc_inst4: "",
  desc_inst5: "",
  puesto: "",
  puesto1: "",
  puesto2: "",
  puesto3: "",
  puesto4: "",
  puesto5: "",
  empleador: "",
  empleador1: "",
  empleador2: "",
  empleador3: "",
  empleador4: "",
  empleador5: "",
  localidad_exp: "",
  localidad_exp1: "",
  localidad_exp2: "",
  localidad_exp3: "",
  localidad_exp4: "",
  localidad_exp5: "",
  fech_inic_exp: "",
  fech_inic_exp1: "",
  fech_inic_exp2: "",
  fech_inic_exp3: "",
  fech_inic_exp4: "",
  fech_inic_exp5: "",
  fech_fin_exp: "",
  fech_fin_exp1: "",
  fech_fin_exp2: "",
  fech_fin_exp3: "",
  fech_fin_exp4: "",
  fech_fin_exp5: "",
  desc_exp: "",
  desc_exp1: "",
  desc_exp2: "",
  desc_exp3: "",
  desc_exp4: "",
  desc_exp5: "",
  idioma: "",
  idioma1: "",
  idioma2: "",
  idioma3: "",
  idioma4: "",
  idioma5: "",
  nivel_idioma: "",
  nivel_idioma1: "",
  nivel_idioma2: "",
  nivel_idioma3: "",
  nivel_idioma4: "",
  nivel_idioma5: "",
  pasatiempo: "",
  pasatiempo1: "",
  pasatiempo2: "",
  pasatiempo3: "",
  pasatiempo4: "",
  pasatiempo5: "",
  curso: "",
  curso1: "",
  curso2: "",
  curso3: "",
  curso4: "",
  curso5: "",
  periodo: "",
  periodo1: "",
  periodo2: "",
  periodo3: "",
  periodo4: "",
  periodo5: "",
  desc_curso: "",
  desc_curso1: "",
  desc_curso2: "",
  desc_curso3: "",
  desc_curso4: "",
  desc_curso5: "",
  aptitud: "",
  aptitud1: "",
  aptitud2: "",
  aptitud3: "",
  aptitud4: "",
  aptitud5: "",
  nombre_ref: "",
  nombre_ref1: "",
  nombre_ref2: "",
  nombre_ref3: "",
  nombre_ref4: "",
  nombre_ref5: "",
  organizacion_ref: "",
  organizacion_ref1: "",
  organizacion_ref2: "",
  organizacion_ref3: "",
  organizacion_ref4: "",
  organizacion_ref5: "",
  local_ref: "",
  local_ref1: "",
  local_ref2: "",
  local_ref3: "",
  local_ref4: "",
  local_ref5: "",
  telefono_ref: "",
  telefono_ref1: "",
  telefono_ref2: "",
  telefono_ref3: "",
  telefono_ref4: "",
  telefono_ref5: "",
  correo_ref: "",
  correo_ref1: "",
  correo_ref2: "",
  correo_ref3: "",
  correo_ref4: "",
  correo_ref5: "",
  certificado: "",
  certificado1: "",
  certificado2: "",
  certificado3: "",
  certificado4: "",
  certificado5: "",
  periodo_cert: "",
  periodo_cert1: "",
  periodo_cert2: "",
  periodo_cert3: "",
  periodo_cert4: "",
  periodo_cert5: "",
  desc_cert: "",
  desc_cert1: "",
  desc_cert2: "",
  desc_cert3: "",
  desc_cert4: "",
  desc_cert5: "",
  logros: "",
  logros1: "",
  logros2: "",
  logros3: "",
  logros4: "",
  logros5: "",
};

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function CV() {
  const [datos, setDatos] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const {
    nombre,
    apellidos,
    correo_electronico,
    telefono,
    direccion,
    codigo_postal,
    localidad,
    titulo,
    fecha_nacimiento,
    lugar_nacimiento,
    genero,
    nacionalidad,
    estado_civil,
    linkedin,
    perfil,
    formacion,
    formacion1,
    formacion2,
    formacion3,
    formacion4,
    formacion5,
    institucion,
    institucion1,
    institucion2,
    institucion3,
    institucion4,
    institucion5,
    localidad_inst,
    localidad_inst1,
    localidad_inst2,
    localidad_inst3,
    localidad_inst4,
    localidad_inst5,
    fech_inic_inst,
    fech_inic_inst1,
    fech_inic_inst2,
    fech_inic_inst3,
    fech_inic_inst4,
    fech_inic_inst5,
    fech_fin_inst,
    fech_fin_inst1,
    fech_fin_inst2,
    fech_fin_inst3,
    fech_fin_inst4,
    fech_fin_inst5,
    desc_inst,
    desc_inst1,
    desc_inst2,
    desc_inst3,
    desc_inst4,
    desc_inst5,
    puesto,
    puesto1,
    puesto2,
    puesto3,
    puesto4,
    puesto5,
    empleador,
    empleador1,
    empleador2,
    empleador3,
    empleador4,
    empleador5,
    localidad_exp,
    localidad_exp1,
    localidad_exp2,
    localidad_exp3,
    localidad_exp4,
    localidad_exp5,
    fech_inic_exp,
    fech_inic_exp1,
    fech_inic_exp2,
    fech_inic_exp3,
    fech_inic_exp4,
    fech_inic_exp5,
    fech_fin_exp,
    fech_fin_exp1,
    fech_fin_exp2,
    fech_fin_exp3,
    fech_fin_exp4,
    fech_fin_exp5,
    desc_exp,
    desc_exp1,
    desc_exp2,
    desc_exp3,
    desc_exp4,
    desc_exp5,
    idioma,
    idioma1,
    idioma2,
    idioma3,
    idioma4,
    idioma5,
    nivel_idioma,
    nivel_idioma1,
    nivel_idioma2,
    nivel_idioma3,
    nivel_idioma4,
    nivel_idioma5,
    pasatiempo,
    pasatiempo1,
    pasatiempo2,
    pasatiempo3,
    pasatiempo4,
    pasatiempo5,
    curso,
    curso1,
    curso2,
    curso3,
    curso4,
    curso5,
    periodo,
    periodo1,
    periodo2,
    periodo3,
    periodo4,
    periodo5,
    desc_curso,
    desc_curso1,
    desc_curso2,
    desc_curso3,
    desc_curso4,
    desc_curso5,
    aptitud,
    aptitud1,
    aptitud2,
    aptitud3,
    aptitud4,
    aptitud5,
    nombre_ref,
    nombre_ref1,
    nombre_ref2,
    nombre_ref3,
    nombre_ref4,
    nombre_ref5,
    organizacion_ref,
    organizacion_ref1,
    organizacion_ref2,
    organizacion_ref3,
    organizacion_ref4,
    organizacion_ref5,
    local_ref,
    local_ref1,
    local_ref2,
    local_ref3,
    local_ref4,
    local_ref5,
    telefono_ref,
    telefono_ref1,
    telefono_ref2,
    telefono_ref3,
    telefono_ref4,
    telefono_ref5,
    correo_ref,
    correo_ref1,
    correo_ref2,
    correo_ref3,
    correo_ref4,
    correo_ref5,
    certificado,
    certificado1,
    certificado2,
    certificado3,
    certificado4,
    certificado5,
    periodo_cert,
    periodo_cert1,
    periodo_cert2,
    periodo_cert3,
    periodo_cert4,
    periodo_cert5,
    desc_cert,
    desc_cert1,
    desc_cert2,
    desc_cert3,
    desc_cert4,
    desc_cert5,
    logros,
    logros1,
    logros2,
    logros3,
    logros4,
    logros5,
  } = datos;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };
  const handleSubmit = (event) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tu curriculum se a guardado corectamente",
      showConfirmButton: false,
      timer: 5000,
    });
    event.preventDefault();
    addDatos(datos);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = "/"; // Redirigir a la raíz
    }

    setValidated(true);
  };

  const addDatos = async (data) => {
    const response = await axios.post("http://localhost:5000/curriculum", data);
    if (response.status === 200) {
      console.log(response.data);
      window.location.href = "/";
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 class="text-center text-dark"> Curriculum Vitae</h1>
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Datos Personales</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col md="4">
                    <FloatingLabel label="Nombre(s)">
                      <Form.Control
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Apellidos">
                      <Form.Control
                        name="apellidos"
                        type="text"
                        placeholder="Ingresa tus apellidos"
                        value={apellidos}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Correo Electronico">
                      <Form.Control
                        name="correo_electronico"
                        type="text"
                        placeholder=""
                        value={correo_electronico}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Titulo">
                      <Form.Control
                        name="titulo"
                        type="text"
                        placeholder=""
                        value={titulo}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Teléfono">
                      <Form.Control
                        name="telefono"
                        type="text"
                        placeholder=""
                        value={telefono}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Dirección">
                      <Form.Control
                        name="direccion"
                        type="text"
                        placeholder=""
                        value={direccion}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Código Postal">
                      <Form.Control
                        name="codigo_postal"
                        type="text"
                        placeholder=""
                        value={codigo_postal}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Localidad">
                      <Form.Control
                        name="localidad"
                        type="text"
                        placeholder=""
                        value={localidad}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Lugar de Nacimiento">
                      <Form.Control
                        name="lugar_nacimiento"
                        type="text"
                        placeholder=""
                        value={lugar_nacimiento}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Género">
                      <Form.Control
                        name="genero"
                        type="text"
                        placeholder=""
                        value={genero}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Nacionalidad">
                      <Form.Control
                        name="nacionalidad"
                        type="text"
                        placeholder=""
                        value={nacionalidad}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Estado Civil">
                      <Form.Control
                        name="estado_civil"
                        type="text"
                        placeholder=""
                        value={estado_civil}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="LinkedIn">
                      <Form.Control
                        name="linkedin"
                        type="text"
                        placeholder=""
                        value={linkedin}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Fecha de Nacimiento">
                      <Form.Control
                        name="fecha_nacimiento"
                        type="text"
                        placeholder=""
                        value={fecha_nacimiento}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Perfil</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Descripción">
                      <Form.Control
                        name="perfil"
                        type="text"
                        placeholder=""
                        value={perfil}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Formación</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Formación">
                      <Form.Control
                        name="formacion"
                        type="text"
                        placeholder=""
                        value={formacion}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col class="mt-3 mb-3">
                    <FloatingLabel label="Institución">
                      <Form.Control
                        name="institucion"
                        type="text"
                        placeholder=""
                        value={institucion}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Localidad">
                      <Form.Control
                        name="localidad_inst"
                        type="text"
                        placeholder=""
                        value={localidad_inst}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Fecha de Inicio">
                      <Form.Control
                        name="fech_inic_inst"
                        type="text"
                        placeholder=""
                        value={fech_inic_inst}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Fecha de Fin">
                      <Form.Control
                        name="fech_fin_inst"
                        type="text"
                        placeholder=""
                        value={fech_fin_inst}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Descripción">
                      <Form.Control
                        name="desc_inst"
                        type="text"
                        placeholder=""
                        value={desc_inst}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="2" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="12">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="12">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Formación">
                              <Form.Control
                                name="formacion1"
                                type="text"
                                placeholder=""
                                value={formacion1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row>
                          <Col class="mt-3 mb-3">
                            <FloatingLabel label="Institución">
                              <Form.Control
                                name="institucion1"
                                type="text"
                                placeholder=""
                                value={institucion1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Localidad">
                              <Form.Control
                                name="localidad_inst1"
                                type="text"
                                placeholder=""
                                value={localidad_inst1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Fecha de Inicio">
                              <Form.Control
                                name="fech_inic_inst1"
                                type="text"
                                placeholder=""
                                value={fech_inic_inst1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Fecha de Fin">
                              <Form.Control
                                name="fech_fin_inst1"
                                type="text"
                                placeholder=""
                                value={fech_fin_inst1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Descripción">
                              <Form.Control
                                name="desc_inst1"
                                type="text"
                                placeholder=""
                                value={desc_inst1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="3" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="13">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="13">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Formación">
                                      <Form.Control
                                        name="formacion2"
                                        type="text"
                                        placeholder=""
                                        value={formacion2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col class="mt-3 mb-3">
                                    <FloatingLabel label="Institución">
                                      <Form.Control
                                        name="institucion2"
                                        type="text"
                                        placeholder=""
                                        value={institucion2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Localidad">
                                      <Form.Control
                                        name="localidad_inst2"
                                        type="text"
                                        placeholder=""
                                        value={localidad_inst2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Fecha de Inicio">
                                      <Form.Control
                                        name="fech_inic_inst2"
                                        type="text"
                                        placeholder=""
                                        value={fech_inic_inst2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Fecha de Fin">
                                      <Form.Control
                                        name="fech_fin_inst2"
                                        type="text"
                                        placeholder=""
                                        value={fech_fin_inst2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Descripción">
                                      <Form.Control
                                        name="desc_inst2"
                                        type="text"
                                        placeholder=""
                                        value={desc_inst2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="3" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="14">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="14">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Formación">
                                              <Form.Control
                                                name="formacion3"
                                                type="text"
                                                placeholder=""
                                                value={formacion3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col class="mt-3 mb-3">
                                            <FloatingLabel label="Institución">
                                              <Form.Control
                                                name="institucion3"
                                                type="text"
                                                placeholder=""
                                                value={institucion3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Localidad">
                                              <Form.Control
                                                name="localidad_inst3"
                                                type="text"
                                                placeholder=""
                                                value={localidad_inst3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Fecha de Inicio">
                                              <Form.Control
                                                name="fech_inic_inst3"
                                                type="text"
                                                placeholder=""
                                                value={fech_inic_inst3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Fecha de Fin">
                                              <Form.Control
                                                name="fech_fin_inst3"
                                                type="text"
                                                placeholder=""
                                                value={fech_fin_inst3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Descripción">
                                              <Form.Control
                                                name="desc_inst3"
                                                type="text"
                                                placeholder=""
                                                value={desc_inst3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="5"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="15">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="15">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Formación">
                                                      <Form.Control
                                                        name="formacion4"
                                                        type="text"
                                                        placeholder=""
                                                        value={formacion4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row>
                                                  <Col class="mt-3 mb-3">
                                                    <FloatingLabel label="Institución">
                                                      <Form.Control
                                                        name="institucion4"
                                                        type="text"
                                                        placeholder=""
                                                        value={institucion4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Localidad">
                                                      <Form.Control
                                                        name="localidad_inst4"
                                                        type="text"
                                                        placeholder=""
                                                        value={localidad_inst4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Fecha de Inicio">
                                                      <Form.Control
                                                        name="fech_inic_inst4"
                                                        type="text"
                                                        placeholder=""
                                                        value={fech_inic_inst4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Fecha de Fin">
                                                      <Form.Control
                                                        name="fech_fin_inst4"
                                                        type="text"
                                                        placeholder=""
                                                        value={fech_fin_inst4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Descripción">
                                                      <Form.Control
                                                        name="desc_inst4"
                                                        type="text"
                                                        placeholder=""
                                                        value={desc_inst4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="6"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="16">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="16">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Formación">
                                                              <Form.Control
                                                                name="formacion5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  formacion5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row>
                                                          <Col class="mt-3 mb-3">
                                                            <FloatingLabel label="Institución">
                                                              <Form.Control
                                                                name="institucion5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  institucion5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Localidad">
                                                              <Form.Control
                                                                name="localidad_inst5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  localidad_inst5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Fecha de Inicio">
                                                              <Form.Control
                                                                name="fech_inic_inst5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  fech_inic_inst5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Fecha de Fin">
                                                              <Form.Control
                                                                name="fech_fin_inst5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  fech_fin_inst5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Descripción">
                                                              <Form.Control
                                                                name="desc_inst5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  desc_inst5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Experiencia</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Puesto">
                      <Form.Control
                        name="puesto"
                        type="text"
                        placeholder=""
                        value={puesto}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col class="mt-3 mb-3">
                    <FloatingLabel label="Empleador">
                      <Form.Control
                        name="empleador"
                        type="text"
                        placeholder=""
                        value={empleador}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Localidad">
                      <Form.Control
                        name="localidad_exp"
                        type="text"
                        placeholder=""
                        value={localidad_exp}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Fecha de Inicio">
                      <Form.Control
                        name="fech_inic_exp"
                        type="text"
                        placeholder=""
                        value={fech_inic_exp}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Fecha de Fin">
                      <Form.Control
                        name="fech_fin_exp"
                        type="text"
                        placeholder=""
                        value={fech_fin_exp}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Descripción">
                      <Form.Control
                        name="desc_exp"
                        type="text"
                        placeholder=""
                        value={desc_exp}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="11" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="21">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="21">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Puesto">
                              <Form.Control
                                name="puesto1"
                                type="text"
                                placeholder=""
                                value={puesto1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col class="mt-3 mb-3">
                            <FloatingLabel label="Empleador">
                              <Form.Control
                                name="empleador1"
                                type="text"
                                placeholder=""
                                value={empleador1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Localidad">
                              <Form.Control
                                name="localidad_exp1"
                                type="text"
                                placeholder=""
                                value={localidad_exp1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Fecha de Inicio">
                              <Form.Control
                                name="fech_inic_exp1"
                                type="text"
                                placeholder=""
                                value={fech_inic_exp1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Fecha de Fin">
                              <Form.Control
                                name="fech_fin_exp1"
                                type="text"
                                placeholder=""
                                value={fech_fin_exp1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Descripción">
                              <Form.Control
                                name="desc_exp1"
                                type="text"
                                placeholder=""
                                value={desc_exp1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="12" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="22">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="22">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Puesto">
                                      <Form.Control
                                        name="puesto2"
                                        type="text"
                                        placeholder=""
                                        value={puesto2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col class="mt-3 mb-3">
                                    <FloatingLabel label="Empleador">
                                      <Form.Control
                                        name="empleador2"
                                        type="text"
                                        placeholder=""
                                        value={empleador2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Localidad">
                                      <Form.Control
                                        name="localidad_exp2"
                                        type="text"
                                        placeholder=""
                                        value={localidad_exp2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Fecha de Inicio">
                                      <Form.Control
                                        name="fech_inic_exp2"
                                        type="text"
                                        placeholder=""
                                        value={fech_inic_exp2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Fecha de Fin">
                                      <Form.Control
                                        name="fech_fin_exp2"
                                        type="text"
                                        placeholder=""
                                        value={fech_fin_exp2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Descripción">
                                      <Form.Control
                                        name="desc_exp2"
                                        type="text"
                                        placeholder=""
                                        value={desc_exp2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="13" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="23">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="23">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Puesto">
                                              <Form.Control
                                                name="puesto3"
                                                type="text"
                                                placeholder=""
                                                value={puesto3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col class="mt-3 mb-3">
                                            <FloatingLabel label="Empleador">
                                              <Form.Control
                                                name="empleador3"
                                                type="text"
                                                placeholder=""
                                                value={empleador3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Localidad">
                                              <Form.Control
                                                name="localidad_exp3"
                                                type="text"
                                                placeholder=""
                                                value={localidad_exp3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Fecha de Inicio">
                                              <Form.Control
                                                name="fech_inic_exp3"
                                                type="text"
                                                placeholder=""
                                                value={fech_inic_exp3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Fecha de Fin">
                                              <Form.Control
                                                name="fech_fin_exp3"
                                                type="text"
                                                placeholder=""
                                                value={fech_fin_exp3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Descripción">
                                              <Form.Control
                                                name="desc_exp3"
                                                type="text"
                                                placeholder=""
                                                value={desc_exp3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="14"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="24">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="24">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Puesto">
                                                      <Form.Control
                                                        name="puesto4"
                                                        type="text"
                                                        placeholder=""
                                                        value={puesto4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col class="mt-3 mb-3">
                                                    <FloatingLabel label="Empleador">
                                                      <Form.Control
                                                        name="empleador4"
                                                        type="text"
                                                        placeholder=""
                                                        value={empleador4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Localidad">
                                                      <Form.Control
                                                        name="localidad_exp4"
                                                        type="text"
                                                        placeholder=""
                                                        value={localidad_exp4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Fecha de Inicio">
                                                      <Form.Control
                                                        name="fech_inic_exp4"
                                                        type="text"
                                                        placeholder=""
                                                        value={fech_inic_exp4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Fecha de Fin">
                                                      <Form.Control
                                                        name="fech_fin_exp4"
                                                        type="text"
                                                        placeholder=""
                                                        value={fech_fin_exp4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Descripción">
                                                      <Form.Control
                                                        name="desc_exp4"
                                                        type="text"
                                                        placeholder=""
                                                        value={desc_exp4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="15"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="25">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="25">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Puesto">
                                                              <Form.Control
                                                                name="puesto5"
                                                                type="text"
                                                                placeholder=""
                                                                value={puesto5}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col class="mt-3 mb-3">
                                                            <FloatingLabel label="Empleador">
                                                              <Form.Control
                                                                name="empleador5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  empleador5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Localidad">
                                                              <Form.Control
                                                                name="localidad_exp5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  localidad_exp5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Fecha de Inicio">
                                                              <Form.Control
                                                                name="fech_inic_exp5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  fech_inic_exp5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Fecha de Fin">
                                                              <Form.Control
                                                                name="fech_fin_exp5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  fech_fin_exp5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Descripción">
                                                              <Form.Control
                                                                name="desc_exp5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  desc_exp5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Idiomas</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Idioma">
                      <Form.Control
                        name="idioma"
                        type="text"
                        placeholder=""
                        value={idioma}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Nivel Idioma">
                      <Form.Control
                        name="nivel_idioma"
                        type="text"
                        placeholder=""
                        value={nivel_idioma}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Certificado Idioma">
                      <Form.Control
                        name="certificado_idioma"
                        type="text"
                        placeholder=""
                        //value={}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="16" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="26">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="26">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Idioma">
                              <Form.Control
                                name="idioma1"
                                type="text"
                                placeholder=""
                                value={idioma1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Nivel Idioma">
                              <Form.Control
                                name="nivel_idioma1"
                                type="text"
                                placeholder=""
                                value={nivel_idioma1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Certificado Idioma">
                              <Form.Control
                                name="certificado_idioma"
                                type="text"
                                placeholder=""
                                //value={}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="17" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="27">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="27">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Idioma">
                                      <Form.Control
                                        name="idioma2"
                                        type="text"
                                        placeholder=""
                                        value={idioma2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Nivel Idioma">
                                      <Form.Control
                                        name="nivel_idioma2"
                                        type="text"
                                        placeholder=""
                                        value={nivel_idioma2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Certificado Idioma">
                                      <Form.Control
                                        name="certificado_idioma"
                                        type="text"
                                        placeholder=""
                                        //value={}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="18" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="28">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="28">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Idioma">
                                              <Form.Control
                                                name="idioma3"
                                                type="text"
                                                placeholder=""
                                                value={idioma3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Nivel Idioma">
                                              <Form.Control
                                                name="nivel_idioma3"
                                                type="text"
                                                placeholder=""
                                                value={nivel_idioma3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Certificado Idioma">
                                              <Form.Control
                                                name="certificado_idioma3"
                                                type="text"
                                                placeholder=""
                                                //value={}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="19"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="29">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="29">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Idioma">
                                                      <Form.Control
                                                        name="idioma4"
                                                        type="text"
                                                        placeholder=""
                                                        value={idioma4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Nivel Idioma">
                                                      <Form.Control
                                                        name="nivel_idioma4"
                                                        type="text"
                                                        placeholder=""
                                                        value={nivel_idioma4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Certificado Idioma">
                                                      <Form.Control
                                                        name="certificado_idioma4"
                                                        type="text"
                                                        placeholder=""
                                                        //value={}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="20"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="30">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="30">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Idioma">
                                                              <Form.Control
                                                                name="idioma5"
                                                                type="text"
                                                                placeholder=""
                                                                value={idioma5}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Nivel Idioma">
                                                              <Form.Control
                                                                name="nivel_idioma5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  nivel_idioma5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Certificado Idioma">
                                                              <Form.Control
                                                                name="certificado_idioma5"
                                                                type="text"
                                                                placeholder=""
                                                                //value={}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Pasatiempos e intereses</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Pasatiempos o Interés">
                      <Form.Control
                        name="pasatiempo"
                        type="text"
                        placeholder=""
                        value={pasatiempo}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="21" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="31">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="31">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Pasatiempos o Interés">
                              <Form.Control
                                name="pasatiempo1"
                                type="text"
                                placeholder=""
                                value={pasatiempo1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="22" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="32">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="32">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Pasatiempos o Interés">
                                      <Form.Control
                                        name="pasatiempo2"
                                        type="text"
                                        placeholder=""
                                        value={pasatiempo2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="23" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="33">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="33">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Pasatiempos o Interés">
                                              <Form.Control
                                                name="pasatiempo3"
                                                type="text"
                                                placeholder=""
                                                value={pasatiempo3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="24"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="34">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="34">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Pasatiempos o Interés">
                                                      <Form.Control
                                                        name="pasatiempo4"
                                                        type="text"
                                                        placeholder=""
                                                        value={pasatiempo4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="25"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="35">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="35">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Pasatiempos o Interés">
                                                              <Form.Control
                                                                name="pasatiempo5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  pasatiempo5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Cursos</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Curso">
                      <Form.Control
                        name="curso"
                        type="text"
                        placeholder=""
                        value={curso}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Periodo">
                      <Form.Control
                        name="periodo"
                        type="text"
                        placeholder=""
                        value={periodo}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Descripción">
                      <Form.Control
                        name="desc_curso"
                        type="text"
                        placeholder=""
                        value={desc_curso}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="26" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="36">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="36">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Curso">
                              <Form.Control
                                name="curso1"
                                type="text"
                                placeholder=""
                                value={curso1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Periodo">
                              <Form.Control
                                name="periodo1"
                                type="text"
                                placeholder=""
                                value={periodo1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Descripción">
                              <Form.Control
                                name="desc_curso1"
                                type="text"
                                placeholder=""
                                value={desc_curso1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="27" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="37">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="37">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Curso">
                                      <Form.Control
                                        name="curso2"
                                        type="text"
                                        placeholder=""
                                        value={curso2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Periodo">
                                      <Form.Control
                                        name="periodo2"
                                        type="text"
                                        placeholder=""
                                        value={periodo2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Descripción">
                                      <Form.Control
                                        name="desc_curso2"
                                        type="text"
                                        placeholder=""
                                        value={desc_curso2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="28" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="38">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="38">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Curso">
                                              <Form.Control
                                                name="curso3"
                                                type="text"
                                                placeholder=""
                                                value={curso3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Periodo">
                                              <Form.Control
                                                name="periodo3"
                                                type="text"
                                                placeholder=""
                                                value={periodo3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Descripción">
                                              <Form.Control
                                                name="desc_curso3"
                                                type="text"
                                                placeholder=""
                                                value={desc_curso3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="29"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="39">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="39">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Curso">
                                                      <Form.Control
                                                        name="curso4"
                                                        type="text"
                                                        placeholder=""
                                                        value={curso4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Periodo">
                                                      <Form.Control
                                                        name="periodo4"
                                                        type="text"
                                                        placeholder=""
                                                        value={periodo4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Descripción">
                                                      <Form.Control
                                                        name="desc_curso4"
                                                        type="text"
                                                        placeholder=""
                                                        value={desc_curso4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="30"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="40">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="40">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Curso">
                                                              <Form.Control
                                                                name="curso5"
                                                                type="text"
                                                                placeholder=""
                                                                value={curso5}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Periodo">
                                                              <Form.Control
                                                                name="periodo5"
                                                                type="text"
                                                                placeholder=""
                                                                value={periodo5}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Descripción">
                                                              <Form.Control
                                                                name="desc_curso5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  desc_curso5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Aptitudes</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Aptitud">
                      <Form.Control
                        name="aptitud"
                        type="text"
                        placeholder=""
                        value={aptitud}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="31" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="41">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="41">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Aptitud">
                              <Form.Control
                                name="aptitud1"
                                type="text"
                                placeholder=""
                                value={aptitud1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="32" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="42">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="42">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Aptitud">
                                      <Form.Control
                                        name="aptitud2"
                                        type="text"
                                        placeholder=""
                                        value={aptitud2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="33" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="43">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="43">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Aptitud">
                                              <Form.Control
                                                name="aptitud3"
                                                type="text"
                                                placeholder=""
                                                value={aptitud3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="34"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="44">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="44">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Aptitud">
                                                      <Form.Control
                                                        name="aptitud4"
                                                        type="text"
                                                        placeholder=""
                                                        value={aptitud4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="35"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="45">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="45">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Aptitud">
                                                              <Form.Control
                                                                name="aptitud5"
                                                                type="text"
                                                                placeholder=""
                                                                value={aptitud5}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Referencias</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Nombre">
                      <Form.Control
                        name="nombre_ref"
                        type="text"
                        placeholder=""
                        value={nombre_ref}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Organización">
                      <Form.Control
                        name="organizacion_ref"
                        type="text"
                        placeholder=""
                        value={organizacion_ref}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Localidad">
                      <Form.Control
                        name="local_ref"
                        type="text"
                        placeholder=""
                        value={local_ref}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Teléfono">
                      <Form.Control
                        name="telefono_ref"
                        type="text"
                        placeholder=""
                        value={telefono_ref}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel label="Correo Electrónico">
                      <Form.Control
                        name="correo_ref"
                        type="text"
                        placeholder=""
                        value={correo_ref}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="36" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="46">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="46">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Nombre">
                              <Form.Control
                                name="nombre_ref1"
                                type="text"
                                placeholder=""
                                value={nombre_ref1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Organización">
                              <Form.Control
                                name="organizacion_ref1"
                                type="text"
                                placeholder=""
                                value={organizacion_ref1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Localidad">
                              <Form.Control
                                name="local_ref1"
                                type="text"
                                placeholder=""
                                value={local_ref1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Teléfono">
                              <Form.Control
                                name="telefono_ref1"
                                type="text"
                                placeholder=""
                                value={telefono_ref1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col>
                            <FloatingLabel label="Correo Electrónico">
                              <Form.Control
                                name="correo_ref1"
                                type="text"
                                placeholder=""
                                value={correo_ref1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="37" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="47">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="47">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Nombre">
                                      <Form.Control
                                        name="nombre_ref2"
                                        type="text"
                                        placeholder=""
                                        value={nombre_ref2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Organización">
                                      <Form.Control
                                        name="organizacion_ref2"
                                        type="text"
                                        placeholder=""
                                        value={organizacion_ref2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Localidad">
                                      <Form.Control
                                        name="local_ref2"
                                        type="text"
                                        placeholder=""
                                        value={local_ref2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Teléfono">
                                      <Form.Control
                                        name="telefono_ref2"
                                        type="text"
                                        placeholder=""
                                        value={telefono_ref2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                  <Col>
                                    <FloatingLabel label="Correo Electrónico">
                                      <Form.Control
                                        name="correo_ref2"
                                        type="text"
                                        placeholder=""
                                        value={correo_ref2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="38" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="48">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="48">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Nombre">
                                              <Form.Control
                                                name="nombre_ref3"
                                                type="text"
                                                placeholder=""
                                                value={nombre_ref3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Organización">
                                              <Form.Control
                                                name="organizacion_ref3"
                                                type="text"
                                                placeholder=""
                                                value={organizacion_ref3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Localidad">
                                              <Form.Control
                                                name="local_ref3"
                                                type="text"
                                                placeholder=""
                                                value={local_ref3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Teléfono">
                                              <Form.Control
                                                name="telefono_ref3"
                                                type="text"
                                                placeholder=""
                                                value={telefono_ref3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                          <Col>
                                            <FloatingLabel label="Correo Electrónico">
                                              <Form.Control
                                                name="correo_ref3"
                                                type="text"
                                                placeholder=""
                                                value={correo_ref3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="39"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="49">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="49">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Nombre">
                                                      <Form.Control
                                                        name="nombre_ref4"
                                                        type="text"
                                                        placeholder=""
                                                        value={nombre_ref4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Organización">
                                                      <Form.Control
                                                        name="organizacion_ref4"
                                                        type="text"
                                                        placeholder=""
                                                        value={
                                                          organizacion_ref4
                                                        }
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Localidad">
                                                      <Form.Control
                                                        name="local_ref4"
                                                        type="text"
                                                        placeholder=""
                                                        value={local_ref4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Teléfono">
                                                      <Form.Control
                                                        name="telefono_ref4"
                                                        type="text"
                                                        placeholder=""
                                                        value={telefono_ref4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                  <Col>
                                                    <FloatingLabel label="Correo Electrónico">
                                                      <Form.Control
                                                        name="correo_ref4"
                                                        type="text"
                                                        placeholder=""
                                                        value={correo_ref4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="40"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="50">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="50">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Nombre">
                                                              <Form.Control
                                                                name="nombre_ref5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  nombre_ref5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Organización">
                                                              <Form.Control
                                                                name="organizacion_ref5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  organizacion_ref5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Localidad">
                                                              <Form.Control
                                                                name="local_ref5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  local_ref5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Teléfono">
                                                              <Form.Control
                                                                name="telefono_ref5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  telefono_ref5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                          <Col>
                                                            <FloatingLabel label="Correo Electrónico">
                                                              <Form.Control
                                                                name="correo_ref5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  correo_ref5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Certificados</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Certificado">
                      <Form.Control
                        name="certificado"
                        type="text"
                        placeholder=""
                        value={certificado}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Periodo">
                      <Form.Control
                        name="periodo_cert"
                        type="text"
                        placeholder=""
                        value={periodo_cert}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Descripción">
                      <Form.Control
                        name="desc_cert"
                        type="text"
                        placeholder=""
                        value={desc_cert}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="41" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="51">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="51">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Certificado">
                              <Form.Control
                                name="certificado1"
                                type="text"
                                placeholder=""
                                value={certificado1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Periodo">
                              <Form.Control
                                name="periodo_cert1"
                                type="text"
                                placeholder=""
                                value={periodo_cert1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Descripción">
                              <Form.Control
                                name="desc_cert1"
                                type="text"
                                placeholder=""
                                value={desc_cert1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="42" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="52">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="52">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Certificado">
                                      <Form.Control
                                        name="certificado2"
                                        type="text"
                                        placeholder=""
                                        value={certificado2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Periodo">
                                      <Form.Control
                                        name="periodo_cert2"
                                        type="text"
                                        placeholder=""
                                        value={periodo_cert2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Descripción">
                                      <Form.Control
                                        name="desc_cert2"
                                        type="text"
                                        placeholder=""
                                        value={desc_cert2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="43" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="53">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="53">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Certificado">
                                              <Form.Control
                                                name="certificado3"
                                                type="text"
                                                placeholder=""
                                                value={certificado3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Periodo">
                                              <Form.Control
                                                name="periodo_cert3"
                                                type="text"
                                                placeholder=""
                                                value={periodo_cert3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Descripción">
                                              <Form.Control
                                                name="desc_cert3"
                                                type="text"
                                                placeholder=""
                                                value={desc_cert3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="44"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="54">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="54">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Certificado">
                                                      <Form.Control
                                                        name="certificado4"
                                                        type="text"
                                                        placeholder=""
                                                        value={certificado4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Periodo">
                                                      <Form.Control
                                                        name="periodo_cert4"
                                                        type="text"
                                                        placeholder=""
                                                        value={periodo_cert4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Descripción">
                                                      <Form.Control
                                                        name="desc_cert4"
                                                        type="text"
                                                        placeholder=""
                                                        value={desc_cert4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="45"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="55">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="55">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Certificado">
                                                              <Form.Control
                                                                name="certificado5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  certificado5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Periodo">
                                                              <Form.Control
                                                                name="periodo_cert5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  periodo_cert5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Descripción">
                                                              <Form.Control
                                                                name="desc_cert5"
                                                                type="text"
                                                                placeholder=""
                                                                value={
                                                                  desc_cert5
                                                                }
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>Logros</Accordion.Header>
              <Accordion.Body>
                <Row class="mt-3 mb-3">
                  <Col>
                    <FloatingLabel label="Logros">
                      <Form.Control
                        name="logros"
                        type="text"
                        placeholder=""
                        value={logros}
                        onChange={handleInputChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="46" class="mt-3">
                  <Card>
                    <Card.Header>
                      <CustomToggle eventKey="56">Agregar más</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="56">
                      <Card.Body>
                        <Row class="mt-3 mb-3">
                          <Col>
                            <FloatingLabel label="Logros">
                              <Form.Control
                                name="logros1"
                                type="text"
                                placeholder=""
                                value={logros1}
                                onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Accordion defaultActiveKey="47" class="mt-3">
                          <Card>
                            <Card.Header>
                              <CustomToggle eventKey="57">
                                Agregar más
                              </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="57">
                              <Card.Body>
                                <Row class="mt-3 mb-3">
                                  <Col>
                                    <FloatingLabel label="Logros">
                                      <Form.Control
                                        name="logros2"
                                        type="text"
                                        placeholder=""
                                        value={logros2}
                                        onChange={handleInputChange}
                                      />
                                    </FloatingLabel>
                                  </Col>
                                </Row>
                                <Accordion defaultActiveKey="48" class="mt-3">
                                  <Card>
                                    <Card.Header>
                                      <CustomToggle eventKey="58">
                                        Agregar más
                                      </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="58">
                                      <Card.Body>
                                        <Row class="mt-3 mb-3">
                                          <Col>
                                            <FloatingLabel label="Logros">
                                              <Form.Control
                                                name="logros3"
                                                type="text"
                                                placeholder=""
                                                value={logros3}
                                                onChange={handleInputChange}
                                              />
                                            </FloatingLabel>
                                          </Col>
                                        </Row>
                                        <Accordion
                                          defaultActiveKey="49"
                                          class="mt-3"
                                        >
                                          <Card>
                                            <Card.Header>
                                              <CustomToggle eventKey="59">
                                                Agregar más
                                              </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="59">
                                              <Card.Body>
                                                <Row class="mt-3 mb-3">
                                                  <Col>
                                                    <FloatingLabel label="Logros">
                                                      <Form.Control
                                                        name="logros4"
                                                        type="text"
                                                        placeholder=""
                                                        value={logros4}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                      />
                                                    </FloatingLabel>
                                                  </Col>
                                                </Row>
                                                <Accordion
                                                  defaultActiveKey="50"
                                                  class="mt-3"
                                                >
                                                  <Card>
                                                    <Card.Header>
                                                      <CustomToggle eventKey="60">
                                                        Agregar más
                                                      </CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="60">
                                                      <Card.Body>
                                                        <Row class="mt-3 mb-3">
                                                          <Col>
                                                            <FloatingLabel label="Logros">
                                                              <Form.Control
                                                                name="logros5"
                                                                type="text"
                                                                placeholder=""
                                                                value={logros5}
                                                                onChange={
                                                                  handleInputChange
                                                                }
                                                              />
                                                            </FloatingLabel>
                                                          </Col>
                                                        </Row>
                                                      </Card.Body>
                                                    </Accordion.Collapse>
                                                  </Card>
                                                </Accordion>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary">
                Guardar
              </Button>
            </Col>

            <Col class="mb-3">
              <Button className="btn btn-danger">Cancelar</Button>
            </Col>
          </Row>
        </Form>
        <ToastContainer />
      </Container>
    </>
  );
}

export default CV;
