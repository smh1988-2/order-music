import React from "react";

import InputGroup from 'react-bootstrap/InputGroup'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function SearchForm({ setSearchTerm }) {

    function handleSearchResults(e) {
        e.preventDefault();
        setSearchTerm((e.target[0].value))
      }


  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>


          <Form onSubmit={e=>handleSearchResults(e)}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search for an album!"
                aria-label="Search for an album!"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2" type="submit">
                Search
              </Button>
            </InputGroup>
            </Form>


          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchForm;
