import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from "unplugin-vue-components/vite"
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import AutoImport from 'unplugin-auto-import/vite'
import path from 'path';
import alias from "./vite/alias";
import { parseEnv } from './vite/until';


export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build';
  //得到env配置项方法1
  // const env = loadEnv(mode,'.')  
  //得到env配置项方法2
  const root = process.cwd();
  const env = loadEnv(mode, root)
  parseEnv(env)

  
  return {
    plugins: [vue()],
    resolve: {
      alias: alias
    }
  }
}