import { Selector } from 'testcafe';




fixture`Consumer Portal`
    .page`https://memberportalwebqa4.qa.apps.pcf.nonprod.cudirect.com/user/registration`;


const goThereBotton = Selector('.blds-font-size--14').withText('Go');
const auto = Selector('.blds-font-color--black').withText('Auto');

const autoGoThereButton = Selector('.blds-font-color--black').withText('Auto Loan').parent(1).find('span').withText('Go There');
//const autoGoThereButton = Selector('.blds-font-color--black').withText('Approved')

test('Registration', async t => {
    const approvedAmount = Selector('p').withText('Approved').parent(1).find('p').withText('20,000').exists;
    //const approvedAmount = Selector('p').withText('20,000').exists;
    const uploadButton = await Selector('a', { timeout: 20000 }).withText('Upload');
    await t

        .setPageLoadTimeout(50000)
        .typeText('#firstName', 'firstname')
        .typeText('#lastName', 'lastment')
        .typeText('#emailAddress', 'test1234@test.com')

        .typeText('#dateOfBirth', '02/02/1990')
        .typeText('#ssnLastFour', '5678')
        .click('#agreeToTerms')

        .click('button[type="submit"]')

        //.wait(10000)
    //           .click(autoGoThereButton,{timeout : 50000})




});


