var less_processor = require('less-middleware');
var path = require('path');

module.exports = function (app, express) {
    return function () {
        app.set('port', process.env.PORT || 3000);
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'ejs');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(less_processor(
            {
                dest: '/public',
                src: '/src/less',
                root: __dirname,
                force: true,
                debug: true
            }
        ));
        app.use('/js', express.static(path.join(__dirname, 'public') + '/js'));
        app.use('/painter', express.static(path.join(__dirname, 'src') + '/painter'));
        app.use('/css', express.static(path.join(__dirname, 'public') + '/css'));
    }
};