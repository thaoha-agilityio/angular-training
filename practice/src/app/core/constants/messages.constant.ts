export const NOTICE_MESSAGE = 'No data available';

export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  EMAIL_INVALID: 'Invalid email format.',
  ONLY_BLANK_SPACES: 'Username cannot contain only blank spaces.',
};

export const SUCCESS_MESSAGES = {
  ADDED: (name: string) => `${name} was added successfully.`,
  EDITED: (name: string) => `${name} was edited successfully.`,
  DELETED: 'User was deleted successfully.',
};
