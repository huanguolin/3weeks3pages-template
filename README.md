# 3weeks3pages-template

> 一个模板工程，能方便的将scss编译为css.  
> 便于初学者完成 [3周3页面](https://juntao.gitbooks.io/3-web-designs-in-3-weeks/content/index.html) 的练习.


# setup 

1. 安装 node.js & git   
   node.js 请参考: https://nodejs.org/en/download/   
   git 请参考: https://git-scm.com/downloads   

2. 把本工程克隆到本地   
```sh
git clone https://github.com/huanguolin/3weeks3pages-template.git
```
> 注意：     
> 命令行推荐使用 powerShell 或者 git bash。                        
> windows cmd 不方便操作，而且不能自动更新path环境变量（如安装node后需要重启cmd才能使用node命令）。  
> 安装 git 时默认会安装 git bash, 使用时在需要的文件夹中右键选择 Git bash here 即可。                  


3. 安装工程依赖
```sh
snpm install 
# or
cnpm install
# or 
npm install
```

4. 监控 scss 文件，并自动编译为 css 文件
```sh
npm run gulp watch
```

5. 编译 scss 文件为 css 文件
```sh
npm run gulp 
``` 
