// import { SettingsSortName } from '../models/settings.model';
interface ISettingsSort {
  type: {
    none: 'none';
    date: 'date';
    count: 'count';
  };
  direction: {
    none: 'none';
    asc: 'asc';
    desc: 'desc';
  };
}

export const SettingsSort: ISettingsSort = {
  type: {
    none: 'none',
    date: 'date',
    count: 'count',
  },
  direction: {
    none: 'none',
    asc: 'asc',
    desc: 'desc',
  },
};

export const SettingsSortViewDirection = {
  none: '&nbsp;',
  asc: '&uarr;',
  desc: '&darr;',
};
