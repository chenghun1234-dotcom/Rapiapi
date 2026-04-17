# MCP Config Auto-Generator

**Overview:** This is a Cloudflare Workers script that automatically generates MCP configuration files based on your Swagger/OpenAPI specification (spec). 

**How it Works:** 
1.  This script takes the input data from the swagger file, parses it using the `fetch` API, and extracts the required information for MCP. 
2. The script includes a RapidAPI authentication process to ensure secure access to your backend APIs.
3. It returns the generated configuration in a structured JSON format.

**Configuration:**

*   You'll need to replace `"your_rapidapi_secret"` with your actual RapidAPI secret key from within the `wrangler.toml` file. 

**Usage:**


1.  Deploy this script as a Cloudflare Workers worker, allowing it access to your Swagger/OpenAPI specification at the `/generate_config` endpoint.
2.  Make a POST request to this endpoint with your API specifications in JSON format. 
3.  The response will be an object containing a success message and the generated MCP config.

**Example:**