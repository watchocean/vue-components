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
$default-color: #9f9f9f;
$default-hover-color: #2c3e50;
$primary-color: #1e7caf;
$primary-hover-color: #1e7caf;
$danger-color: #ec526d;
$danger-hover-color: #ec526d;
$success-color: #019875;
$success-hover-color: #01654e;
$warning-color: #f4b350;
$warning-hover-color: #e9920f;
$error-color: #ff0000;
$error-hover-color: #ff0000;
$disabled-color: #a5a0a0;

@mixin button-color($color, $hover-color) {
  color: $color;
  box-shadow: 0 0 0 1px $color inset;

  &:hover {
    color: $hover-color;
    box-shadow: 0 0 0 1px $hover-color inset;
  }
}

.v-btn {
  cursor: pointer;
  border: none;
  background: 0 0;
  border-radius: 8px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 6px 10px;
  text-decoration: none;
  outline: 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: $disabled-color !important;
    box-shadow: 0 0 0 1px $disabled-color inset !important;
  }

  &[large="true"] {
    font-size: 1.3rem;
  }

  &[small="true"] {
    font-size: 0.7rem;
  }

  &[markup="default"] {
    @include button-color($default-color, $default-hover-color);
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
    &:hover{
      animation: blink 500ms 5;
      @keyframes blink{
        to {
          color: transparent;
          box-shadow: none;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
