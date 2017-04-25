import { IEmployeeShort } from './employee.interface';
import { IActivityShort } from './activity.interface';

export interface IAssignment {
  id: number;
  activity: IActivityShort;
  employee: IEmployeeShort;
  startDate: string;
  endDate: string;
  weight: number;
  status: string;
}
