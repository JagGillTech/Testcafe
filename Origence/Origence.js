import { Selector } from 'testcafe';




     fixture `Consumer Portal`
    .page `https://memberportalwebqa4.qa.apps.pcf.nonprod.cudirect.com/user/login`;


    
    test('Log into Origence', async t => {
      const approvedAmount = Selector('p').withText('Approved').parent(1).find('p').withText('20,000').exists;
      //const approvedAmount = Selector('p').withText('20,000').exists;

        await t
          .wait(1000)    

          ;
    }); 
