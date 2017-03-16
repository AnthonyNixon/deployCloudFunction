/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */

const googleapis = require('googleapis');
var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

exports.deploycloudfunction = function deploycloudfunction(req, res) {
  console.log(req.body);
  res.status(200).send('ok');
};
