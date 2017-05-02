export interface IUser {
  id?: number;
  name: string;
  surname: string;
  age: number;
  avatarUrl?: string;
  languages?: ILang[]
}

interface ILang {
  level: string;
  rateApprentice: number;
  rateMaster: number;
  language: any;
}


export interface IUserShort {
  id?: number;
  name: string;
  surname: string;
  avatarUrl?: string;
}
