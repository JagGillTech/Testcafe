import testCafeFactory, {
  Selector,
  t
} from 'testcafe';
import {
  Role
} from 'testcafe';
import {
  login
} from './helper';
import {
  readFile
} from 'fs';


import * as roles from './userRoles';


fixture `Getting Started`
  .page `https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;

const origenceUrl = 'https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx';


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