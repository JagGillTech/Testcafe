import { Selector } from 'testcafe';




fixture `Origence`
.page `https://quantumwebdev4.dev.apps.pcf.nonprod.cudirect.com/QLoginPage.aspx`;


    
    test('Log into Origence', async t => {

 
      const approvedAmount = Selector('p').withText('Approved').parent(1).find('p').withText('20,000').exists;
      //const approvedAmount = Selector('p').withText('20,000').exists;

        await t
          .wait(5000) 
          .typeText('input#ctl00_cphContent_UserName','NYB\\MortgageBankerManager')   
          .typeText('input#ctl00_cphContent_Password','DelForMayor18!')  
          .click('input#ctl00_cphContent_LoginButton')

          
          
    }); 

    test('Upload File', async t => {
      await t 
      .wait(5000) 
      .hover('img#img_SalesmenuId')
      .hover('a#eOrigination_QuickApp')
      .click('a#QuickApp_UploadTransactionPage')
      


      .wait(1000)
      .setFilesToUpload('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_ctlFileUpload',['AndyV2-3.fnm'])
      //.eval(() => location.reload(true))
      .wait(1000)
      //.click('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_btnUploadFile')
      .wait(10000) 

      //.evalt.eval(() => location.reload(true));

      .eval(() => location.reload(true))
      .click('input#ctl00_ctl00_ctl00_cphBaseBody_cphLayoutContent_cphContent_btnUploadFile')


    });


  ///  test('Refresh', async t => {
  //    await t.eval(() => location.reload(true));
 // });

