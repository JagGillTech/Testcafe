const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');

var verificationcode;

export function getVerificationCode() {

  //var verificationcode;



  // If modifying these scopes, delete token.json.
  const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  const TOKEN_PATH = 'token.json';
  const V_Code = 'verification.json'
  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    //authorize(JSON.parse(content), listLabels);
    authorize(JSON.parse(content), getRecentEmail);

  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const {
      client_secret,
      client_id,
      redirect_uris
    } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  /**
   * Lists the labels in the user's account.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  function listLabels(auth) {
    const gmail = google.gmail({
      version: 'v1',
      auth
    });
    gmail.users.labels.list({
      userId: 'me',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const labels = res.data.labels;
      if (labels.length) {
        console.log('Labels:');
        labels.forEach((label) => {
          console.log(`- ${label.name}` + "   " + `${label.id}`);
        });
      } else {
        console.log('No labels found.');
      }
    });
  }

  /**
   * Get the recent email from your Gmail account
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  function getRecentEmail(auth) {



    const gmail = google.gmail({
      version: 'v1',
      auth
    });
    // Only get the recent email - 'maxResults' parameter
    gmail.users.messages.list({
      auth: auth,
      userId: 'me',
      labelIds: 'Label_9164382628284733330',
      maxResults: 1,
    }, function (err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }

      // Get the message id which we will need to retreive tha actual message next.
      var message_id = response['data']['messages'][0]['id'];

      // Retreive the actual message using the message id
      gmail.users.messages.get({
        auth: auth,
        userId: 'me',
        'id': message_id
      }, function (err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }

        //text = response['data']['snippet'];
        //text = response['data'];
        //console.log(text);
        //console.log(response['data']['snippet']);


        var message_raw = response['data']['payload'].body.data;
        //message_raw = response.data.payload[0].body.data;
        var data = message_raw;
        var buff = new Buffer.from(data, 'base64');
        var text = buff.toString();
        //console.log(text);

        var vcode = /is: (.*?)</gm;
        var vecode = vcode.exec(text);
        verificationcode = vecode[1];
        //console.log(verificationcode);
        //return (verificationcode);
      });
    });

  }

  setTimeout(function () {
    //console.log(verificationcode);
    fs.writeFile(V_Code, verificationcode, (err) => {
      if (err) return console.error(err);
      console.log('Verification code stored to', V_Code);
    });

  }, 8000);


  //return (verificationcode);
  //console.log('verificationcode');


}


setTimeout(function () {

  //console.log(verificationcode);
}, 1000);









/*
setTimeout(function () {
  console.log(verificationcode);
}, 5000);

*/