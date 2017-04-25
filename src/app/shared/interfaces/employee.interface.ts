export interface IEmployee {
  id: number;
  name: string;
  imgUrl: string;
}

export interface IEmployeeShort {
  id: number;
  role: string;
  name?: string;
  imgUrl: string;
}
