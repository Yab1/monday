function deriveFirestoreError(errorCode: string) {
  switch (errorCode) {
    case "ok":
      return "Operation successful.";
    case "cancelled":
      return "The operation was canceled.";
    case "unknown":
      return "An unknown error occurred.";
    case "invalid-argument":
      return "An invalid argument was provided.";
    case "deadline-exceeded":
      return "The operation took too long to complete.";
    case "not-found":
      return "The requested entity was not found.";
    case "already-exists":
      return "The entity already exists.";
    case "permission-denied":
      return "Permission denied to execute the operation.";
    case "resource-exhausted":
      return "The resource has been exhausted.";
    case "failed-precondition":
      return "The operation was rejected due to the system state.";
    case "aborted":
      return "The operation was aborted due to a concurrency issue.";
    case "out-of-range":
      return "The operation was attempted past the valid range.";
    case "unimplemented":
      return "The operation is not implemented or supported.";
    case "internal":
      return "An internal error occurred.";
    case "unavailable":
      return "The service is currently unavailable.";
    case "data-loss":
      return "Unrecoverable data loss or corruption occurred.";
    case "unauthenticated":
      return "Authentication credentials are not valid.";
    default:
      return "An unexpected error occurred.";
  }
}

export default deriveFirestoreError;
