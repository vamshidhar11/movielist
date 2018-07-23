export default {
  debug: true,
  testing: true,
  apiKey: process.env.API_KEY,
  auth0: {
    clientId: process.env.CLIENT_ID,
    domain: process.env.DOMAIN
  }
};
