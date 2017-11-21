const fs = require("fs");
const { authorize } = require("./auth-handler");
const google = require("googleapis");

// Load client secrets from a local file.
fs.readFile("client_secret.json", (err, content) => {
  if (err) {
    console.log(`Error loading client secret file: ${err}`);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Drive API.
  authorize(JSON.parse(content), listFiles);
});

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {
  var service = google.drive("v3");
  service.files.list(
    {
      auth: auth,
      pageSize: 4,
      fields: "nextPageToken, files(id, name)",
      q: "mimeType='application/vnd.google-apps.spreadsheet'",
    },
    function(err, response) {
      if (err) {
        console.log("The API returned an error: " + err);
        return;
      }
      var files = response.files;
      if (files.length == 0) {
        console.log("No files found.");
      } else {
        console.log("Files:");
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log("%s (%s)", file.name, file.id);
        }
      }
    },
  );
}

module.exports = {
  listFiles,
};
