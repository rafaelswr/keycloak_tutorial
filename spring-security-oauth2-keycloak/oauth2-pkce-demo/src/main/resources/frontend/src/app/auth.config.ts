import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer:"http://localhost:8180/realms/oauth2-realm-demo",
  redirectUri:window.location.origin,
  clientId:"oauth2-demo-pkce-client",
  responseType:"code",
  strictDiscoveryDocumentValidation:true,
  scope:"openid profile email offline_access"
}


















/*
export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/auth/realms/oauth2-demo-realm',
  redirectUri: window.location.origin,
  clientId: 'oauth2-demo-pkce-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email offline_access',
}


 */
