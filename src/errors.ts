export class DatadogError extends Error {
  data: ServerError;
  constructor(body: ServerError) {
    let message = "BUG: no error type";
    switch (body._type) {
      case "simple":
      case "rich":
        message = body.errors.join(" & ");
        break;
      case "html":
        message = body.code;
        break;
    }
    super(message);

    Error.captureStackTrace(this, new.target);

    this.name = "DatadogError";
    this.data = body;
  }
}


//------------------
// Error Handling

// Datadog can return a few different shapes of error
// Let's make an artificial descriminated union so Typescript is more helpful
// We'll then throw a consistent DatadogError wrapped around whichever is given.
export type ServerError = SimpleError | RichError | HtmlError;

export function recognizeError(data: unknown): ServerError | null {
  if (isRichError(data)) {
    data._type = "rich";
    return data;
  } else if (isSimpleError(data)) {
    data._type = "simple";
    return data;
  } else if (isHtmlError(data)) {
    data._type = "html";
    return data;
  }
  return null;
}

/** Error often returned for validation errors and other endpoint-specific checks */
export interface SimpleError {
  "_type": "simple";
  "errors": string[];
}
function isSimpleError(err: any): err is SimpleError {
  return err &&
    Array.isArray(err.errors) &&
    typeof err.errors[0] === "string";
}

/** Error for general API problems such as missing auth */
export interface RichError {
  "_type": "rich";
  "errors": string[];
  "status": "error" | string;
  "code": 400 | 403 | number;
  "statuspage": string;
  "twitter": string;
  "email": string;
}
function isRichError(err: any): err is RichError {
  return err &&
    Array.isArray(err.errors) &&
    typeof err.errors[0] === "string" &&
    typeof err.status === "string" &&
    typeof err.code === "number" &&
    typeof err.statuspage === "string" &&
    typeof err.twitter === "string" &&
    typeof err.email === "string";
}

/** Generic error from the overall web server */
export interface HtmlError {
  "_type": "html";
  "code": string;
  "message": string;
  "title": string;
}
function isHtmlError(err: any): err is HtmlError {
  return err &&
    typeof err.code === "string" &&
    typeof err.message === "string" &&
    typeof err.title === "string";
}
