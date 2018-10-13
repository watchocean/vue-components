<template>
  <button
    class="v-btn"
    :id="id"
    :class="customClass"
    :name="name"
    :disabled="disabled"
    :large="large"
    :small="small"
    :markup="markup"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    id: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    markup: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
$default-color: #c3c0c0;
$default-hover-color: #676f79;

$primary-color: #7d98e4;
$primary-hover-color: #078aca;

$danger-color: #eaa0ad;
$danger-hover-color: #e8506a;

$success-color: #6ac79482;
$success-hover-color: #3fab93;

$warning-color: #e0bd88;
$warning-hover-color: #cc9c54;

$error-color: #f55b5b;
$error-hover-color: #e21e1e;
$disabled-color: #a5a0a0;

@mixin button-color($color, $hover-color) {
  background: linear-gradient(to right top, $color 30%, $hover-color 100%);

  &:hover {
    background: linear-gradient(to right top, $hover-color 30%, $color 100%);
  }
}

.v-btn {
  cursor: pointer;
  border: none;
  background: 0 0;
  border-radius: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 4px 14px;
  text-decoration: none;
  outline: 0;
  color: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &[large="true"] {
    font-size: 1.3rem;
  }

  &[small="true"] {
    font-size: 0.7rem;
  }

  &[markup="default"] {
    color: #1DA1F2;
    box-shadow: 0 0 0 1px #1DA1F2;

    &:hover{
      background-color: #ccc;
    }  
  }

  &[markup="primary"] {
    @include button-color($primary-color, $primary-hover-color);
  }

  &[markup="danger"] {
    @include button-color($danger-color, $danger-hover-color);
  }

  &[markup="success"] {
    @include button-color($success-color, $success-hover-color);
  }

  &[markup="warning"] {
    @include button-color($warning-color, $warning-hover-color);
  }

  &[markup="error"] {
    @include button-color($error-color, $error-hover-color);
  }
}
</style>
