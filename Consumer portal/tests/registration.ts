import { Selector } from 'testcafe';


fixture`Consumer Portal`
    .page`https://memberportalwebqa4.qa.apps.pcf.nonprod.cudirect.com/user/registration`;

test('Registration', async t => {
    await t
        .setPageLoadTimeout(50000)
        .typeText('#firstName', 'firstname')
        .typeText('#lastName', 'lastment')
        .typeText('#emailAddress', 'test1234@test.com')
        .typeText('#dateOfBirth', '02/02/1990')
        .typeText('#ssnLastFour', '5678')
        .click('#agreeToTerms')
        .click('button[type="submit"]')
});
