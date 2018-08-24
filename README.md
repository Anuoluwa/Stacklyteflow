# LyteStackOverflow  [![Build Status](https://travis-ci.org/Anuoluwa/LyteStackOverflow.svg?branch=develop-api-v1)](https://travis-ci.org/Anuoluwa/LyteStackOverflow) [![Maintainability](https://api.codeclimate.com/v1/badges/7d59d3f2033f510ca92f/maintainability)](https://codeclimate.com/github/Anuoluwa/LyteStackOverflow/maintainability) [![Coverage Status](https://coveralls.io/repos/github/Anuoluwa/LyteStackOverflow/badge.svg?branch=develop-api-v1)](https://coveralls.io/github/Anuoluwa/LyteStackOverflow?branch=develop-api-v1)

## Project Overview
StackOverflow-lite clone is a platform where people can ask questions and provide answers.



## Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
    * [Additional Feature](#additional-feature)
 * [API Endpoints](#api-endpoints)
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Testing](#testing)
    

### Pivotal Tracker
Project is currently being built with the Project Management Tool, Pivotal Tracker at []()

### Template


### API Deployment


## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework

### Supporting Packages

#### Linter(s)

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test Tools

* [Mocha](https://mochajs.org/) - JavaScript Test Framework for API Tests
* [Supertest]() - 
* [Chai](http://chaijs.com/) - TDD/BDD Assertion Library for Node

## Features

* Users can create an account and log in.
* Users can post questions.
* Users can delete the questions they post.
* Users can post answers.
* Users can view the answers to questions.
* Users can accept an answer out of all the answers to his/her question as the preferred
answer.

## Additional Feature

* Users can upvote or downvote an answer.
* Users can comment on an answer.
* Users can fetch all questions he/she has ever asked on the platform
* Users can search for questions on the platform
* Users can view questions with the most answers.

## API Endpoints

###

<table>

<tr><th>HTTP METHOD</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>GET</td> <td>api/v1/questions</td> <td>Get All Questions</td></tr>

<tr><td>GET</td> <td>api/v1/questions/:questionId</td> <td>Get a Question</td></tr>

<tr><td>POST</td> <td>api/v1/questions</td> <td> Add a question</td></tr>

<tr><td>POST</td> <td>api/v1/questions/:questionId/answers</td> <td>Add answer to a Question</td></tr>

</table>

## Getting Started

### Installation

* git clone
  []()
* Run `npm install` to install packages
* Run `npm start` to start the server
* Navigate to [localhost:3000](http://localhost:3000/) in browser to access the
  application

### Testing

#### Prerequisites

* [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

* After installing as shown above
* Navigate to [localhost:3000](http://localhost:4000/) in
  [Postman](https://getpostman.com/) to access the application

MIT License

Copyright (c) 2018 Anuoluwapo APITI
