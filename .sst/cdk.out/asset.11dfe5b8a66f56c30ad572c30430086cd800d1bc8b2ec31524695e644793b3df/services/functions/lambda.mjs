import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// services/functions/lambda.ts
async function handler() {
  return {
    statusCode: 200,
    body: 10
  };
}
__name(handler, "handler");
export {
  handler
};
