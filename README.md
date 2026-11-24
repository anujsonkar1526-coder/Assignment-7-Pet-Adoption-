# P8 --- Pet Adoption

## Student Details

-   **Student Name:** Anuj Sonkar
-   **Roll Number / UID:** 159(UID)

## Assigned Problem Statement

**P8 --- Pet Adoption**

## Live Deployment

-   **Vercel Link:** \[Add your live Vercel deployment URL here\]

## Project Overview

Pet Adoption is a React application for viewing pets and managing their
adoption status. It includes a home page, a pets listing page, a pet
details page, and an adopted pets page.

## Features

-   Reusable `PetCard` component displaying a pet's emoji, name, type,
    breed, and age.
-   Age display rule:
    -   If `ageMonths` is less than 12, show the age in months.
    -   Otherwise, show the age in years.
-   Vaccination status badge: **Vaccinated ✓** or **Vaccination
    Pending**.
-   Pets that are not vaccinated cannot be adopted; show **Vaccination
    Pending** instead of the Adopt button.
-   Adopt and Cancel Adoption actions update the pet's `isAdopted`
    status.
-   Adoption fee displays **Free** when `adoptionFee` is `0`; otherwise,
    display the fee in rupees.
-   Pet type dropdown filter with **All, Dog, Cat, Rabbit, and Bird**
    options.
-   Pet details page displays gender, vaccination status, and adoption
    fee.
-   Home page displays total pets, pets ready for adoption (vaccinated
    and not adopted), and adopted pets.
-   Adopted page displays adopted pets and the total adoption fee, or
    **No pets adopted yet** when the list is empty.

## Routes

  Route         Description
  ------------- -------------------------------------
  `/`           Home page
  `/pets`       List of pets
  `/pets/:id`   Details of a selected pet
  `/adopted`    Adopted pets and total adoption fee

## Tech Stack and Dependencies

-   React `^19.3.1`
-   React DOM `^19.3.1`
-   React Router DOM `^7.18.6`
-   Vite `^8.3.6`
-   ESLint `^9.30.0`
-   `@vitejs/plugin-react` `^6.1.2`
-   `@types/react` `^19.3.0`
-   `@types/react-dom` `^19.3.0`

## Project Structure

``` text
project-1(pet)/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── PetCard.jsx
│   ├── data/
│   │   └── pets.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── List.jsx
│   │   ├── PetDetails.jsx
│   │   └── Adopted.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Installation and Setup

Make sure Node.js and npm are installed.

1.  Clone or download this repository.

2.  Open the project folder in the terminal.

3.  Install the dependencies:

    ``` bash
    npm install
    ```

4.  Start the development server:

    ``` bash
    npm run dev
    ```

5.  Open the local URL shown in the terminal (usually
    `http://localhost:5173`).

## Available Scripts

  Command             Purpose
  ------------------- ---------------------------------------
  `npm run dev`       Starts the Vite development server
  `npm run build`     Creates the production build
  `npm run preview`   Previews the production build locally
  `npm run lint`      Runs ESLint

## Build for Production

Run the following command to create a production build:

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

## Deployment

The application can be deployed on Vercel. After deployment, replace the
placeholder in the **Live Deployment** section with the actual Vercel
URL.
