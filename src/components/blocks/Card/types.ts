import { User, Shot } from 'store/userData/types';

export interface CardTypes {
  user: User | null;
  shot: Shot | null;
  isFooterExist?: boolean;
  styles?: string;
}
