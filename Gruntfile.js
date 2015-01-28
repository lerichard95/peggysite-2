module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'js/jquery-2.1.1.js', 'js/scrollReveal.js', 'js/*.js', 'js/custom.js'
                ],
                dest: 'js/production.js',
            },

            css: {
                src: [
                    'css/bootstrap.css', 'css/carousel.css',
                    'css/custom.css'
                ],
                dest: 'css/production.css'
            },
        },

        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'build/js/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'build/images/',
                }]
            }
        },
        
        cssmin: {            
                minify: {
                    src: 'css/production.css',
                    dest: 'build/css/production.min.css'
                }
        },
        
        processhtml: {
            options: {
                data: {
                    message: 'Building production file...'
                }
            },
            dist: {
                files: {
                    //grunt-processhtml grabs dev version of the html,
                    //and outputs the production version
                    'build/index.html': ['index.html']
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js', 'css/custom.css'],
                tasks: ['concat', 'uglify', 'cssmin'],
                options: {
                    spawn: false,
                },
            }
        },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin', 'processhtml']);

};