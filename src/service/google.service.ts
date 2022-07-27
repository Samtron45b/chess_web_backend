const {google} = require('googleapis');

const CLIENT_ID = process.env.google_client_id
const CLIENT_SECRET = process.env.google_client_secret
const REFRESH_TOKEN = process.env.google_refresh_token
const REDIRECT_URL = process.env.google_redirect_uri

class googleService{
  config(){
    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URL
      );
    
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

      const drive = google.drive({
        version: 'v3',
        auth: oauth2Client,
      });
    return drive
  }
}



export default new googleService