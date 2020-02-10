Implements [AT-xxxx](https://nobellabs.atlassian.net/browse/AT-xxxx).

### Changes proposed in this `PR`

-   
-   
-   

&nbsp;
### **\[Check List\]**

#### \[Flow, Lint, Prettier error checks\]

-   [ ] The code is not pushed with `--no-verify` flag

-   [ ] The code doesn't have any **Flow** type errors. Please do following:

    -   execute `killall flow`
    -   execute `yarn flow`
    -   delete or comment out any Flow type
    -   execute `yarn flow`
    -   revert previous change
    -   execute `yarn flow`
    -   there should be no Flow errors reported in the console

-   [ ] There are no new `$Flow` comments.

    _**Reason:**_ _Description here._

-   [ ] The code doesn't have any **lint** errors. Please execute: `yarn lint` or `npm run lint`.

-   [ ] The code doesn't have any **prettier** errors. Please execute:

    ```shell
    prettier --write --single-quote --print-width=120 --trailing-comma=all **/src/**/*.js`.
    ```

&nbsp;
#### \[PR Common checks\]

-   [ ] Format of the PR name: `[AT-xxxx]: Title`

-   [ ] Branch name: `feature/AT-xxxx-short-title`

-   [ ] Changes introduced by this PR should not break any existing functionality

-   [ ] UI changes follow design provided in [Figma](https://www.figma.com/file/please-update-this-url)

-   [ ] Flow errors are not added/fixed at the end of implementation 

-   [ ] The `PR` should have the following commit list structure due to readability:

    -   AT-xxxx | Task 1 short description
    -   AT-xxxx | Task 2 short description
    -   AT-xxxx | Unit tests updated
    -   AT-xxxx | Unit tests implemented
    -   AT-xxxx | Snapshots updated
    -   AT-xxxx | CR Updates

-   [ ] The `PR` is not too large (**15** max new files)

-   [ ] A new `PR` is created for changes related to common component(s)

-   [ ] The `PR` affects current UI. Screenshot(s) is/are available below:

    ![Screenshot #1](https://via.placeholder.com/300px)

-   [ ] New package(s) is/are added or existing one(s) is/are updated. Flow typed is updated. Please do following:

    -   **delete** `node_modules` directory
    -   **delete** `flow-typed` directory
    -   `yarn install`
    -   `yarn flow-typed`

-   [ ] Snapshots are updated

&nbsp;
#### \[Console checks\]

-   [ ] There are no `console` calls in the code
-   [ ] There are no console errors or warnings while running the Unit tests
-   [ ] There are no console errors or warnings while testing the feature locally

&nbsp;
#### \[Code styling checks\]

-   [ ] There is no redundant code
-   [ ] New helper functions don't have more than **10** lines of code
-   [ ] React component doesn't have more then **150** lines of code
-   [ ] Spacings (margins and paddings) use `theme.spacing` syntax
-   [ ] A new line is added after each block of code (**loops**, **if** statements, ...)
-   [ ] Hard coded values are moved to separate constants (new `constants.js` file or below the imports)
-   [ ] Redundant code is moved into new helper function(s)
-   [ ] Multiple referencing to the same property in nested object should be replaced with the constant due to readability and performance

&nbsp;
#### \[Unit Tests checks\]

-   [ ] Unit test(s) is/are updated

-   [ ] New Unit test(s) is/are implemented

-   [ ] Unit tests coverage is:

    -   [ ] decreased ↘

    -   [ ] increased ↗

        _**Reason:**_ _Description here._
    
        _Previous coverage:_
   
        | branches | functions | lines | statements |
        |     ---: |      ---: |  ---: |       ---: |
        |       10 |        20 |    30 |         40 |

        _Current coverage:_

        | branches | functions | lines | statements |
        |     ---: |      ---: |  ---: |       ---: |
        |        9 |        19 |    29 |         39 |

&nbsp;
#### \[Konva - Performance checks\]

-   [ ] Manipulation with holes (pattern 30x30) should not slow down performance
-   [ ] Avoid unnecessary re-renders

&nbsp;
#### \[React - Performance checks\]

-   [ ] Avoid unnecessary re-renders

&nbsp;
#### \[QA checks\]

-   [ ] Input fields, buttons and sections have unique id. You can use hard coded `className`s as well.

@nobellabs/frontend: Could you please code review this PR? Thanks.
