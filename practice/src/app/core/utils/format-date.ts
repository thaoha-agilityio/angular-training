export const formatDateTime = () => {
  const currentDate = new Date();

  // Define options for formatting the date part
  const dateOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  } as Intl.DateTimeFormatOptions;

  // Format the date part
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(currentDate);

  // Format the time part using toLocaleTimeString
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Combine date and time parts
  return `${formattedDate} ${formattedTime}`;
};
