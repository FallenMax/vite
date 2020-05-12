declare const __DEV__: boolean

if (__DEV__) {
  console.log(
    `[vue tip] You are using an non-optimized version of Vue 3 JSX, ` +
      `which does not take advantage of Vue 3's runtime fast paths. An improved ` +
      `JSX transform will be provided at a later stage.`
  )
}

const slice = Array.prototype.slice
