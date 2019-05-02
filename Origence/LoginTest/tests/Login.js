import testCafeFactory, {
  Selector,
  t
} from 'testcafe';
import {
  Role
} from 'testcafe';
import {
  login
} from '../helper';
import {
  readFile
} from 'fs';


import * as roles from '../userRoles';


fixture `Log into Origence with various roles`
  .page `https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;
//.page `https://google.com`;
const origenceUrl = 'https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx';


test('Login as Processor', async t => {
  await t.useRole(roles.Processor)
});
test('Login as ProcessorManager', async t => {
  await t.useRole(roles.ProcessorManager)
});
test('Login as ProcessorAssociate', async t => {
  await t.useRole(roles.ProcessorAssociate)
});
test('Login as ProcessorAssociateManager', async t => {
  await t.useRole(roles.ProcessorAssociateManager)
});
test('Login as PricingSpecialist', async t => {
  await t.useRole(roles.PricingSpecialist)
});
test('Login as PricingManager', async t => {
  await t.useRole(roles.PricingManager)
});
test('Login as Underwriter', async t => {
  await t.useRole(roles.Underwriter)
});
test('Login as UnderwriterManager', async t => {
  await t.useRole(roles.UnderwriterManager)
});
test('Login as TransactionManager', async t => {
  await t.useRole(roles.TransactionManager)
});
test('Login as ClientExperienceManager', async t => {
  await t.useRole(roles.ClientExperienceManager)
});
test('Login as CreditOfficer', async t => {
  await t.useRole(roles.CreditOfficer)
});
test('Login as CreditOfficerManager', async t => {
  await t.useRole(roles.CreditOfficerManager)
});
test('Login as Closer', async t => {
  await t.useRole(roles.Closer)
});
test('Login as CloserManager', async t => {
  await t.useRole(roles.CloserManager)
});
test('Login as Funder', async t => {
  await t.useRole(roles.Funder)
});
test('Login as FunderManager', async t => {
  await t.useRole(roles.FunderManager)
});
test('Login as Shipping', async t => {
  await t.useRole(roles.Shipping)
});
test('Login as ShippingManager', async t => {
  await t.useRole(roles.ShippingManager)
});
test('Login as Compliance', async t => {
  await t.useRole(roles.Compliance)
});
test('Login as ComplianceManager', async t => {
  await t.useRole(roles.ComplianceManager)
});
test('Login as QASpecialist', async t => {
  await t.useRole(roles.QASpecialist)
});
test('Login as QASpecialistManager', async t => {
  await t.useRole(roles.QASpecialistManager)
});
test('Login as MailRoom', async t => {
  await t.useRole(roles.MailRoom)
});
test('Login as MailRoomManager', async t => {
  await t.useRole(roles.MailRoomManager)
});
test('Login as ClientAdmin', async t => {
  await t.useRole(roles.ClientAdmin)
});



/*
test('Login Test', async t => {
  await t
 

  var fs = require("fs");
  var text = fs.readFileSync("./logins.txt").toString('utf-8');
  var textByLine = text.split("\n")

  for (var i = 0; i < textByLine.length; i++) {

    console.log('Logging in as ' + textByLine[i])
    //await t.useRole(eval(textByLine[i]))
    var finalrole = 'roles.' + textByLine[i]
    await t.useRole(eval(finalrole))
    //await t.useRole(roles.(eval(textByLine[i])))
    console.log('Sucessfully logged in as ' + textByLine[i])

  }

});

*/