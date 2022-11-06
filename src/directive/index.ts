import type { App } from 'vue';
import focuss from './focus'

/**
 * 导出指令方法：v-xxx
 * @methods test 测试，用法：v-test
 */

export default function directive(app: App) {
  // test
  focuss(app)
}
