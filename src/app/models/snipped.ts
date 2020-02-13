import {Thumbnail} from './thumbnail';

export interface Snipped {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnail[];
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultAudioLanguage: string;
}
