// Models
import { IPerson } from '@models/person';

export interface IEmergencyContact extends IPerson {
  id?: number;
  personId?: number;
  relationshipId: number;
}
