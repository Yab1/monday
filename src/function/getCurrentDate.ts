import { format } from "date-fns";

function getCurrentDate() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd-MM-yyyy");

  return formattedDate;
}

export default getCurrentDate;
