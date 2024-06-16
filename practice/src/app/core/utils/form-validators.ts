import { FormGroup } from '@angular/forms';

// export interface ValidationMessages {
//   [key: string]: { [key: string]: string };
// }

export type ObjectWithTypeCheck = Record<string, any>;
// Function to get a specific validation message for a given control and error
export const getValidationMessage = (
  validationMessages: ObjectWithTypeCheck,
  controlKey: string,
  errorKey: string
): string => {
  return validationMessages[controlKey][errorKey] || '';
};

// Function to process the form controls and generate validation messages
export const processMessages = (
  form: FormGroup,
  validationMessages: ObjectWithTypeCheck
): ObjectWithTypeCheck => {
  const messages: ObjectWithTypeCheck = {};

  // Iterate over each control in the form group
  Object.keys(form.controls).forEach(controlKey => {
    const control = form.controls[controlKey];
    if (!control.errors) {
      return;
    }

    // Initialize the message string for this control
    messages[controlKey] = '';

    // Iterate over each error key in the control's errors object
    Object.keys(control.errors).forEach(errorKey => {
      messages[controlKey] += getValidationMessage(validationMessages, controlKey, errorKey) + ' ';
    });
  });

  return messages;
};
