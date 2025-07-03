export const extractErrorMessages = (error: any): string[] => {
  const messages: string[] = [];

  // Backend validation error (Mongoose or custom)
  if (error?.data?.error?.errors) {
    const errors = error.data.error.errors;
    Object.keys(errors).forEach((key) => {
      const msg = errors[key]?.message;
      if (msg) messages.push(msg);
    });
  }

  // Message in root level
  if (error?.data?.message && messages.length === 0) {
    messages.push(error.data.message);
  }

  // RTK fetchBaseQuery string error
  if (error?.error && messages.length === 0) {
    messages.push(error.error);
  }

  // Fallback
  if (messages.length === 0) {
    messages.push("An unexpected error occurred");
  }

  return messages;
};
