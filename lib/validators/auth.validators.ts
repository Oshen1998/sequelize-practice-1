export const RegistrationSchema = {
  type: "object",
  required: ["fullName", "email", "nic", "password"],
  properties: {
    fullName: { type: "string" },
    email: { type: "string" },
    nic: { type: "string" },
    password: { type: "string" },
  },
  additionalProperties: false,
  errorMessage: {
    type: "should be an object",
    required: {
        fullName: 'Full name is required!',
        email: 'Email is required!"',
        nic: 'NIC is required!',
        password: 'Password is required!',
    },
  },
};
