# 启动
yarn run dev

# 目录说明
component 子组件目录，无法通过 getServerSideProps 等进行服务端渲染的数据获取，只能通过父组件喂的数据进行服务端渲染

lib 各类工具类目录

pages 页面级组件目录，只有这些组件可通过 getServerSideProps 等进行服务端渲染的数据获取，下发给子组件

posts 演示用的文本文件存放目录

public 资源目录

styles 全局性样式文件目录

# 路由说明
pages目录下的每一个js对应一个路由地址，
通过next的 <Link href="/posts/first-post">a</Link> 进行路由跳转，
路由地址完全与目录相同。
如 http://localhost:3000/posts/first-post 地址，
对应的为 posts 目录下，first-post.js 导出的页面

# 特殊文件
文件名和目录固定，工程项目中可不添加，不添加时会使用NEXT默认文件。手动添加后会覆盖NEXT默认文件

next.config.js  NEXT配置文件，配置NEXT的自定义功能
pages/_app.js  NEXT应用入口文件，可用于添加全局样式
pages/404.js  可替换默认的404页面