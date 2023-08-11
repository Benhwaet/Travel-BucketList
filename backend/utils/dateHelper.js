// taken from module 14, activity 19, as a way to format data output 
//during journal entry and user creation
module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
  };
  //look at details futher before using this code
  //the format_date function. It takes in a date as a parameter and 
  //returns a string with the formatted month, day, and year.