# Image Processing API

## _Udacity Advanced Web Development Project_

## Summary

This project aims to give a real-world scenario using read and write to disk via a Node.js express server rather than a database.

## Development Approach

- Initial new node / typescript project.
- Configure EsLint and Prettier.
  - (using lint --fix script will run both eslint then prettier).

- Setup Jasmine and related folder structure.
- Install Express and Sharp.
- Create endpoint for the project.

## Endpoints

One API endpoint as per the following specification:

- URL: (<http://localhost:5000/api/v1/images>).
- Query parameters:
  - filename (only accept jpg types).
  - width (number)
  - height (number)

Example: http://localhost:5000/api/v1/images?filename=icelandwaterfall.jpg&width=500&height=500

## Project Folder Structure
