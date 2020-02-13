import {Snipped} from './snipped';
import {Statistics} from './statistics';

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snipped;
  statistics: Statistics;
}
