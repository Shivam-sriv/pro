export const Validator = async (value, field, method) => {
  try {
    method(value, field);
    return { field };
  } catch (err) {
    return err;
  }
};
