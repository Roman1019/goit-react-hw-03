import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").max(50).required("Required"),
  number: Yup.string().min(3, "Too short").max(50).required("Required"),
});

export default function ContactForm({ addContact }) {
  const handleSubmit = (value, actions) => {
    console.log(value);
    actions.resetForm();
    addContact({
      id: nanoid(),
      name: value.name,
      number: value.number,
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage component="span" name="name" />
        </div>
        <div>
          <label htmlFor="">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage component="span" name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
