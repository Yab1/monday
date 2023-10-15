import { format } from "date-fns";

function getCurrentDate() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MM-dd-yyyy");

  return formattedDate;
}

export default getCurrentDate;
