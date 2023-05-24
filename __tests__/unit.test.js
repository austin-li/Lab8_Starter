// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('123-456-7890 is phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBeTruthy();
})
test('456-7890 is phone number', () => {
    expect(functions.isPhoneNumber('456-7890')).toBeTruthy();
})
test('123-456-789 is not a phone number', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBeFalsy();
})
test('1234567890 is not a phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBeFalsy();
})

// isEmail
test('a@a.co is an email', () => {
    expect(functions.isEmail('a@a.co')).toBeTruthy();
})
test('2@a.co is an email', () => {
    expect(functions.isEmail('2@a.co')).toBeTruthy();
})
test('a@a.c is not an email', () => {
    expect(functions.isEmail('a@a.c')).toBeFalsy();
})
test('a@2.co is not an email', () => {
    expect(functions.isEmail('a@2.co')).toBeFalsy();
})

// isStrongPassword
test('a_23 is a strong password', () => {
    expect(functions.isStrongPassword('a_23')).toBeTruthy();
})
test('a_2345678901234 is a strong password', () => {
    expect(functions.isStrongPassword('a_2345678901234')).toBeTruthy();
})
test('a_2 is not a strong password', () => {
    expect(functions.isStrongPassword('a_2')).toBeFalsy();
})
test('2_23 is not a strong password', () => {
    expect(functions.isStrongPassword('2_23')).toBeFalsy();
})

// isDate
test('11/11/1111 is a date', () => {
    expect(functions.isDate('11/11/1111')).toBeTruthy();
})
test('1/1/1111 is a date', () => {
    expect(functions.isDate('1/1/1111')).toBeTruthy();
})
test('a11/11/1111 is not a date', () => {
    expect(functions.isDate('a11/11/1111')).toBeFalsy();
})
test('11/11/111 is not a date', () => {
    expect(functions.isDate('a11/11/111')).toBeFalsy();
})

// isHexColor
test('#123456 is a hex color', () => {
    expect(functions.isHexColor('#123456')).toBeTruthy();
})
test('#123 is a hex color', () => {
    expect(functions.isHexColor('#123')).toBeTruthy();
})
test('#12345 is not a hex color', () => {
    expect(functions.isHexColor('#12345')).toBeFalsy();
})
test('#1234567 is not a hex color', () => {
    expect(functions.isHexColor('#1234567')).toBeFalsy();
})
