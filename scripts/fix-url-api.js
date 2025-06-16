const fs = require("fs");
const path = require("path");

const runtimePath = path.join(__dirname, "../src/api_url/runtime.ts");

if (fs.existsSync(runtimePath)) {
  let content = fs.readFileSync(runtimePath, "utf8");

  // Replace localhost with your host
  content = content.replace(/http:\/\/localhost/g, "https://myhost.com");

  // Also replace any default base path
  content = content.replace(
    /const BASE_PATH = [^;]+;/,
    'const BASE_PATH = process.env.NEXT_PUBLIC_API_URL_IMG?.toString().replace(/\\/+$/, "");'
  );

  fs.writeFileSync(runtimePath, content);
  console.log("Runtime base path fixed");
} else {
  console.log("Runtime file not found");
}
