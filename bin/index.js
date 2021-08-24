#!/usr/bin/env node
const program = require("commander");
const inquirer = require("inquirer");
program
  .version(require("./../package.json").version)
  .option("-v, --version", "output the version number")
  .option("-a, --auther", "output package auther name");

program
  .command("init <projectName>")
  .description("input create project name")
  .action((projectName) => {
    console.log(`init ${projectName}`);
  });

program
  .command("build")
  .description("input create project name")
  .action(() => {
    console.log("build");
  });

program
  .command("start")
  .description("input create project name")
  .action(() => {
    console.log("start");
  });

program.parse(process.argv);
