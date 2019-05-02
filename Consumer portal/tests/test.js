import {
  Selector
} from 'testcafe';

fixture `Consumer Portal`
  .page `https://memberportalwebqa4.qa.apps.pcf.nonprod.cudirect.com/user/login`;

const goThereBotton = Selector('.blds-font-size--14').withText('Go');
const auto = Selector('.blds-font-color--black').withText('Auto');
const autoGoThereButton = Selector('.blds-font-color--black',{timeout:50000}).withText('Auto Loan').parent(1).find('span').withText('Go There');

test('Log into CP and go to first auto loan and click on upload button', async t => {
  const approvedAmount = Selector('p').withText('Approved').parent(1).find('p').withText('20,000').exists;

  const uploadButton = await Selector('a', { timeout: 20000}).withText('Upload');

  await t
    .setPageLoadTimeout(50000)
    .typeText('#email', 'michaeldorn@mailinator.com')
    .typeText('#password', 'Password1')
    .click('button[type="submit"]')
    .click(autoGoThereButton)
  //console.log(await approvedAmount)
  if (await uploadButton.exists) {
    await t.click(Selector('a').withText('Upload'))
  } else {
    await t.click(Selector('a').withText('View My Documents'))
  }
});