import moment from 'moment';

export function capitalize(value) {
  if (value && typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return '';
}

export function formatDate(value, formatType = 'LL') {
  if (!value) return '';

  return moment(value).format(formatType);
}
