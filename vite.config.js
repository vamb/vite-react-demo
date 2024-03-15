import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import fs from 'fs/promises';
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(config => {
  console.log('config', config)
  return {
    assetsInclude: [
      '**/*.awebp', '**/*.webp', '**/*.jpg', '**/*.jpeg',
      '**/*.png', '**/*.docx', '**/*.doc', '**/*.pdf', '**/*.xlsx', '**/*.txt',
      '**/*.pptx',
    ],
    resolve: {
      alias: {
        'src': resolve(__dirname,'src'),
        '@': resolve(__dirname, 'src') // tsconfig.json 或 jsconfig.json 中配置了路径别名要在这里对应的配置一下，否则无法启动
      }
    },
    esbuild: {
      // loader: "jsx",
      // include: /src\/.*\.jsx?$/,
      loader: "tsx", // 把所有的代码都当作tsx去处理，vite天生支持ts，而且jsx范围小于tsx，所以用tsx可以，jsx不行
      include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({ // i modified the regex here
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
          {
            name: "load-tx-files-as-tsx",
            setup(build) {
              build.onLoad({ filter: /src\\.*\.ts$/ }, async (args) => ({ // i modified the regex here
                loader: "tsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
    plugins: [
      react(),
      reactRefresh(),
      svgr(),
    ],
    define: {
      'process.env': process.env
    },

    // esbuild: {
    //   loader: "jsx",
    //   include: /src\/.*\.jsx?$/,
    //   // loader: "tsx",
    //   // include: /src\/.*\.[tj]sx?$/,
    //   exclude: [],
    // },
    // optimizeDeps: {
    //   esbuildOptions: {
    //     plugins: [
    //       {
    //         name: "load-js-files-as-jsx",
    //         setup(build) {
    //           build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
    //             loader: "jsx",
    //             contents: await fs.readFile(args.path, "utf8"),
    //           }));
    //         },
    //       },
    //     ],
    //   },
    // },

    // esbuild: {
    //   loader: 'jsx',
    // },
    // optimizeDeps: {
    //   esbuildOptions: {
    //     loader: {
    //       '.js': 'jsx',
    //     },
    //   },
    // },

    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       modifyVars: {
    //         hack: `true; @import (reference) "${resolve("src/assets/less/index.less")}";`,
    //       },
    //       javascriptEnabled: true,
    //     },
    //   },
    // },
    server: {
      port: 8002, // 设置服务启动端口号
      open: true, // 默认打开浏览器
      cors: true, // 允许跨域
      proxy: {
        '/api/': {
          target: 'http://10.0.48.11:803/',
          changeOrigin: true,
          pathRewrite: { '^': '' },
        }
      }

    }
  }
})
