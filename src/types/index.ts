export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
}
