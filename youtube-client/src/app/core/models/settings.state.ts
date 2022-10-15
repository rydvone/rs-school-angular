import { SettingsSortViewDirection } from '../../constant/settings';
import { Settings } from './settings.model';

export const SettingsState: Settings = {
  sortType: 'none',
  sort: {
    none: SettingsSortViewDirection.none,
    date: SettingsSortViewDirection.none,
    count: SettingsSortViewDirection.none,
  },
  filterWord: '',
};
