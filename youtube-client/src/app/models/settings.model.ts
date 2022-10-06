export interface Settings {
  sortSet: '' | 'sortDate' | 'sortCount';
  sortDate: SortDate;
  sortCount: SortCount;
  filterWord: FilterWord;
}

interface SortDate {
  direction: boolean;
}

interface SortCount {
  direction: boolean;
}

interface FilterWord {
  value: string;
}
