# Toy Bot

![ToyBot logo](https://github.com/praneybehl/toybot/raw/master/toybot.png) ![Node CI](https://github.com/praneybehl/toybot/workflows/Node%20CI/badge.svg)  [![tscov](https://img.shields.io/badge/dynamic/json.svg?label=tscov&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.minCoverage&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjeroenouw%2Fliftr-tscov%2Fmaster%2Fpackage.json)](https://github.com/jeroenouw/liftr-tscov)

```
    _____                   ____            _       ____    _                       _           _
   |_   _|   ___    _   _  | __ )    ___   | |_    / ___|  (_)  _ __ ___    _   _  | |   __ _  | |_    ___    _ __
     | |    / _ \  | | | | |  _ \   / _ \  | __|   \___ \  | | | '_ ` _ \  | | | | | |  / _` | | __|  / _ \  | '__|
     | |   | (_) | | |_| | | |_) | | (_) | | |_     ___) | | | | | | | | | | |_| | | | | (_| | | |_  | (_) | | |
     |_|    \___/   \__, | |____/   \___/   \__|   |____/  |_| |_| |_| |_|  \__,_| |_|  \__,_|  \__|  \___/  |_|
                    |___/
```
**Toy Robot Simulator V1- interactive command-line application for coding challenge.**

## Table of Contents

* [Background](#user-content-background)
* [Description](#user-content-description)
* [Considerations & Decisions](#considerations--decisions)
* [Tech Used](#user-content-tech-used)
* [Testing](#user-content-testing)
* [Continuous integration & testing](#continuous-integration--testing)
* [Input Formats](#input-formats)
* [Installation and Prerequisites](#user-content-installation-and-prerequisites)
* [Getting Started](#user-content-getting-started)
* [Directory Structure](#user-content-directory-structure)
* [Consistent code styles & standards](#user-content-consistent-code-styles--standards)
* [Version Control](#user-content-version-control)
* [NPM scripts dictionary ](#user-content-npm-scripts-dictionary)

# Background
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.  Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

Create a console application that can read in commands of the following form -

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.

The origin (0,0) can be considered to be the SOUTH WEST most corner.

It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command.
The application should discard all commands in the sequence until a valid PLACE command has been executed.
MOVE will move the toy robot one unit forward in the direction it is currently facing.
LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

REPORT will announce the X,Y and F of the robot.  This can be in any form, but standard output is sufficient.
A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
Input can be from a file, or from standard input, as the developer chooses.

Provide test data to exercise the application.

It is not required to provide any graphical output showing the movement of the toy robot.


# Description
ToyBot is an interactive command-line application via command-line prompts.
This application showcases a minimalistic design with an strong focus on user-experience, testing and strong design principles for **production ready** application.

## Considerations & Decisions
I must say I had fun working on this coding challenge. Several considerations and decisions were made while attempting this coding challenge.


The solution to this coding challenge takes more functional approach to programming while not being baised for it.

**_`Language choice:`_**
- I decided to use Node.js for this project as Javascript/Typescript over Python as my stronger skill keeping time constraints in mind for deliverability. However, it could have been fun to build in Python as well.

**_`Typescript:`_**
- For static types checking, code completion intellisense for better developer experience and helps prevent type conversion bugs early on.

**_`Possible Improvements:`_**
- Further improvement can be made to this solution. Due to limitation of time, I decided to write tests for more critical parts of the solution, this can be improved by adding more coverage.
- Further inline jsDoc comments can be added for improving the functional docs.


## Tech used
This project mainly relies on the following platform, tools and libraries:
Node.js, TypeScript, jest, tsdocs, tscov.

## Testing
For testing, this project is setup with the following testing tools and libraries:

`Unit tests: jest`
`Typescript coverage: tscov`
`Linting: eslint`


## Continuous integration & testing
This project uses [Github Actions](https://github.com/praneybehl/toybot/actions) for CI pipelines for continuous build and testing.

## Input Format
This application allows the user to provide input in multiple formats, using .txt file, .json file and interactive commandline.
Sample file input data is provided in the `.sample-input/` folder for your reference.

### Command-line interface(CLI)
When you start the application, it automatically takes you into the command-line interface where you can provide commands for placing and moving the toy robot.
All commands in the CLI are validated.

**HELP on commands can be found by type `HELP` in the command prompt**

`**Command Options**`

`Interactive command-line input`
```shell

    _____                   ____            _       ____    _                       _           _
   |_   _|   ___    _   _  | __ )    ___   | |_    / ___|  (_)  _ __ ___    _   _  | |   __ _  | |_    ___    _ __
     | |    / _ \  | | | | |  _ \   / _ \  | __|   \___ \  | | | '_ ` _ \  | | | | | |  / _` | | __|  / _ \  | '__|
     | |   | (_) | | |_| | | |_) | | (_) | | |_     ___) | | | | | | | | | | |_| | | | | (_| | | |_  | (_) | | |
     |_|    \___/   \__, | |____/   \___/   \__|   |____/  |_| |_| |_| |_|  \__,_| |_|  \__,_|  \__|  \___/  |_|
                    |___/
Toy Robot Simulator V1- interactive command-line application for coding challenge

Starting ToyBot Simulator V1!

Enter command
> PLACE 0,0,NORTH
> MOVE
> REPORT
Output:  0, 1, NORTH

```


## Installation and Prerequisites

### Node.js

Install [Node.js](https://nodejs.org/en/download/). And use the latest version of NodeJS (>= v10).


## Getting started

1. Clone this repo
```bash
$ git clone https://github.com/praneybehl/toybot
$ cd toybot
```

2. NPM scripts dictionary Install Dependencies
```bash
$ npm install
```

3. Build the project and start the application.
```bash
$ npm start
```

4. Build the project for production.
```bash
$ npm run build
```

5. Run Linting and Unit tests.
```bash
$ npm run test
```

6. Run Types coverage.
```bash
$ npm run tscov
```

### Use as an executable
The project is build with executable support, i.e. once installed it can be run simply by running `toybot` in your terminal.
For globally installing the `toybot` executable run:
```bash
$ npm run global
```
This would install the project as global npm package and run it. Thereafter, you can just run the application using:
```
toybot
```

## Directory Structure

The structure of the project follows the below hierarchy:

The project doesn't make use of any frameworks and just the simple setup.
Below you can find full details about significant files and folders.

```bass
.                                       // Project folder.
├── bin                                 // Node excutable folder
├── .sample-input                       // Sample input files.
├── src                                 // All app source lies here
│   ├── actions                         // Actions for execution steps
│   ├── constants                       // Constants
│   ├── parser                          // File data parser functions.
│   ├── questions                       // Command-line question prompts
│   ├── utils                           // Logger utilities functions.
│   ├── main.ts                         // Main entry point and cli interaction.
│   ├── simulator.ts                    // Toy robot simulation class.
│   ├── table.ts                        // Table class with contraints to robot placement and movement coordinates.
│   ├── table.spec.ts                   // Table class tests.
│   ├── toybot.ts                       // Toy robot class.
│   ├── table.spec.ts                   // Toy robot class tests.
├── .jest.config.js                     // Jest Testing config..
├── .editorconfig                       // Editor configuration.
├── .gitignore                          // Files & folders ignored from version control.
├── .npmrc                              // NPM registry configuration.
├── .nvmrc                              // Node version configuration.
├── CHANGELOG.md                        // Automatically generated release notes and change logs.
├── package.json                        // Project dependencies.
├── tsconfig.json                       // TypeScript configuration.
├── tslint.json                         // TypeScript linting configuration.
└── README.md                           // Documentation for project.
```


## Consistent code styles & standards
Use of Typescript for strong & static type checking, unit tests, es-lint, prettier and git-commit hooks with [Husky](https://github.com/typicode/husky)
for delivering **Consistency** and **Reliability**.


## Version Control
This project is git version controlled along with [Conventional Commits](https://www.conventionalcommits.org/)
specification for adding human and machine-readable meaning to commit messages.
Conventional-Commit messages improve **Readability** of commit message and **Automatic Changelogs Generation** for semantic versioning and Release notes. See [CHANGELOG.md](https://github.com/praneybehl/toybot/blob/master/CHANGELOG.md) for details.

[Reference](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-header)
```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|platform-webworker|
  │                          platform-webworker-dynamic|router|service-worker|upgrade|zone.js|
  │                          packaging|changelog|dev-infra|docs-infra|migrations|ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```


## NPM scripts dictionary

`npm start`:			Build and Start application.
`npm run  build`:		Creates a production build.
`npm run test`:			Run linting & unit tests.
`npm run test:unit`:	Run unit tests only.
`npm run lint`:		    Run linting.
`npm run global`:	    Builds application and installs it as global package, exposed global name `Zombieland`.
`npm run clean:some`:	Cleans the ./lib and ./docs folders.
`npm run clean:all`:	Cleans node_modules, package-lock and above.
`npm run tscov`:        Runs typescript coverage report.
`npm run release`:        Runs standard-version to bump version, and generate changelogs.
`npm run publish-package`: Builds and publishes package to npm.
`npm run docs`:         Build documentation using tsdocs.
