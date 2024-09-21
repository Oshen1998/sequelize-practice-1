export interface IRegistrationRequest {
  fullName: string;
  email: string;
  nic: string;
  password: string;
}
export interface IRegistrationResponse {
  id: string;
  fullName: string;
  email: string;
  nic: string;
  password: string;
}
