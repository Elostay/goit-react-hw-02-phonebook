import { nanoid } from 'nanoid';
import { Form, Input, Button, Label } from '../ContactForm/ContactForm.styled';

const ContactForm = ({ sumbit }) => {
  const nameId = nanoid();
  const numberId = nanoid();
  return (
    <Form onSubmit={sumbit}>
      <Label htmlFor={nameId}>Name</Label>
      <Input type="text" name="name" id={nameId} required />

      <Label htmlFor={numberId}>Number</Label>
      <Input type="tel" name="number" id={numberId} required />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
