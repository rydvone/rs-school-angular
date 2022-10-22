interface SettingsSorting {
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

export const SettingsSort: SettingsSorting = {
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
