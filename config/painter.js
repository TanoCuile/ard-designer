var Painter = require('../src/painter/painter').Painter;
Painter.initialize(function (root) {
    _.extend(
        root,
        require('../src/painter/models/painter.model.picture'),
        require('../src/painter/models/painter.model.collage'),
        require('../src/painter/collections/painter.collection.picture'),
        require('../src/painter/views/painter.view.picture'),
        require('../src/painter/views/painter.view.collage')
    );
});

module.exports = Painter;