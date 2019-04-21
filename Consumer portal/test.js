import { Selector } from 'testcafe';




     fixture `Consumer Portal`
    .page `https://memberportalwebqa4.qa.apps.pcf.nonprod.cudirect.com/user/login`;


    const goThereBotton = Selector('.blds-font-size--14').withText('Go');
    const auto = Selector('.blds-font-color--black').withText('Auto');

    const autoGoThereButton = Selector('.blds-font-color--black').withText('Auto').parent(1).find('span').withText('Go There');

    test('Log into CP and go to first auto loan and verify that the approved anount is $20,000', async t => {
      const approvedAmount = Selector('p').withText('Approved').parent(1).find('p').withText('20,000').exists;
      //const approvedAmount = Selector('p').withText('20,000').exists;

        await t
          .wait(1000)    
          .typeText('#email', 'michaeldorn@mailinator.com')
            .typeText('#password', 'Password1')

            .click('button[type="submit"]')
            .click(autoGoThereButton)
            //.wait(5000)
            //console.log(approvedAmount)
            //.click(approvedAmount)
          //.takeScreenshot();
            .expect(approvedAmount).ok()
            .click(Selector('a').withText('Upload'))
          //.rightClick(secondgotherh2)
            //.click(goThereBotton)
          .wait(5000);
    }); 

    