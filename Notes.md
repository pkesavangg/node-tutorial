// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// npm uninstall -g <packageName>
// sudo pm install -g <packageName> (mac)
// package, json - manifest file (stores important info about project/package)'
// manual approach (create package json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// For pushing the project into git repo
// Create a repo in git hub
// git init in project
// git remote add origin https://github.com/pkesavangg/node-tutorial.git
git branch -M main
git push -u origin main

// for Installing the dev dependencies
// DevDependencies are the packages a developer needs during development.
// npm i nodemon -D or --save-dev to install nodemon dev dependencies