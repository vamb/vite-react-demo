### git实战系列：.gitignore文件设置无效

`git rm -r --cached .` <br/>
`git add .`<br/>
`git commit -m "说明文字"`<br/>
`git push`<br/>

### https://juejin.cn/post/6948700074788536356 (配置TS)
### npm install --save typescript @types/node @types/react @types/react-dom @types/jest
#### TM为了搞TS导致所有js的依赖包都要装一遍TS的版本

### gitignore 不起效
#### 原因是因为在git忽略目录中，新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，

#### gitignore 清理缓存
`[root@kevin ~]# git rm -r --cached .` <br/>
`[root@kevin ~]# git add .` <br/>
`[root@kevin ~]# git commit -m 'update .gitignore'` <br/>
`[root@kevin ~]# git push -u origin master` <br/>

#### .gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。


============== 添加 tailwind 配置 --- 开始，加了tailwind依赖会导致 antd 的样式被污染 ======================== <br/>
// 根目录 postcss.config.cjs <br/>
`module.exports = {` <br/>
`plugins: {` <br/>
`tailwindcss: {},` <br/>
`autoprefixer: {},` <br/>
`}` <br/>
`}`

// 根目录 tailwind.config.cjs <br/>
`module.exports = {` <br/>
`content: [` <br/>
`"./index.html",` <br/>
`"./src/**/*.{vue,js,ts,jsx,tsx}",` <br/>
`],` <br/>
`theme: {` <br/>
`extend: {},` <br/>
`},` <br/>
`plugins: [],` <br/>
`}` <br/>
============== 添加 tailwind 配置 --- 结束 ======================== <br/>

#### tsconfig.json 的配置只对 ts 文件有效， 同理 jsconfig.json 的配置只对 js 有效
#### tsconfig.json 或 jsconfig.json 中配置了路径别名要在 vite.config.js 对应的配置一下，否则无法启动
