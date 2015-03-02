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
                    src: ['*.html'],
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
                files: ['_input/*.html',],
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


    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-includes');

    grunt.registerTask('inline', ['inlinecss']);
    grunt.registerTask('default', ['sass', 'includes', 'copy', 'watch']);
};
