import {
  Selector,
  ClientFunction,
  RequestHook,
  xunit
} from 'testcafe';
import Page from './page-model';

//import { RequestHook } from 'testcafe';
const page = new Page();

//var xunit = require(xunit);

fixture `Origence`
  .page `https://quantumwebdev4.dev.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;
const FicoScore = Selector('#PrimaryBorrower_EstimatedFICOScore_EstimatedFICOScore');
const FicoOption = FicoScore.find('option');
const select = Selector('#Loan_LoanPurpose_LoanPurpose');
const subordinateFinancing = Selector('#Loan_ExistingLoan_ExistingLoan').parent(0);





test.skip("Submit Quick App and get loan number", async (t) => {
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
    .click(Selector('.radioBtnCss').withText('Yes'), {
      offsetX: 20,
      offsetY: 5
    })
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

    .click(subordinateFinancing, {
      offsetX: 20,
      offsetY: 5
    })

    .click(Selector('button').filter('[title="Search Program"]'))

    .click(Selector('.k-hierarchy-cell').nth(1).find('.k-icon.k-plus'), {
      timeout: 20000
    })

    .click(Selector('#fwkSave'), {
      timeout: 20000
    })

    .expect(Selector('#FilesummaryLoanNumber', {
      timeout: 20000
    }).child(0).getAttribute('href')).contains('LoanView_LoanViewPage')

  const loannumber1 = Selector('#FilesummaryLoanNumber').child(0).innerText
  console.log("Loan Number is " + await loannumber1)

  await t.wait(1000);
});


test('Upload file', async t => {

  await t
    .setPageLoadTimeout(300000)
    
    .typeText('input#ctl00_cphContent_UserName', 'NYB\\MortgageBankerManager', {
      timeout: 20000
    })
    .typeText('input#ctl00_cphContent_Password', 'DelForMayor18!')
    .click('input#ctl00_cphContent_LoginButton')
    .hover('img#img_SalesmenuId', {
      timeout: 20000
    })

    .hover('a#eOrigination_QuickApp')
    .click('a#QuickApp_UploadTransactionPage')
    .setFilesToUpload('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_ctlFileUpload', ['AndyV2-3.fnm'])
    .click('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_btnUploadFile', {
      timeout: 20000
    })
    
    .expect(Selector('#FilesummaryLoanNumber', {
      timeout: 30000
    }).child(0).getAttribute('href')).contains('LoanView_LoanViewPage', 'the test failed')

  const loannumber = Selector('#FilesummaryLoanNumber').child(0).innerText
  console.log("Loan Number is " + await loannumber)



});