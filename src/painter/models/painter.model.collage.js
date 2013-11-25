(function () {
    this.painterCollageInitialize = function () {
        this.Painter.Collage = new backbone.Model.extend({
            defaults: {
                pictures: null,
                background: ''
            },
            initialize: function () {
                this.set('pictures', new this.PictureCollection());
            }
        });
    };
}).call(this);