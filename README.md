# Mobile Flash Cards Udacity

## Description

This is a study companion app that allows a user to create decks with cards that have questions and answers to help with studies. The app allows the user to take quizzes on the cards created and have their results show when the quiz has been completed.

This app works on both iOS and Android devices

## Backend used

This application utilizes a backend to store the data locally on the user's device, here are the operations used from the backend:

- [`getDecks`](#getDecks)
- [`getDeck`](#getDeck)
- [`saveDeckTitle`](#saveDeckTitle)
- [`removeDeck`](#removeDeck)
- [`addCardToDeck`](#addCardToDeck)

### `getDecks`

This method gets all the decks from the local storage of the device used.

### `getDeck`

This method gets a specific deck from the local storage by providing the id of the deck.

### `saveDeckTitle`

This method creates and saves a created deck onto the local storage.

### `removeDeck`

This method removes a deck from the local storage.

### `addCardToDeck`

This method creates a new card on a deck and saves it to the local storage.

## Installation

1. Clone project to your computer using the command git clone https://github.com/FearTheBeard95/refactored-waffle.git
2. Open your terminal application and go to the directory where the project was cloned and run the following commands
   1. `yarn install` to install all the necessary dependencies required to run the app (Requires internet)
   2. `yarn start` to run the application

## Usage

1. After running `yarn start` Expo Developer tools will run on the browser at [http://localhost:19002](http://localhost:19002/)
2. Using your device to test
   1. Install the [Expo Client App](https://expo.io/tools#client)
   2. Scan the QR code on the Expo Developer tools in the browser
3. Using emulators
   1. [iOS Simulator Setup](https://docs.expo.io/versions/v33.0.0/introduction/installation/#ios-simulator)
   2. [Android Emulator Setup](https://docs.expo.io/versions/v33.0.0/introduction/installation/#android-emulator)
