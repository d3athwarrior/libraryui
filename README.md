# Libraryui

This project is a sample front end for `libraryservice`

**NOTE:** This project will not work without the backend service as of now.

Sample Screenshots are available in the `screenshots` folder in the current directory.

Assumptions, known issues and scope of improvement are mentioned at the end of this README.

## Tech Stack

1. Angular 13 (Features introduced with Angular 13 might not have been used)
2. [Angular Material Components](https://material.angular.io/)
3. IntelliJ IDE for development and debugging
4. Arch Linux
5. NodeJS `v16.13.0`
6. npm `8.1.3`
7. [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Environment Setup

1. Install node v16 (LTS version) for the platform of your choice
2. Install the latest version of npm for the platform of your choice
3. Install angular cli for your platform using instructions [here](https://angular.io/cli)
4. Open the project root in a terminal(CMD for the windows folks) and run npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` or `npm run build`to build the project. The build artifacts will be stored in the `dist/` directory.  
NOTE: It is assumed that the libraryservice is running on localhost:8080 if not then please change the apiURL
in `environment.prod.ts`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

**NOTE:** Only the default tests exist, additional unit tests have not been written for the UI

## Features

### Available

1. View the list of books in the library (borrow_screen_list_view.png)
2. View the list of books issued to the logged-in user (my_books_view.png)
3. Issue a book from the borrow list by clicking on the borrow button (borrow_screen_successful_borrow.png)
  1. The borrow button is disabled if the number of available copies is 0 (borrow_screen_disabled_borrow_button.png)
4. Error shown when user tries to borrow more than one copy of a book (
   error_while_trying_to_borrow_more_than_one_copy.png)
5. Pagination on the list of books in library

### Future

1. Add better error dialog box
2. Display current username on the screen
3. Filter, sort books
4. Admin functionality to manage all books/user
5. Better error display on login screen
6. User should not be logged out on refresh
7. Display message when book is returned successfully
8. Graceful exception handling for the http requests.

## Assumptions, known issues and scope of improvement

1. The application will have a backend running when it is started and accessed.
2. The application will be run on a local server itself
3. The two screens which have been added separately as of now could have been just a single screen but to segregate the
   books issued to the user and available in the library, they have been kept separate.
4. The login screen will not show error in case of any invalid user id.
5. The login screen takes input as numbers and has no password this needs to be improved upon and must be replaced with
   OAuth.
6. The borrow.component.ts and my-books.component.ts have certain common code which could have been moved into a common
   component and then these could have extended that component. Similarly for the View for those components.
7. Possibly, the config could have been in a separate config.json file which then could have been imported into the
   app.component.ts or as a service available throughout the application. This has not been done since the current
   application is assumed to be run on local.
8. The data sources in the tables could have been made compatible with async pipe instead
9. Refreshing the application takes you back to the login screen
10. The UI is not designed keeping responsive design in mind, so it may not perform well when viewed on smaller screens
11. Currently, the exceptions thrown by HTTP services are completely ignored, which could lead to the loader being
    displayed indefinitely or the user not being able to log in but not know why. This needs to be handled gracefully
