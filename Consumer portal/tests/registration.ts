import { Selector } from 'testcafe';
const fs = require('fs');
const readline = require('readline');

const doAsync = require('doasync');

import { getVerificationCode } from '../getVerificationCode';

var rNum = Math.floor(Math.random() * 10000000) + 1;
var email = 'cudirectqa+' + rNum + '@gmail.com'



fixture`Consumer Portal`
    .page`https://memberportalwebqa4.qa.apps.pcf.nonprod.cudirect.com/user/registration`;

test('Registration', async t => {
    var verificationcode: any;


    await t

        .maximizeWindow()
        //.setTestSpeed(.5)
        .typeText('#firstName', 'firstname')
        .typeText('#lastName', 'lastmname')
        .typeText('#emailAddress', email)
        .typeText('#dateOfBirth', '02/02/1990')
        .typeText('#ssnLastFour', '5678')
        .click('#agreeToTerms')
        .click('button[type="submit"]')
        .click('#email_ver_but_send')

        .wait(10000);
    getVerificationCode();
    await t.wait(10000);


    doAsync(fs).readFile('verification.json', 'utf8')
        .then((data) => verificationcode = data);
    await t.wait(5000)
    console.log(verificationcode);
    await t
        .typeText('#email_ver_input', verificationcode)
        .click('#email_ver_but_verify')
        .click('#continue')
        .typeText('#newPassword', 'Password123')
        .typeText('#reenterPassword', 'Password123')
        .click('#continue')
        .expect(Selector('#email').exists).eql(true, { timeout: 50000 })
});
