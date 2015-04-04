# Email Slayer

Emails are hard.

Email Slayer is built off of [Zurb Ink](http://nodejs.org), with a few additional niceities. It's integrated with Sass & a gulp inliner to help coding email a little less painful.

Enjoy.

### 1. Install global dependancies (one time installation)

  * [Node.js](http://nodejs.org)
  * [bower](http://bower.io): `[sudo] npm install bower -g`
  * [grunt.js](http://grunt.js); `[sudo] npm install --global gulp`

### 2. Install local dependancies (for each new instance)

  * Download Zip or `bower email-slayer`
  * cd to project folder
  * run `[sudo] npm install` (first time users)
  * run `gulp` to initiate sass & watch (`ctrl + c` to stop watch task)
  * run `gulp smoosher` to bring responsive grid on page within a `<style>` tag
  * run `gulp inlineCss` to to move css inline



