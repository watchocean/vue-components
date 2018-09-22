## Usage
```html
<!-- default button -->
<v-button>
  Button
</v-button>

<!-- disabled button -->
<v-button disabled>
  Button
</v-button>

<!-- large button -->
<v-button large>
  Button
</v-button>

<!-- small button -->
<v-button small>
  Button
</v-button>

<!-- markup button option: primary, danger, success, warning, error -->
<v-button markup="success">
  Button
</v-button>

<!-- button with multiple attribute -->
<v-button markup="warning" large>
 Button
</v-button>
```
## ES Modules with NPM & vue-loader (Recommended)
```js
import Vue from 'Vue'
import VueButton from 'vue-button'

// register component to use
Vue.component('v-button', VueButton)
```
## Parameters
```js
/**
 * Equivalent to the `id` attribute on an `<button>`.
 * @type {String}
 */
id: {
  type: String,
  default: null
},

/**
 * Attach your custom class on the compontent.
 * That means you can change the style if you want.
 * @type {String}
 */
customClass: {
  type: String,
  default: null
},

/**
 * Equivalent to the `name` attribute on an `<button>`.
 * @type {String}
 */
name: {
  type: String,
  default: null
},

/**
 * Equivalent to the `disabled` attribute on an `<button>`.
 * @type {Boolean}
 */
disabled: {
  type: Boolean,
  default: false
},

/**
 * If set enable button font size will be large.
 * @type {Boolean}
 */
large: {
  type: Boolean,
  default: false
},

/**
 * Markup button.
 * The value can be `default`, `primary`, `success`, `warning`, `error`.
 * @type {String}
 */
markup: {
  type: String,
  default: 'default'
},

/**
 * Set the click event on `<button>`.
 */
@click {
  type: Object,
  defalut: null
}
```

