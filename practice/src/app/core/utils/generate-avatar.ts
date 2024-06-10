export const nameToColorHex = (name: string): string => {
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
