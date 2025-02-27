# Guestfully

Simple client-side React application implementing a small booking system

## Stack

- React
- React Router
- Zustand
- Tailwind
- Vite
- vitest
- React testing library

## Useful commands

### Star local development

`npm run dev`

It will run the application on `http://localhost:5173/`

### Run tests

`npm run test`

### Build app

`npm run build`

### Run lint

`npm run lint`

### Format code using prettier

`npm run format`

## Notes

- Since this is only client-side application there is no data persistion after refreshing the page
- For the sake of simplicity this uses mock data for property and at the moment it's possible to book only for one property
- Many actions perfomed on the app like simulating query bookingId, get booked dates for a property etc, should be handle by backend on a real world application
