export const getCorrectDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.toLocaleString("EN", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
