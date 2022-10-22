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

export const SETTINGS_SORT: SettingsSorting = {
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

export const SETTINGS_SORT_VIEW_DIRECTION = {
  none: '&nbsp;',
  asc: '&uarr;',
  desc: '&darr;',
};
