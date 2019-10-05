export interface User {
  username: string;
  password: string;
  roles: string[];
  status?: string;
  showPasssword? : boolean;
}
