module.exports = {
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Custom CV online";
            return args;
        });
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    isCustomElement: tag => tag.startsWith('ion-')
                }
                return options
            })
    },
};
