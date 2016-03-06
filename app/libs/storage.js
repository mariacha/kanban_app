/**
 * Created by mfisher on 3/6/16.
 *
 * Sets up localStorage as a data storage option.
 */
export default {
  get(k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  set(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  }
};
