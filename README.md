## Running locally

- `git clone` this repo
- `cd jest-enzyme-with-react`
- `npm install`
- In one tab, run `npm run watch`. This will fire up Webpack and rebuild your app on each change.
- In another tab, run `npm start`. This will fire up a local server that will refresh automatically when the code changes. (here we have included 2 scripts in "npm start" - "start:server" and "watch:webpack". If you face any issue while "npm start", try running "watch:webpack" first in a different console, and then run "start:server", since both are synchronous tasks)
- `open http://localhost:8081` to view to the app.

## Tests

Run `npm test` to run the tests with Jest and the coverage.

Open coverage/lcov-report/index.html in browser to see the browser view of the test case coverage

Run `npm run watch` to run Jest and have it automatically rerun everytime you change a file. (watch only shows the test files changed, not all of the test cases)