import { SettingsSortViewDirection } from '../const/settings';
import { Settings } from './settings.model';

export const SettingsState: Settings = {
  sortSet: '',
  sortDate: SettingsSortViewDirection.none,
  sortCount: SettingsSortViewDirection.none,
  filterWord: {
    value: '',
  },
};
