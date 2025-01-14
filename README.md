# Joke Fetcher Application

This project is a simple web application using Node.js and Express that fetches jokes based on user-selected categories, languages, and types from the JokeAPI. The frontend is served with EJS templating engine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js version 12.x or later.
- You have a basic understanding of JavaScript and Node.js.

## Installation

Follow these steps to get your development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/joke.git
   ```
2. Navigate to the project directory:
   ```bash
   cd joke
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

No additional setup is required for the basic functionality.

## Running the Application

To run the application, execute the following command in the root of your project directory:

```bash
nodemon index.js
```

If you do not have nodemon installed globally, you can install it via npm:

```bash
npm install -g nodemon
```

Alternatively, you can start the server using Node directly:

```bash
node index.js
```

## Usage

Once the server is running, open a web browser and navigate to `http://localhost:3000` to access the application. Select the desired joke criteria and click the GET button to fetch a joke.
