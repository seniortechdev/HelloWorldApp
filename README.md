# HelloWorldApp

HelloWorldApp is a simple React Native application created using Expo. It demonstrates the usage of `expo-image-picker` (version 13.0.3) and `react-native-snap-carousel` to pick images from the device's gallery and display them in a carousel.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a basic React Native application that utilizes Expo's image picker to allow users to select multiple images from their gallery. The selected images are then displayed in a carousel using `react-native-snap-carousel`.

## Features

- Select multiple images from the device's gallery.
- Display selected images in a carousel.
- Simple and easy-to-understand codebase.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/seniortechdev/HelloWorldApp.git
    cd HelloWorldApp
    ```

2. Install the dependencies:

    ```bash
    npm install
    npx expo install
    ```

3. Install the required dependencies:

    ```bash
    npx expo install expo-image-picker@13.0.3
    npm install --save react-native-snap-carousel
    ```

## Usage

To start the development server and run the app:

1. Clear the Metro bundler cache and start the app:

    ```bash
    npx expo start
    ```

2. Use the Expo app on your Android or iOS device to scan the QR code and run the app. Alternatively, use an Android or iOS emulator.

## Components

### ImagePickerComponent

A component to pick images from the device's gallery using `expo-image-picker`.

### CarouselComponent

A component to display the selected images in a carousel using `react-native-snap-carousel`.

## File Structure

HelloWorldApp

├── assets

├── node_modules

├── .gitignore

├── App.js

├── ImagePickerComponent.js

├── CarouselComponent.js

├── app.json

├── babel.config.js

├── package.json

└── index.js

