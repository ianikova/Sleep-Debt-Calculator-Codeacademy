const getSleepHours = (day) => {
  /*if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 6;
  } else if (day === 'Wednesday'){
    return 6;
  } else if (day === 'Thursday') {
    return 9;
  } else if (day === 'Friday') {
    return 7;
  } else if (day === 'Saturday') {
    return 11;
  } else if (day === 'Sunday') {
    return 5
  } else {
    return 'Error!'
  };*/

  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 8;
      break;
    case "Sunday":
      return 8;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 10;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      "You slept " +
        (actualSleepHours - idealSleepHours) +
        " hours. You got the perfect amount of sleep"
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You slept " +
        (actualSleepHours - idealSleepHours) +
        " hours. You got more sleep than needed"
    );
  } else {
    console.log(
      "You slept " +
        (actualSleepHours - idealSleepHours) +
        " hours. You should get some rest"
    );
  }
};

calculateSleepDebt();
