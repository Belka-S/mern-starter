const jwt = require('jsonwebtoken');

const { Session } = require('../../models');
// const { HttpError } = require('../../utils');
const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET, NODE_ENV, DEV_FRONT_HTTP, PROD_FRONT_HTTP } =
  process.env;

const frontUrl = NODE_ENV === 'development' ? DEV_FRONT_HTTP : PROD_FRONT_HTTP;

const google = async (req, res) => {
  const { _id: uid } = req.user;

  const session = await Session.create({ uid });
  const payload = { uid, sid: session._id };

  const accessToken = jwt.sign(payload, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
  const refreshToken = jwt.sign(payload, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });

  res.redirect(`${frontUrl}/google?accessToken=${accessToken}&refreshToken=${refreshToken}`);
};

module.exports = google;
