const BankAccount = require('./account');

test('returns new accout number ', () => {
    expect(BankAccount.open('sarah', 0)).toBe('SB1034');
});
test('returns account balance after deposit ', () => {
    expect(BankAccount.deposit(500000, 'SB1034', 'active')).toBe(500000);
});
test('returns null deposited if user account number doesnt exist', () => {
    expect(() => { BankAccount.deposit(500000, 'SB1378') }).toThrowError('account doesnt exist');
});
test('returns balance', () => {
    expect(BankAccount.getBalance('SB1034')).toBe(500000);
});
test('exits if user account number doesnt exist', () => {
    expect(() => { BankAccount.getBalance('SB1356', 'closed') }).toThrowError('account doesnt exist or account is closed');
});

test('returns balance after withdrawing', () => {
    expect(BankAccount.withdraw(200000, 'SB1034')).toBe(300000);
});
test('exits if user account is closed', () => {
    expect(() => { BankAccount.withdraw(200000, 'SB135', 'closed') }).toThrowError('account doesnt exist or account closed');
});
test('returns account closed', () => {
    expect(BankAccount.close('SB1034')).toBe('Account closed successfully');
});
test('exits if user account number doesnt exist', () => {
    expect(() => { BankAccount.close('SB1345') }).toThrowError('account doesnt exist');
});
