module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_reset.scss";
            @import "@/assets/scss/_basic.scss";
            @import "@/assets/scss/_mixin.scss";
          `
            }
        }
    }
}