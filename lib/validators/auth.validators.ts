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
};
