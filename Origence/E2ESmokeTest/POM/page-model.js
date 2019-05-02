import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.login_userName = Selector('#ctl00_cphContent_UserName');
        this.login_password = Selector('#ctl00_cphContent_Password');
        this.login_loginButton = Selector('#ctl00_cphContent_LoginButton');
        this.mainRibbon_sales = Selector('#img_SalesmenuId');
        this.mainRibbon_sales_application = Selector('#eOrigination_QuickApp');
        this.mainRibbon_sales_application_quickApp= Selector('#QuickApp_QuickApp_Page');
        this.PriBorr_FN= Selector('#PrimaryBorrower_BorrowerFirstName_QQ_BorrowerFirstName_QQ');
        this.PriBorr_LN = Selector('#PrimaryBorrower_BorrowerLastName_QQ_BorrowerLastName_QQ');
        this.PriBorr_SSN = Selector('#PrimaryBorrower_SSNNo_SSNNo_New');


    }
}
