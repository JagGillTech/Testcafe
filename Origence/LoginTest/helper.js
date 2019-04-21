import{ClientFunction, Selector} from 'testcafe';




export const login = async ({userName, password, t}) => {
console.log('Logging in as ' + userName)
await t.typeText('#ctl00_cphContent_UserName', userName);
await t.typeText('#ctl00_cphContent_Password', password);
await t.click('#ctl00_cphContent_LoginButton');
await t.wait(500);
//await t.expect(Selector('#selectedSearchIndexText').innerText).eql('Loan',{timeout: 20000})
await t.expect(Selector('#atLogout').innerText).match(/logout/i,{timeout: 20000})
console.log('Sucessfully logged in as ' + userName)
}


