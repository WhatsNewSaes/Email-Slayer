module.exports = function(grunt) {
    grunt.initConfig({


          sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                "_input/css/main.css": "_input/sass/main.scss"       // 'destination': 'source'
              }
            }
          },

        includes: {
                html: {
                    cwd: '_input', // cwd = current working directory
                    src: ['*.html', 'templates/*.html'],
                    dest: '_output/',
        
                options: {
                    flatten: true,
                    includePath: '_input/includes',
                    banner: '<!-- This is the output file! -->\n'
                }
                },

            js: {
                cwd: '_input',
                src: 'js/*.js',
                dest: '_output/'
            }
        },

        copy: {
            img: {
                files: [
                    {expand: true, cwd: '_input', src: ['img/**'], dest: '_output/'}
                ]
            }
        },

        watch: {
            html: {
                files: ['_input/**/*.html', 'includes/**/*.html' ],
                tasks: ['includes:html'],
                options: {
                    nospawn: true
                }
            },
            img: {
                files: ['_input/img/*.*'],
                tasks: ['copy:img'],
                options: {
                    nospawn: true
                }
            },
            styles: {
                files: ['_input/sass/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            },

            js: {
                files: ['_input/js/*.js'],
                tasks: ['includes:js'],
                options: {
                    nospawn: true
                }
            }
        },

        inlinecss: {
            main: {
                options: {
                    extraCss: "",
                    applyStyleTags: true,
                    removeStyleTags: false,
                    preserveMediaQueries: true,
                    applyWidthAttributes: false,
                    webResources: {},
                },
            files: {
                '_output/index.html': '_input/index.html'
            }
            
            }
        },

 emailTest : {

    // Your Email
    email : 'scoelen89@gmail.com',

    // Your email Subject
    subject : 'Email Subject',

    // Optional
    transport: {
      type: 'SMTP',
      service: 'gmail',
      auth: {
        user: 'gmail.scoelen89@gmail.com',
        pass: 'Alfalfa123'
      }
    }
  }

        // browserSync: {
        //     dev: {
        //         bsFiles: {
        //             src: '_output/**'
        //         },
        //         options: {
        //             watchTask: true,
        //             reloadDelay: 1,
        //             server: {
        //                 baseDir: "_output"
        //             }
        //         }
        //     }
        // },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-inline-css');




    grunt.registerTask('inline', ['inlinecss', 'watch'])
    grunt.registerTask('default', ['sass', 'includes', 'copy', 'watch', 'inlinecss']);
    grunt.registerTask('minify', ['uncss', 'cssmin']);

};
