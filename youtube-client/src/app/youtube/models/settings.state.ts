import { SETTINGS_SORT, SETTINGS_SORT_VIEW_DIRECTION } from '../constants/settings.constat';
import { Settings } from './settings.model';

export const SettingsState: Settings = {
  sortType: SETTINGS_SORT.type.none,
  sort: {
    none: SETTINGS_SORT_VIEW_DIRECTION.none,
    date: SETTINGS_SORT_VIEW_DIRECTION.none,
    count: SETTINGS_SORT_VIEW_DIRECTION.none,
  },
  filterWord: '',
};
