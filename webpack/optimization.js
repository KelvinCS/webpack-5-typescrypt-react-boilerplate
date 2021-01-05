/**
 * Created by: Matheus Benites (benites.amorim@gmail.com)
 */
export default {
    runtimeChunk: {
        name: 'runtime',
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
            },
        },
    },
};
