import { OAuthProvider as TOAuthProvider } from "../api/oAuthProvider/OAuthProvider";

export const OAUTHPROVIDER_TITLE_FIELD = "id";

export const OAuthProviderTitle = (record: TOAuthProvider): string => {
  return record.id?.toString() || String(record.id);
};
