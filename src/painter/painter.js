// Init painter root
(function () {

    var root = this;

    root.Painter = {
        /**
         * Initialize all painter components
         */
        initialize: function (librariesLoader) {
            if (librariesLoader) {
                librariesLoader(root);
            }

            // Initialize pinter models and collections
            root.painterPictureInitialize(this);
            root.painterPictureCollectionInitialize(this);
            root.painterCollageInitialize(this);

            // Initialize painter views
            root.painterPictureViewInitialize(this);
            root.painterCollageViewInitialize(this);
        },

        /**
         * Provide default action if canvas is ready
         */
        canvasReady: function () {

        }
    };

    root.Painter.Actions = {
        /**
         * Create collage from simple object data
         *
         * @param obj
         */
        collageFromJSON: function (obj) {
            var collage;
            return collage;
        },

        /**
         * Convert collage to simple file
         *
         * @param collage
         * @returns {*}
         */
        collageToJSON: function (collage) {
            var obj;
            return obj;
        }
    }

}).call(this);
