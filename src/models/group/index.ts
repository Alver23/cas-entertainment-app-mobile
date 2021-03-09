// Models
import { IPaginate } from '../paginate';

export interface IGroupItem {
  id: number;
  name: string;
  membersNumber: number;
  state: boolean;
}

export type IGroupList = IPaginate<IGroupItem>;
