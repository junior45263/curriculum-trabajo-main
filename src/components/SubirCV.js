import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from "axios";

const initialState = {
  nombre: "",
  apellido_paterno: "",
  apellido_materno: "",
  direccion: "",
  telefono: "",
  correo_electronico: "",
  preparacion_academica: "",
  linkedin: "",
  github: "",
  experiencia_profesional: "",
  idiomas: "",
  habilidades: "",
  objetivo: "",
};

function SubirCV() {
  const [datos, setDatos] = useState(initialState);
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    direccion,
    telefono,
    correo_electronico,
    preparacion_academica,
    linkedin,
    github,
    experiencia_profesional,
    idiomas,
    habilidades,
    objetivo,
  } = datos;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDatos(datos);
  };

  const addDatos = async (data) => {
    const response = await axios.post("http://localhost:5000/curriculum", data);
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 class="text-center text-dark">Curriculum Vitae</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="fs-3 text-center text-danger">Datos personales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre(s)">
                <Form.Control
                  name="nombre"
                  type="text"
                  placeholder="Ingresa nombre"
                  value={nombre}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Apellido Paterno">
                <Form.Control
                  name="apellido_paterno"
                  type="text"
                  placeholder="Ingresa Apellido paterno"
                  value={apellido_paterno}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Apellido Materno">
                <Form.Control
                  name="apellido_materno"
                  type="text"
                  placeholder="Ingresa Apellido materno"
                  value={apellido_materno}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Dirección">
                <Form.Control
                  name="direccion"
                  type="text"
                  placeholder="Ingresa Dirección"
                  value={direccion}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Teléfono">
                {" "}
                <Form.Control
                  name="telefono"
                  type="text"
                  placeholder="Ingresa Telefono (618)1232323"
                  value={telefono}
                  onChange={handleInputChange}
                  pattern="[(][0-9]{3}[)][0-9]{7}"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Correo Electrónico">
                <Form.Control
                  name="correo_electronico"
                  type="email"
                  placeholder="Ingresa Correo electronico"
                  value={correo_electronico}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Preparación Académica">
                <Form.Control
                  name="preparacion_academica"
                  type="text"
                  placeholder="Ingresa Preparación Académica"
                  value={preparacion_academica}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Linkedin">
                <Form.Control
                  name="linkedin"
                  type="text"
                  placeholder="Ingresa Linkedin"
                  value={linkedin}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Github">
                <Form.Control
                  name="github"
                  type="text"
                  placeholder="Ingresa Github"
                  value={github}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Experiencia Profesional">
                <Form.Control
                  name="experiencia_profesional"
                  type="text"
                  placeholder="Ingresa Experiencia profesional"
                  value={experiencia_profesional}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Idiomas">
                <Form.Control
                  name="idiomas"
                  type="text"
                  placeholder="Ingresa Idiomas"
                  value={idiomas}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Habilidades">
                <Form.Control
                  name="habilidades"
                  type="text"
                  placeholder="Ingresa Habilidades"
                  value={habilidades}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Objetivo">
                <Form.Control
                  name="objetivo"
                  type="text"
                  placeholder="Ingresa Objetivo"
                  value={objetivo}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary">
                Guardar
              </Button>
            </Col>

            <Col>
              <Button className="btn btn-danger">Cancelar</Button>
            </Col>
          </Row>

          {/* <Row className='mt-3 mb-3'>

                                               <Col></Col>

                                               <Col></Col>

                               </Row> */}
        </Form>
      </Container>
    </>
  );
}

export default SubirCV;
