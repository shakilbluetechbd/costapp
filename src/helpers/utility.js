// import { isProductionEnv } from '../config';

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = number => (number > 1 ? 's' : '');
  const number = num => (num > 9 ? `${num}` : `0${num}`);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return `${days} day${numberEnding(days)}`;
      }
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const month = months[givenTime.getUTCMonth()];
      const day = number(givenTime.getUTCDate());
      return `${day} ${month}`;
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return 'a few seconds ago';
  };
  return getTime();
}

export const isEmail = (text) => {
  if (!text) { return false; }
  const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return emailRegex.test(text);
};

export const isPhoneNumber = (text) => {
  if (!text) { return false; }
  const phnNumberRegex = new RegExp(/^((\+88)?(01){1}[23456789]{1}(\d){8})$/);

  return phnNumberRegex.test(text);
};

export const getFullPhoneNo = (text) => {
  const phnNumberRegex = new RegExp(/^((01){1}[23456789]{1}(\d){8})$/);

  if (phnNumberRegex.test(text)) {
    return `+88${text}`;
  }

  if (isPhoneNumber(text)) {
    return text;
  } return null;
};

export function getTextType(text) {
  if (isPhoneNumber(text)) {
    return 'phoneNumber';
  }

  if (isEmail(text)) {
    return 'email';
  }

  return null;
}

export function getErrorMessage(ex) {
  // consoleErr('Error: ', ex);

  switch (ex.status) {
    case 500:
      return 'Internal Server Error';
    case 401:
    case 403:
      return 'Un authorized';
    default:
      return `Error: ${ex.message}`;
  }
}

export function to1stJan2001(hour, min = 0) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(hour)) {
    const timeRegex = new RegExp(/^(((0?[1-9])|(1[0-2])):([0-5])([0-9])\s(A|P|a|p)(M|m))$/);

    if (timeRegex.test(hour)) {
      if (timeRegex.test(hour)) {
        const tokens = hour.split(/[\s:]+/);
        // eslint-disable-next-line radix
        hour = parseInt(tokens[0]);
        // eslint-disable-next-line radix
        min = parseInt(tokens[1]);
        if (hour === 12) {
          if (tokens[2].toLowerCase() === 'am') { hour = 0; }
        } else {
          hour += tokens[2].toLowerCase() === 'am' && hour !== 12 ? 0 : 12;
        }
      } else { hour = 0; }
    }
  }
  return new Date(2001, 0, 1, hour, min, 0, 0);
}

export function isEmptyObject(map) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

// export function consoleLog() {
//   if (!isProductionEnv()) {
//     // eslint-disable-next-line no-console
//   }
// }

// export function consoleErr() {
//   if (!isProductionEnv()) {
//     // eslint-disable-next-line no-console
//     console.error(...arguments);
//   }
// }
