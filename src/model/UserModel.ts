export default interface UserModel {
  uid: string;
  email: string | null;
  name: string | null;
  token: string | null;
  provider?: string;
  urlImage: string | null;
}
