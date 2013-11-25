(function () {
    this.painterPictureCollectionInitialize = function () {
        this.Painter.PictureCollection = new backbone.Collection.extend({
            model: this.Painter.Picture,
            initialize: function () {

            }
        });
    };
}).call(this);