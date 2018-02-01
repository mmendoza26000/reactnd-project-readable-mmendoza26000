# MyReads App

This is the React App "Readable" developed for Udacity's React Nanodegree, by Manuel Mendoza (mmendoza26000@gmail.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

In order to use the App in this repository you must have in your computer:

```
git (download from https://git-scm.com/)
```

and 
```
npm (download from https://www.npmjs.com/get-npm)
```

You also need a working copy of a backend server. You can download and install Udacity's "Readable Starter" server at
```
https://github.com/udacity/reactnd-project-readable-starter
```
Please install and run using the instructions found in the URL above.


### Installing

To install this app in your computer,

clone the repository

```
git clone https://github.com/mmendoza26000/reactnd-project-readable-mmendoza26000.git
```

'cd' into the new directory, and install dependencies with npm

```
npm install
```

Start the server with:
```
npm start
```

### Running the App

If your browser doesn't open automatically with the app, start your browser and point it to:
```
http://localhost:3000
```

## Technical comments
Uses Material-UI for the UI, so some components use inlineStyles since the library requires it.

When adding a new post, if the new post is created inside a category view, the new post will have that category preselected an cannot be edited.

When adding a new post all fields are required. The “submit post” button won’t enable until all fields have values.

Adding and deleting a comment forces a refetch of the parent post to get the new number of comments.


