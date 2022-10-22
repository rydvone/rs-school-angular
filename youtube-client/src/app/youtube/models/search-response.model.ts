import { Card } from './card.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Card[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
