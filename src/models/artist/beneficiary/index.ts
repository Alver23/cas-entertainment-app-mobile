// Models
import { IPerson } from '@models/person';

export interface IBeneficiary extends IPerson {
  id?: number;
  personId?: number;
  percentage: number;
  relationshipId: number;
}
