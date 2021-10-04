import { Form, Button } from "react-bootstrap";
const AddTestimonial = (props) => {
  return (
    <>
      <Form
        className="m-1"
        style={{ width: "50%" }}
        onSubmit={(event) => props.handleSubmitTestimonial(event)}
      >
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter first name"
            onChange={(event) => props.handleInputVals(event)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter last name"
            onChange={(event) => props.handleInputVals(event)}
            required
          />
        </Form.Group>
        <Form.Group  controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(event) => props.handleInputVals(event)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Testimonial</Form.Label>
          <Form.Control
            as="textarea"
            name="testimonial"
            placeholder="Testimonial"
            required
            onChange={(event) => props.handleInputVals(event)}
            required
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};
export default AddTestimonial;
