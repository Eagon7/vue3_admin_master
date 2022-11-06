import _ from "lodash";
export function parseEnv(env: Record<string, any>) {
  Object.entries(env).forEach(([key, value]) => {
    const envs = _.cloneDeep(env)
    if (value == 'true') {
      envs[key] = true
    }

    if (/\d+$/.test(value)) {
      envs[key] = parseInt(value)
    }
  })
}

// type RR<T extends keyof any, B> = {
//   [P in T]: B
// }