// requirejs(['app']);

requirejs.config ({
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
      'jquery': 'lib/bower_components/jquery/dist/jquery.min.js',
      'bootstrap': 'lib/bower_components/bootstrap/dist/js/bootstrap.min'
    }
});