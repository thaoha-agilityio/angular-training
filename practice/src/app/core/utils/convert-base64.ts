/**
 * Converts a File object to a Base64 encoded string.
 * @param {File} file - The File object to be converted.
 * @returns {Promise<string | null>} A Promise that resolves with the Base64 encoded string,or null if there was an error.
 */
export const convertBase64 = (file: File): Promise<string | null> =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const result = fileReader.result;

      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('Unsupported result type'));
      }
    };

    fileReader.onerror = error => reject(error);
  });
