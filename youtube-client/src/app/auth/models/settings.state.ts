import { SettingsSort, SettingsSortViewDirection } from '../constants/settings.constat';
import { Settings } from './settings.model';

export const SettingsState: Settings = {
  sortType: SettingsSort.type.none,
  sort: {
    none: SettingsSortViewDirection.none,
    date: SettingsSortViewDirection.none,
    count: SettingsSortViewDirection.none,
  },
  filterWord: '',
};
