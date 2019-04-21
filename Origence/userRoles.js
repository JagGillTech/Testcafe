import testCafeFactory, {
    Selector
  } from 'testcafe';
  import {
    Role
  } from 'testcafe';
  import {
    login
  } from './helper';

  import {
    origenceUrl
  } from './test';



  fixture `Login`
  .page `https://quantumwebqa4.qa.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;


  const MortgageBankerManager = Role(origenceUrl, async t => {
    await login({
      userName: 'NYB\\MortgageBankerManager',
      password: 'DelForMayor18!',
      t,
    }), {
      preserveUrl: true
    }
  });