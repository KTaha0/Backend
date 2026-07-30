import {ValidationError} from "../errors/ValidationError.js";

export function validate(schemas) {
  return (req, res, next) => {
    for (const [location, schema] of Object.entries(schemas)) {
      const result = schema.safeParse(req[location]);

      if (!result.success) {
        return next(new ValidationError(result.error.format()));
      }

      req[location] = result.data;
    }

    next();
  };
}
