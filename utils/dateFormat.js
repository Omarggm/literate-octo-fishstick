const { DateTime } = require("luxon");

module.exports = (date) => DateTime.fromJSDate(date).toMillis();