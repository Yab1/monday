function deriveAuthError(errorCode: string) {
  switch (errorCode) {
    case "auth/admin-restricted-operation":
      return "This operation is restricted to administrators only.";
    case "auth/argument-error":
      return "An error occurred due to invalid arguments.";
    case "auth/app-not-authorized":
      return "The app is not authorized to access this resource.";
    case "auth/app-not-installed":
      return "The app is not installed.";
    case "auth/captcha-check-failed":
      return "The check for CAPTCHA failed.";
    case "auth/code-expired":
      return "The code has expired.";
    case "auth/cordova-not-ready":
      return "Cordova is not ready.";
    case "auth/cors-unsupported":
      return "CORS is not supported.";
    case "auth/credential-already-in-use":
      return "The credential is already in use.";
    case "auth/custom-token-mismatch":
      return "The custom token does not match.";
    case "auth/requires-recent-login":
      return "Reauthentication is required.";
    case "auth/dependent-sdk-initialized-before-auth":
      return "The dependent SDK was initialized before authentication.";
    case "auth/dynamic-link-not-activated":
      return "The dynamic link is not activated.";
    case "auth/email-change-needs-verification":
      return "Email change requires verification.";
    case "auth/email-already-in-use":
      return "The email is already in use.";
    case "auth/emulator-config-failed":
      return "Emulator configuration failed.";
    case "auth/expired-action-code":
      return "The action code has expired.";
    case "auth/cancelled-popup-request":
      return "The popup request was canceled.";
    case "auth/internal-error":
      return "An internal error occurred.";
    case "auth/invalid-api-key":
      return "The API key is invalid.";
    case "auth/invalid-app-credential":
      return "The app credential is invalid.";
    case "auth/invalid-app-id":
      return "The app ID is invalid.";
    case "auth/invalid-user-token":
      return "The user token is invalid.";
    case "auth/invalid-auth-event":
      return "The authentication event is invalid.";
    case "auth/invalid-cert-hash":
      return "The certificate hash is invalid.";
    case "auth/invalid-verification-code":
      return "The verification code is invalid.";
    case "auth/invalid-continue-uri":
      return "The continue URI is invalid.";
    case "auth/invalid-cordova-configuration":
      return "The Cordova configuration is invalid.";
    case "auth/invalid-custom-token":
      return "The custom token is invalid.";
    case "auth/invalid-dynamic-link-domain":
      return "The dynamic link domain is invalid.";
    case "auth/invalid-email":
      return "The email is invalid.";
    case "auth/invalid-emulator-scheme":
      return "The emulator scheme is invalid.";
    case "auth/invalid-credential":
      return "The credential is invalid.";
    case "auth/invalid-message-payload":
      return "The message payload is invalid.";
    case "auth/invalid-multi-factor-session":
      return "The multi-factor session is invalid.";
    case "auth/invalid-oauth-client-id":
      return "The OAuth client ID is invalid.";
    case "auth/invalid-oauth-provider":
      return "The OAuth provider is invalid.";
    case "auth/invalid-action-code":
      return "The action code is invalid.";
    case "auth/unauthorized-domain":
      return "The domain is unauthorized.";
    case "auth/wrong-password":
      return "The password is incorrect.";
    case "auth/invalid-persistence-type":
      return "The persistence type is invalid.";
    case "auth/invalid-phone-number":
      return "The phone number is invalid.";
    case "auth/invalid-provider-id":
      return "The provider ID is invalid.";
    case "auth/invalid-recipient-email":
      return "The recipient email is invalid.";
    case "auth/invalid-sender":
      return "The sender is invalid.";
    case "auth/invalid-verification-id":
      return "The verification ID is invalid.";
    case "auth/invalid-tenant-id":
      return "The tenant ID is invalid.";
    case "auth/multi-factor-info-not-found":
      return "Multi-factor information not found.";
    case "auth/multi-factor-auth-required":
      return "Multi-factor authentication is required.";
    case "auth/missing-android-pkg-name":
      return "The Android package name is missing.";
    case "auth/missing-app-credential":
      return "The app credential is missing.";
    case "auth/auth-domain-config-required":
      return "The authentication domain configuration is required.";
    case "auth/missing-verification-code":
      return "The verification code is missing.";
    case "auth/missing-continue-uri":
      return "The continue URI is missing.";
    case "auth/missing-iframe-start":
      return "The iframe start is missing.";
    case "auth/missing-ios-bundle-id":
      return "The iOS bundle ID is missing.";
    case "auth/missing-or-invalid-nonce":
      return "The nonce is missing or invalid.";
    case "auth/missing-multi-factor-info":
      return "Multi-factor information is missing.";
    case "auth/missing-multi-factor-session":
      return "Multi-factor session is missing.";
    case "auth/missing-phone-number":
      return "The phone number is missing.";
    case "auth/missing-verification-id":
      return "The verification ID is missing.";
    case "auth/app-deleted":
      return "The app has been deleted.";
    case "auth/account-exists-with-different-credential":
      return "An account exists with different credentials.";
    case "auth/network-request-failed":
      return "The network request failed.";
    case "auth/null-user":
      return "The user is null.";
    case "auth/no-auth-event":
      return "No authentication event found.";
    case "auth/no-such-provider":
      return "No such provider exists.";
    case "auth/operation-not-allowed":
      return "The operation is not allowed.";
    case "auth/operation-not-supported-in-this-environment":
      return "The operation is not supported in this environment.";
    case "auth/popup-blocked":
      return "The popup was blocked.";
    case "auth/popup-closed-by-user":
      return "The popup was closed by the user.";
    case "auth/provider-already-linked":
      return "The provider is already linked.";
    case "auth/quota-exceeded":
      return "The quota has been exceeded.";
    case "auth/redirect-cancelled-by-user":
      return "The redirect was cancelled by the user.";
    case "auth/redirect-operation-pending":
      return "The redirect operation is pending.";
    case "auth/rejected-credential":
      return "The credential was rejected.";
    case "auth/second-factor-already-in-use":
      return "The second factor is already in use.";
    case "auth/maximum-second-factor-count-exceeded":
      return "The maximum second factor count has been exceeded.";
    case "auth/tenant-id-mismatch":
      return "The tenant ID does not match.";
    case "auth/timeout":
      return "The operation timed out.";
    case "auth/user-token-expired":
      return "The user token has expired.";
    case "auth/too-many-requests":
      return "Too many requests. Please try again later.";
    case "auth/unauthorized-continue-uri":
      return "The continue URI is unauthorized.";
    case "auth/unsupported-first-factor":
      return "The first factor is not supported.";
    case "auth/unsupported-persistence-type":
      return "The persistence type is not supported.";
    case "auth/unsupported-tenant-operation":
      return "The tenant operation is not supported.";
    case "auth/unverified-email":
      return "The email is unverified.";
    case "auth/user-cancelled":
      return "The user cancelled the operation.";
    case "auth/user-not-found":
      return "The user was not found.";
    case "auth/user-disabled":
      return "The user is disabled.";
    case "auth/user-mismatch":
      return "The user does not match.";
    case "auth/user-signed-out":
      return "The user has been signed out.";
    case "auth/weak-password":
      return "The password is weak. Please use a stronger password.";
    case "auth/web-storage-unsupported":
      return "Web storage is not supported.";
    case "auth/already-initialized":
      return "The resource has already been initialized.";
    case "auth/recaptcha-not-enabled":
      return "reCAPTCHA is not enabled.";
    case "auth/missing-recaptcha-token":
      return "The reCAPTCHA token is missing.";
    case "auth/invalid-recaptcha-token":
      return "The reCAPTCHA token is invalid.";
    case "auth/invalid-recaptcha-action":
      return "The reCAPTCHA action is invalid.";
    case "auth/missing-client-type":
      return "The client type is missing.";
    case "auth/missing-recaptcha-version":
      return "The reCAPTCHA version is missing.";
    case "auth/invalid-recaptcha-version":
      return "The reCAPTCHA version is invalid.";
    case "auth/invalid-req-type":
      return "The request type is invalid.";
    default:
      return "An unexpected error occurred. Please try again later.";
  }
}

export default deriveAuthError;
