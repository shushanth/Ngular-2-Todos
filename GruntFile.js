module.exports = function(grunt){

        grunt.initConfig({

          sass:{
			dist:{
				files:{
					'app/styles/main.css':'app/styles/main.scss',
                    'app/styles/base.css':'app/styles/base.scss',
                    'app/components/headers/header.component.css':'app/styles/header.component.scss',
                    'app/components/footer/footer.component.css':'app/styles/footer.component.scss',
                    'app/components/toduApp/todu.component.css':'app/styles/todu.component.scss',
                    'app/components/toduApp/insertTodo/inserttodo.component.css':'app/styles/inserttodo.component.scss',
                    'app/components/toduApp/displayTodo/displayTodo.component.css':'app/styles/displaytodo.component.scss',
                    'app/components/toduApp/filtersTodo/filterstodo.component.css':'app/styles/filterstodo.component.scss',


				}
			}
		},

            watch:{
                files:['app/styles/**/*.scss'],
                tasks:['sass']
            }
        })

        	grunt.loadNpmTasks('grunt-contrib-watch');
	        grunt.loadNpmTasks('grunt-contrib-sass');
}


    

       