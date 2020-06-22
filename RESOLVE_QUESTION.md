### 问题解决记录

#### 2020-06-22
  - 引入ant cdn，需要在babel中将下面的排除，同时在externals中设置`'antd' : 'antd''`，打包体积将大大减小；
```shell script
[
    "import",
    {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
    },
    "ant"
]
```
