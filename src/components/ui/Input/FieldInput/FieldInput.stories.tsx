import { useState } from "react";
import { FieldInput } from "./FieldInput";

export default {
  title: "Components/UI/FieldInput",
  component: FieldInput,
};

export const Text = () => (
  <div className="p-6 max-w-sm">
    <FieldInput label="First name" placeholder="Ann" type="text" />
  </div>
);

export const Email = () => (
  <div className="p-6 max-w-sm">
    <FieldInput label="Email" placeholder="example@email.com" type="email" />
  </div>
);

export const Phone = () => (
  <div className="p-6 max-w-sm">
    <FieldInput label="Phone number" placeholder="+62 812 3456 7890" type="phone" />
  </div>
);

export const Password = () => (
  <div className="p-6 max-w-sm">
    <FieldInput label="Password" placeholder="••••••••" type="password" />
  </div>
);

export const Required = () => (
  <div className="p-6 max-w-sm flex flex-col gap-4">
    <FieldInput label="First name" type="text" required placeholder="Ann" />
    <FieldInput label="Email" type="email" required placeholder="example@email.com" />
    <FieldInput label="Phone number" type="phone" required placeholder="+62 812 3456 7890" />
  </div>
);

export const WithExternalError = () => (
  <div className="p-6 max-w-sm flex flex-col gap-4">
    <FieldInput
      label="First name"
      type="text"
      value=""
      error="First name is required"
      onChange={() => {}}
    />
    <FieldInput
      label="Email"
      type="email"
      value="invalidemail"
      error="Email already registered"
      onChange={() => {}}
    />
  </div>
);

export const WithInlineValidation = () => {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });

  return (
    <div className="p-6 max-w-sm flex flex-col gap-4">
      <FieldInput
        label="First name"
        type="text"
        required
        placeholder="Ann"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <FieldInput
        label="Email"
        type="email"
        required
        placeholder="example@email.com"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <FieldInput
        label="Phone number"
        type="phone"
        required
        placeholder="+62 812 3456 7890"
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
      />
    </div>
  );
};
