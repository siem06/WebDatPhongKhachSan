import React from "react";
import { Form, Col } from "react-bootstrap";
import { ErrorMessage } from "formik";
export default function TextArea({
  controlId,
  label,
  type,
  name,
  placeholder,
  onChange,
  isValid,
  touched,
  errors,
  tooltip,
}) {
  return (
    <div>
      <Form.Group
        className="mb-3"
        as={Col}
        md="12"
        controlId={controlId}
        //  className="position-relative"
      >
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          isValid={isValid}
          isInvalid={touched && !!errors}
        />
        {tooltip && (
          <Form.Control.Feedback tooltip>{tooltip}</Form.Control.Feedback>
        )}
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      </Form.Group>
    </div>
  );
}
