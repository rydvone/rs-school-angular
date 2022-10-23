export interface Settings {
  sortType: SettingsSortType;
  sort: {
    none: string;
    date: string;
    count: string;
  };
  filterWord: string;
}

export type SettingsSortType = 'none' | 'date' | 'count';

export type SettingsSortDirection = 'none' | 'asc' | 'desc';
