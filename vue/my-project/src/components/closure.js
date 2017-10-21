module.exports = {
    "extends": "eslint:recommended",  //继承另一个eslint配置
    "env": {     //指定执行环境
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "parserOptions": {        //通过parserOptions，指定校验的ecma的版本，及ecma的一些特性
        "ecmaVersion": 6,     //指定ECMAScript支持的版本，6为ES6，8为ES8...
        "sourceType": "module",    //指定来源(import)的模式类型，有两种”script”或”module”
        "ecmaFeatures": {     //这是个对象，表示你想使用的额外的语言特性
            "jsx": true       //启动JSX
        },
    },
    /*
    * rules规则：
    *    "off" or 0 - 关闭规则
    *    "warn" or 1 - 将规则视为一个警告（不会影响退出码）
    *    "error" or 2 - 将规则视为一个错误 (退出码为1)
    */
    "rules": {
        "no-console": "off",
        "indent": [ "error", 4 ],
        "quotes": [ "error", "single" ]
    },
    "plugins": [  //第三方插件。在使用插件之前，你必须使用 npm 安装它们。插件名称可以省略 eslint-plugin- 前缀。注意：全局安装的 ESLint 只能使用全局安装的插件。本地安装的 ESLint 不仅可以使用本地安装的插件还可以使用全局安装的插件。
        "plugin1",
        "eslint-plugin-plugin2"
    ]
};