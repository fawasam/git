const { formatMemberDate } = require('./utils');

describe('Member Utils', () => {
  test('should format member with creation date', () => {
    const member = { id: 1, name: 'Test Member' };
    const formatted = formatMemberDate(member);
    
    expect(formatted).toHaveProperty('createdAt');
    expect(formatted.name).toBe('Test Member');
  });
});
