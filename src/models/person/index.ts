export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: Date;
  address?: string;
  city?: string;
  cellPhone?: string;
  gender?: number;
  documentType?: number;
  documentNumber?: number;
  height?: number;
  countryId: number;
}
