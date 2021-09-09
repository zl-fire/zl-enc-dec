import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/main.js',
    output: {
        file: './index.js',
        name: 'zl-enc-dec',
        format: 'umd'
    },
    plugins: [
        resolve(),
        // babel({
        //     exclude: 'node_modules/**' // 只转译我们的源代码
        // })
    ],
};