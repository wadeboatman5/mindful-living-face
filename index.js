// mindful-living-utils.js

const moment = require('moment');

// Function to check if a date is today
function isToday(date) {
  return moment(date).isSame(moment(), 'day');
}

// Function to check if a date is in the future
function isFutureDate(date) {
  return moment(date).isAfter(moment());
}

// Function to format a date in a human-friendly way
function formatDate(date) {
  return moment(date).format('MMMM Do, YYYY');
}

module.exports = {
  isToday,
  isFutureDate,
  formatDate
};
