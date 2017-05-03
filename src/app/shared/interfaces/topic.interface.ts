export interface ITopic {
  id?: number;
  name: string;
  recommended: boolean;
  relevant: boolean;
  sourceUrl?: string;
  imageUrl?: string;
  parentId?: number;
}
