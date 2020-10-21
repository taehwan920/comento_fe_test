module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_reset.scss";
          `
            }
        }
    }
}