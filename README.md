# Email Slayer

 *Email Slayer makes building responsive emails easy and *extremely* efficient. Here's How:*
* It's built off of [Zurb's Ink](http://zurb.com/ink/) framework for responsive emails.
* It's written in [Sass](http://sass-lang.com/) because it's 2015.
* It brings all your CSS inline with a simple cmd line / terminal command.
* It even brings your media queires into the `<head>` of your file.

### Global Dependancies (one time installation)

  * Download and install [Node.js](http://nodejs.org) (If you haven't already)
  * Install Gulp globally [grunt.js](http://gulpjs.com/) `$ [sudo] npm install gulp -g` (If you haven't already)
  * *(Optional) Email Slayer can also be downloaded through [Bower](http://bower.io/#install-bower)*  `$ [sudo] npm install -g bower` to install bower globally

### Getting started
  * [Download Zip](https://github.com/whatsnewsaes/Email-Slayer/archive/master.zip) or download through Bower `$ bower install email-slayer`
  * From your terminal / cmd line CD to the root of the project folder
  * run `[sudo] npm install` (This will download all Email Slayer gulp dependancies necessary to run this project)

### Using Email Slayer
  * run `$ gulp` to initiate sass & watch (`ctrl + c` to stop watch task)
  * run `$ gulp build` to compile all of the .html files from your `_input` folder to a fully inlined version in the `_output` folder.

### Work Files
```
Email-Slayer/
├── _input/
│   └── Sass/+
│   └──  basic.html
│   └──  hero.html
│   └──  sidebar-hero.html
│   └──  sidebar.html
```

### License
Email Slayer if free to use under the [MIT License](https://github.com/whatsnewsaes/Email-Slayer/blob/master/License.md) Copyright © 2015 [Seth Coelen](http://sethcoelen.com)

### Acknowledgement
Email Slayer was forged in the annals of my basement, not with love, but with pity for those who have to code emails on a regular basis.



