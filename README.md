# Image Processing API

## _Udacity Advanced Web Development Project_

## Summary

This project aims to give a real-world scenario using read and write to disk via a Node.js express server rather than a database.

## Development Approach

* Initial new node / typescript project.
* Configure EsLint and Prettier.
  * (using lint --fix script will run both eslint then prettier).

* Setup Jasmine and related folder structure.
* Install Express and Sharp.
* Create endpoint for the project with unit tests.

## Endpoints

One API endpoint as per the following specification:

* URL: (<http://localhost:5000/api/v1/images>).
* Query parameters:
  * filename (only accept jpg types).
  * width (number)
  * height (number)

Example: <http://localhost:5000/api/v1/images?filename=icelandwaterfall.jpg&width=500&height=500>

## Project Structure

    .
    ├── build                   # Compiled files
    ├── images                  # Images files (with full & thumb sub folders)
    ├── spec                    # Test configuration
    ├── src                     # Source files
    │   ├── routes                # API End-Points Routes
    │   └── services              # One imageResize service.
    │   └── tests                 # Unit tests.
    │   └── utils                 # Utility (simple logger middleware added for check visited API).
    │   └── index.ts              # Server side root app file.
    ├── LICENSE
    └── README.md

## Scripts

* yarn build - Compile src .ts files into build directory.
* yarn start - Start development server using nodemon.
* yarn prod -  Build then Start production.
* yarn jasmine - Execute unit tests.
* yarn test - Compile then execute unit tests.
* yarn lint - Check for linting errors.
* yarn prettier - Run prettier.
