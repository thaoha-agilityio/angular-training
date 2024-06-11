/**
 * Returns the first letter of the given string.
 *
 * @param {string} str - The string to extract the first letter from.
 * @returns {string} - The first letter of the string, or an empty string if the input is not valid.
 */
export const getFirstLetter = (str: string) => {
  if (typeof str === 'string' && str.length > 0) {
    return str.charAt(0);
  }

  return '';
};

export const nameToColorHex = (name: string): string => {
  // Handle the case where name is undefined, null, or not a string
  if (!name || typeof name !== 'string') {
    return '#000000'; // Return a default color
  }

  // Create a hash of the name using a simple hashing algorithm
  const hashCode = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }

    return hash;
  };

  // Convert the hash to a hexadecimal color code
  const intToRGB = (i: number) => {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  };

  // Generate the color hex code
  const hash = hashCode(name);
  const colorHex = '#' + intToRGB(hash);

  return colorHex;
};
