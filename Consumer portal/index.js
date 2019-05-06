const createTestCafe = require('testcafe');
const default1 = require('testcafe-reporter-xunit');
const ciscospark = require(`ciscospark`);
var fs = require('fs');


let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    

.then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['tests'])
            .browsers(['chrome'])
            .reporter([{name:'spec', output: 'reports/report.txt'}])
            .run();
    })
    
    .then(failedCount=> {
        console.log('Tests failed: ' + failedCount);
        if(failedCount>0){
          sendmessage();
        }
        testcafe.close();
    });



    function sendmessage(){
        var fileContent = fs.readFileSync("./reports/report.txt", "utf8");
    
        const teams = ciscospark.init({
            credentials: {
              access_token:'ZTZiMDQxOGYtM2YzNC00MWE1LTk2MzUtOTZlOWVlZTk2OTJmN2RlYzFhZDUtMWQ2_PF84_a34f204f-3fb6-4bb6-a4d1-4e2351cefc19'
              //access_token:'ZWY3MDdiYzktY2I5Yi00ODdmLWI2YjktMTUwNmIwNTUyMDY2MGRjZGViOGQtMGY1_PF84_a34f204f-3fb6-4bb6-a4d1-4e2351cefc19'
              
            }
        });
    
             return teams.messages.create({
                markdown: fileContent,
                roomId:'Y2lzY29zcGFyazovL3VzL1JPT00vY2MzNDNmMjAtNmJjYi0xMWU5LWEwZmYtNzU2Nzc4YTZlZjZj',
                
   
                
              })
          };
    




          function createRoom(mess){
            var fileContent = fs.readFileSync("./reports/report.txt", "utf8");
               
const teams = ciscospark.init({
    credentials: {
      access_token: 'ZTZiMDQxOGYtM2YzNC00MWE1LTk2MzUtOTZlOWVlZTk2OTJmN2RlYzFhZDUtMWQ2_PF84_a34f204f-3fb6-4bb6-a4d1-4e2351cefc19'
    }
  });
  
  

  teams.rooms.create({ title: 'CP Test Result' }).then(room => {
    return Promise.all([
      teams.memberships.create({
        roomId: room.id,
        personEmail: 'jag.gill@cudirect.com'
      })
      
    ]).then(() =>
      teams.messages.create({
        markdown: '**Hi Everyone**',
        roomId: room.id
      })
    );
  });
  



  
              };
        
