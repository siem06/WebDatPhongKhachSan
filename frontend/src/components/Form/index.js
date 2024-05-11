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
              controlId="slogan1"
              label="Chủ đề 1"
              type="text"
              name="slogan"
              value={values.slogan1}
              onChange={handleChange}
              isValid={touched.slogan1 && !errors.slogan1}
              touched={touched.slogan1}
              errors={errors.slogan1}
              tooltip=""
            />
            <p> ddd {values.slogan1}</p>
            <Input
              controlId="slogan2"
              label="Chủ đề 2"
              type="text"
              name="slogan"
              value={values.slogan2}
              onChange={handleChange}
              isValid={touched.slogan2 && !errors.slogan2}
              touched={touched.slogan2}
              errors={errors.slogan2}
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
