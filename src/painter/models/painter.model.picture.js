(function () {
    this.painterPictureInitialize = function () {

        this.Painter.Picture = new backbone.Model.extend({
            defaults: {
                x: 0,
                y: 0,
                rotation: 0,
                width: 0,
                height: 0
            },
            initialize: function () {

            }
        });
    }
}).call(this);