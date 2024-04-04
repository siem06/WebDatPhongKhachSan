import React from "react";
import { Formik, Form } from "formik";
import { Button, Row } from "react-bootstrap";
import Input from "./Input";
import TextArea from "./TextArea";
import UploadImg from "./UploadImg";

function FormInformation({ initialValues, validationSchema, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Input
              controlId="slogan"
              label="Chủ đề"
              type="text"
              name="slogan"
              value={values.slogan}
              onChange={handleChange}
              isValid={touched.slogan && !errors.slogan}
              touched={touched.slogan}
              errors={errors.slogan}
              tooltip=""
            />

            <TextArea
              controlId="content"
              label="Nội dung"
              name="content"
              placeholder={values.content}
              onChange={handleChange}
              isValid={touched.content && !errors.content}
              touched={touched.content}
              errors={errors.content}
              tooltip="Looks good!"
            />
            <UploadImg title="Hình ảnh" />
          </Row>

          <Button className="btnSave" type="submit">
            Lưu
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormInformation;
