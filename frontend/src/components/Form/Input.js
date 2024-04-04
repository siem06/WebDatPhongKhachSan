import React from "react";
import { Form, Col } from "react-bootstrap";
import { ErrorMessage } from "formik";

export default function Input({
  controlId,
  label,
  type,
  name,
  value,
  onChange,
  isValid,
  touched,
  errors,
  tooltip,
}) {
  return (
    <Form.Group
      as={Col}
      md="12"
      controlId={controlId}
      className="position-relative"
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isValid={isValid}
        isInvalid={touched && !!errors}
      />
      {tooltip && (
        <Form.Control.Feedback tooltip>{tooltip}</Form.Control.Feedback>
      )}
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
    </Form.Group>
  );
}
