This is a template for fronetend project based on Alloy - Keysight GUI lib.

The following tools are used and explained:
# 1. Eslint
ESLint is a popular JavaScript linter that helps identify and report issues in your code based on predefined rules or custom configurations.Two files are related to this.
* 1.eslintrc.js
The configuration file specifies how to restrict the code. Since this project is based on TypeScript, it requires configuring the use of the TypeScript parser and plugin. The parser and plugin need to be installed separately (already included in the devDependencies of package.json).
"parser": Specifies the parser to be used.
"plugin": Specifies the plugin to be used.
"rules": Defines the code conventions. "error" indicates that a violation will result in an error and prevent compilation. "warn" will only produce a warning without blocking compilation."off" will disable the check for this rule.
* 2 .eslintignore 
This file specifies which files should be ignored and not processed by ESLint. Make sure to include public libraries or bundle files in this file.

Before publishing, make sure to follow these steps:
# run 'npm run rulescheck'
This command utilizes ESLint to check the adherence to code rules and conventions. It helps identify and report any issues or violations in your code. Ensure that your code passes the ESLint checks before proceeding.
# run 'npm run format'
This command utilizes Prettier to automatically format your code according to predefined rules. It helps maintain consistent code formatting throughout the project. Running this command ensures that your code is properly formatted before publishing.
# run 'ng build'
This command triggers the Webpack bundler to package your code and generate the necessary bundles for your application. It prepares your code for deployment by creating optimized production-ready bundles.