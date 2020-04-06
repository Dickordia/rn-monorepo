const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [
  resolveApp("src"),
  resolveApp("../components/src"),
  resolveApp("../../node_modules/react-native-svg-charts"),
  resolveApp("../../node_modules/react-native-table-component"),
  resolveApp("../../node_modules/react-native-webview"),
];

module.exports = function override(config, env) {
    // allow importing from outside of src folder
    config.resolve.plugins = config.resolve.plugins.filter(
        plugin => plugin.constructor.name !== 'ModuleScopePlugin'
    )
    
    config.module.rules[0].include = appIncludes
    config.module.rules[1] = null
    config.module.rules[2].oneOf[1].include = appIncludes
    config.module.rules = config.module.rules.filter(Boolean)
    config.plugins.push(
        new webpack.DefinePlugin({ __DEV__: env !== 'production' })
    )

    config.module.rules.push({
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-flow'
                ],
                plugins: [
                    'babel-plugin-react-native-web',
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-transform-flow-strip-types',
                ],
                compact: true
            }
        }
    })

    return config
}