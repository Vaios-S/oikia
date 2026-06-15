# OIKIA

## Description

OIKIA is a simple web application developed for educational purposes and experimentation with core front-end development concepts.

## Purpose

The main goal of this project was to practice and understand:

- User Authentication
- Route Protection (Guards)
- Page Redirection
- Local Storage Management
- Form Handling and Validation
- Basic State Persistence in the Browser
- Modular JavaScript Structure

## Features

### Authentication System

Users can:

- Create an account
- Log in using their credentials
- Stay authenticated through browser storage
- Log out from the application

Authentication data is stored locally using the browser's Local Storage.

### Route Guard

Protected pages cannot be accessed unless a user is authenticated.

If no authenticated user is found, the application automatically redirects the user to the login page.

### Task Management

Authenticated users can:

- Create personal tasks
- Store tasks locally in the browser
- Access their own task list after logging in

Each user's tasks are stored separately using a user-specific Local Storage key.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Local Storage API

No external frameworks or back-end services are used in this project.

## Setup

1. Clone or download the project.
2. Open the project folder.
3. Run the application using a local development server.

Example using VS Code Live Server:

- Install the Live Server extension.
- Right-click `login.html` or `index.html`.
- Select **Open with Live Server**.

## Educational Notes

This project was built primarily as a learning exercise to explore browser-based authentication flows and client-side application architecture.

It demonstrates how authentication, authorization guards, redirections, and local data persistence can be implemented without relying on a back-end service.
