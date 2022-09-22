export const mockAsync = async (timeout?: number) => {
  const setTimeoutPromise = async (timeout: number) => {
    return new Promise((promise) => setTimeout(promise, timeout || 2000));
  };

  await setTimeoutPromise(timeout);
  return;
}
