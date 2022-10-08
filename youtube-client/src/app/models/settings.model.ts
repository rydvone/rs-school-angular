export interface Settings {
  sortSet: string;
  sortDate: string;
  sortCount: string;
  filterWord: FilterWord;
}

interface FilterWord {
  value: string;
}
