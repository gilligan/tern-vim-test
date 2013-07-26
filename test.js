var Test = Backbone.View.extend({
    foo: function () {
        this.render();
    },
    bar: function () {
        this.foo();
    }
});
