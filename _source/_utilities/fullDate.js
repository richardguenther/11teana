/* ----------------------------------------------------------------------------
returns a formatted date - via https://stackoverflow.com/a/31615643
Liquid: {{ page.date | fullDate }}
Jetzt auf deutsch
---------------------------------------------------------------------------- */

const fullDate = (value) => {
  const dateObject = new Date(value);

  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const day = dateObject.getDate();

  return ` ${day}. ${months[dateObject.getMonth()]}  ${dateObject.getFullYear()}`;
};

module.exports = fullDate;
