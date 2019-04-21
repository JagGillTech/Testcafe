import {
  Selector,
  ClientFunction
} from 'testcafe';




fixture `Origence`
  .page `https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;
  const FicoScore = Selector('#PrimaryBorrower_EstimatedFICOScore_EstimatedFICOScore');
  const FicoOption = FicoScore.find('option');

test("Quick App", async (t) => {
  await t
    .setPageLoadTimeout(1000)
    .typeText('input#ctl00_cphContent_UserName', 'NYB\\MortgageBankerManager')
    .typeText('input#ctl00_cphContent_Password', 'DelForMayor18!')
    .click('input#ctl00_cphContent_LoginButton')
    .hover('img#img_SalesmenuId', {timeout: 20000})
    .hover('a#eOrigination_QuickApp')
    .click('#QuickApp_QuickApp_Page')
    .typeText('#PrimaryBorrower_BorrowerFirstName_QQ_BorrowerFirstName_QQ','firstName',{timeout:20000})
    .typeText('#PrimaryBorrower_BorrowerLastName_QQ_BorrowerLastName_QQ','lastName')
    .typeText('#PrimaryBorrower_SSNNo_SSNNo_New','123456789')
    .click('#PrimaryBorrower_CitizenshipType_CitizenshipType')
    .click(Selector('option').filter('[title="Permanent Resident Alien"]'))
    .click('#PrimaryBorrower_EstimatedFICOScore_EstimatedFICOScore')
    .click(FicoOption.withText('Good: 700 - 749'))
    .click('#Property_PropertyState')
    .click(Selector('option').filter('[title="CA"]'))
    .click('#Property_PropertyCounty')
    .click(Selector('option').filter('[value="Fresno"]'))

   






    .wait(1000)
});


test.skip('Upload file', async t => {
  await t
    .setPageLoadTimeout(1000)
    .typeText('input#ctl00_cphContent_UserName', 'NYB\\MortgageBankerManager')
    .typeText('input#ctl00_cphContent_Password', 'DelForMayor18!')
    .click('input#ctl00_cphContent_LoginButton')
    .hover('img#img_SalesmenuId', {timeout: 20000})
    .hover('a#eOrigination_QuickApp')
    .click('a#QuickApp_UploadTransactionPage')
    .setFilesToUpload('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_ctlFileUpload', ['AndyV2-3.fnm'])
    .click('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_btnUploadFile',{timeout:2000})
    .wait(10000)

});