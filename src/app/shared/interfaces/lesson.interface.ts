export interface ILesson {
  id?: number;
  languageId: number;
  startDateTime: string;
  duration: number;
  userApprenticeId: number;
  userMasterId: number;
}
