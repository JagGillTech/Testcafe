import {
  Selector,
  ClientFunction
} from 'testcafe';
import Page from './page-model';

const page = new Page();


fixture `Origence`
  .page `https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;
const FicoScore = Selector('#PrimaryBorrower_EstimatedFICOScore_EstimatedFICOScore');
const FicoOption = FicoScore.find('option');
const select = Selector('#Loan_LoanPurpose_LoanPurpose');


test("Quick App", async (t) => {
  await t
    .maximizeWindow()
    .setPageLoadTimeout(1000)
    .typeText(page.login_userName, 'NYB\\MortgageBankerManager')
    .typeText(page.login_password, 'DelForMayor18!')
    .click(page.login_loginButton)


    .hover(page.mainRibbon_sales, {
      timeout: 20000
    })
    .hover(page.mainRibbon_sales_application)
    .click(page.mainRibbon_sales_application_quickApp)
    .typeText(page.PriBorr_FN, 'firstName', {
      timeout: 20000
    })
    .typeText(page.PriBorr_LN, 'lastName')
    .typeText(page.PriBorr_SSN, '123456789')
    .click('#PrimaryBorrower_CitizenshipType_CitizenshipType')
    .click(Selector('option').filter('[title="Permanent Resident Alien"]'))
    .click('#PrimaryBorrower_EstimatedFICOScore_EstimatedFICOScore')
    .click(FicoOption.withText('Good: 700 - 749'))
    .click('#Property_PropertyState')
    .click(Selector('option').filter('[title="CA"]'))
    .click('#Property_PropertyCounty')
    .click(Selector('option').filter('[value="Fresno"]'))
    .click('#Property_PropertyType_PropertyType')
    .click(Selector('option').filter('[title="SFR Detached"]'))
    .click('#Property_PropertyOccupancyType_PropertyOccupancyType')
    .click(Selector('option').filter('[title="Primary Residence"]'))
    .selectText('#Property_EstimatedValue_EstimatedValue')
    .pressKey('delete')
    .typeText('#Property_EstimatedValue_EstimatedValue', '300000.00')
    .click('#Loan_LoanType_LoanType')
    .click(Selector('option').filter('[title="Conventional"]'))


    //.setTestSpeed(0.7)
    .click(Selector('#Loan_LoanPurpose_LoanPurpose'))
    //.pressKey('tab')
    .click(Selector('option').withText('Purchase'))
    //.pressKey('down')
    // .pressKey('enter')
    // .pressKey('tab')

    //.wait(1000)



    .click('#Loan_LienPosition_LienPosition')
    .click(Selector('option').withText('First Lien'))
    //.selectText('#Loan_LoanAmount_LoanAmount')
    //.pressKey('delete')
    //.typeText('#Loan_LoanAmount_LoanAmount','240000')



    .selectText('#Loan_DownPayment_DownPayment')
    .pressKey('delete')
    .typeText('#Loan_DownPayment_DownPayment', '80000')
    .click(Selector('button').filter('[title="Search Program"]'))
    .wait(1000)
    .click(Selector('.k-hierarchy-cell').nth(1).find('.k-icon.k-plus'), {
      timeout: 20000
    })

    .click(Selector('#fwkSave'), {
      timeout: 20000
    })
    .wait(1000)
    .expect(Selector('#FilesummaryLoanNumber').child(0).getAttribute('href')).contains('LoanView_LoanViewPage')


    .wait(10000);
});


test.skip('Upload file', async t => {
  await t
    .setPageLoadTimeout(1000)
    .typeText('input#ctl00_cphContent_UserName', 'NYB\\MortgageBankerManager')
    .typeText('input#ctl00_cphContent_Password', 'DelForMayor18!')
    .click('input#ctl00_cphContent_LoginButton')
    .hover('img#img_SalesmenuId', {
      timeout: 20000
    })
    .hover('a#eOrigination_QuickApp')
    .click('a#QuickApp_UploadTransactionPage')
    .setFilesToUpload('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_ctlFileUpload', ['AndyV2-3.fnm'])
    .click('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_btnUploadFile', {
      timeout: 2000
    })
    .wait(20000)

});