const fs = require("fs");
const path = require("path");

const readmePath = path.join(__dirname, "../../../README.md");
const readme = fs.readFileSync(readmePath).toString();
const newReadme = '';

if(readme.includes('<!-- EXAMPLES-LIST:START -->') && readme.includes('<!-- EXAMPLES-LIST:END -->')) {
    newReadme += readme.split('<!-- EXAMPLES-LIST:START -->')[0];

    newReadme += 'THIS WILL BE GENERATED 🥳';

    newReadme += readme.split('<!-- EXAMPLES-LIST:END -->')[1];
}

fs.writeFileSync(readmePath, newReadme);