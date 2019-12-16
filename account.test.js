const BankAccount = require('./account');

test('returns amount deposited if user account number exists', () => {
    expect(BankAccount.deposit(500000, 'SB1034')).toBe(500000);
});
test('returns null deposited if user account number doesnt exist', () => {
    expect(BankAccount.deposit(500000, 'SB134')).toBe('account doesnt exist');
});
test('returns amount', () => {
    expect(BankAccount.getBalance('SB1034')).toBe(500000);
});
test('exits if user account number doesnt exist', () => {
    expect(BankAccount.getBalance('SB134')).toBe('account doesnt exist');
});

test('returns amount withdrawn', () => {
    expect(BankAccount.withdraw(200000, 'SB1034')).toBe(300000);
});
test('exits if user account number doesnt exist', () => {
    expect(BankAccount.withdraw(200000, 'SB134')).toBe('account doesnt exist');
});
test('returns account closed', () => {
    expect(BankAccount.close('SB1034')).toBe('Account closed successfully');
});
test('exits if user account number doesnt exist', () => {
    expect(BankAccount.close('SB134')).toBe('account doesnt exist');
});
