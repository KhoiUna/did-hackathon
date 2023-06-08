import { OidcClient } from "oidc-client-ts";

const TRINSIC_ECOSYSTEM = "laughing-nightingale-zhw8wy9rkej7";
const TRINSIC_ENVIRONMENT = "prod";
const TRINSIC_SCHEMA =
  "https://schema.trinsic.cloud/laughing-nightingale-zhw8wy9rkej7/tenants-vc-for-homey";

const authority_urls = {
  prod: "https://connect.trinsic.cloud/",
  staging: "https://connect-staging.trinsic.cloud/",
  dev: "https://connect-dev.trinsic.cloud",
};

const config = {
  authority: authority_urls[TRINSIC_ENVIRONMENT],
  client_id: "John Doe",
  redirect_uri: window.location.origin + "/verified",

  response_type: "code",
  scope: "openid",

  // Trinsic-specific data
  extraQueryParams: {
    "trinsic:ecosystem": TRINSIC_ECOSYSTEM,
    "trinsic:schema": [TRINSIC_SCHEMA],
  },
};

const client = new OidcClient(config);

export { client };
