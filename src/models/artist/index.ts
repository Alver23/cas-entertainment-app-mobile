// Models
import { IPaginate } from '../paginate';
import { IBeneficiary } from './beneficiary';
import { IEmergencyContact } from './emergency-contact';
import { IPassport } from './passport';
import { ISkill } from './skills';
import { IPerson } from '../person';

export interface IArtistItem {
  id: number;
  personId: number;
  active: boolean;
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface IArtist extends IPerson {
  fullNamesFather?: string;
  fullNamesMother?: string;
  nativeLanguage?: number;
  otherLanguage?: number;
  beneficiaries?: IBeneficiary[];
  emergencyContact?: IEmergencyContact;
  passport?: IPassport;
  skills?: ISkill[];
  personId?: number;
  groupIds: number[];
}

export type IArtistList = IPaginate<IArtistItem>;
