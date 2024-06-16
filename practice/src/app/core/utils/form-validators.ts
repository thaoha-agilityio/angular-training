import { FormGroup } from '@angular/forms';

export interface ValidationMessages {
  [key: string]: { [key: string]: string };
}

// Function to get a specific validation message for a given control and error
export const getValidationMessage = (
  validationMessages: ValidationMessages,
  controlKey: string,
  errorKey: string
): string => {
  return (validationMessages[controlKey] as { [key: string]: string })[errorKey] || '';
};

// Function to process the form controls and generate validation messages
export const processMessages = (
  form: FormGroup,
  validationMessages: ValidationMessages
): { [key: string]: string } => {
  const messages: { [key: string]: string } = {};

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
