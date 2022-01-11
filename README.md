# CoinGecko Application (React Native)

Test application for CoinGecko API V3 (https://www.coingecko.com/api/documentations/v3#/)

<img src="https://i.ibb.co/pfStVpC/Simulator-Screen-Shot-i-Phone-8-2022-01-11-at-15-06-43.png" width="186">

<img src="https://i.ibb.co/LztzGKf/Simulator-Screen-Shot-i-Phone-8-2022-01-11-at-15-06-49.png" width="186">

## How to run

Download on your Android device coin_gecko.apk file in the root of this repo. Just install and run.

## About project structure

```
.
└─src/
├── components/
├── core/
│ ├── models
│ ├── services
│ ├── store
│ └── environment.ts
│ └── appConstants.ts
│ └── api.ts
├── screens
├── navigation
└── App.tsx

```

## Core

This folder contains everything for interacting with the server, the global storage, etc.

This folder contains:

**environment.ts** - this file stores application configuration variables (for example, it can store data required to interact with the API)

**appConstants.ts** - this file contains all the constants that are used in the application.

**models** - models describes data that come from the backend are stored in this folder.

**services** - this folder stores services, thanks to which communication with the backend takes place.

**store** - this folder stores global redux schemes - actions, reducers, etc.

**api.ts** - this file contains an instance of an HTTP client (axios), which is used by services and which mutates these requests in some way (to transfer any headers, for example).

## Others

**components** - folder of shared components

**navigation** - the application navigation tree is stored in this folder.

**app.tsx** - root component of the application.
