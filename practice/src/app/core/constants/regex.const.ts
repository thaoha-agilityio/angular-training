export const REGEX = {
  CHECK_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  CHECK_SYMBOL: /.*[!@#$%^&+=*].*/,
  NOT_NUMBER: /[^\d]/g,
  CHECK_NUMBER: /.*[0-9].*/,
  CHECK_URL: /\.(jpg|jpeg|png)$/,
  ONLY_BLANK_SPACES: /^(?!\s*$).+/,
};
