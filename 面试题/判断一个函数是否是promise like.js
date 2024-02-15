function promiseLike(promise) {
  return promise !== null && (typeof promise === 'object' || typeof promise === 'function') && typeof promise.then === 'function';
}