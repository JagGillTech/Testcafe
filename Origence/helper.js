import{ClientFunction, Selector} from 'testcafe';




export const login = async ({userName, password, t}) => {
await t.typeText('#ctl00_cphContent_UserName', userName);
await t.typeText('#ctl00_cphContent_Password', password);
await t.click('#ctl00_cphContent_LoginButton');
await t.wait(1000);
await t.expect(Selector('#selectedSearchIndexText').innerText).eql('Loan')

}