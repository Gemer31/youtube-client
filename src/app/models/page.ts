import {PageInfo} from './page-info';
import {Item} from './item';

export interface Page {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}
