const { format } = require('date-fns');

function formatMemberDate(member) {
  return {
    ...member,
    createdAt: format(new Date(), 'yyyy-MM-dd')
  };
}

module.exports = { formatMemberDate };
