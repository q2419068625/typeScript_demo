//引入一个包 
const path = require('path');

//webpack中的所有配置信息都应该写在 module.exports
module.exports = {
    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目录
    output:{
        //指定打包文件目录
        path:path.resolve(__dirname,'dist'),
        //打包后文件的文件名
        filename:"bundle.js"
    },
    //指定webpack打包时要使用的模块
    module:{
        rules:[
            {
                // test 指定的时规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件
                exclude:/node-modules/
            }
        ]
    }

}