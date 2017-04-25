export interface IActivity {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  weight: number;
  type: string;
}

export interface IActivityShort {
  id: number;
  name: string;
  type: string;
}
