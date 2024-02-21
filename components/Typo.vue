<template>
  <h1
    v-if="props.role == 'h1'"
    :class="[props.className, { gradient: props.gradient }]"
  >
    <slot></slot>
  </h1>
  <h2
    v-if="props.role == 'h2'"
    :class="[props.className, { gradient: props.gradient }]"
  >
    <slot></slot>
  </h2>
  <p
    v-if="['body', 'caption', 'cta'].includes(props.role)"
    :class="[props.role, props.className]"
  >
    <slot></slot>
  </p>
</template>

<script lang="ts" setup>
interface Props {
  role?: "h1" | "h2" | "cta" | "body" | "caption";
  gradient?: boolean;
  className?: string | object;
}

const props = withDefaults(defineProps<Props>(), {
  role: "body",
});
</script>

<style lang="scss">
h1,
h2 {
  font-family: "DM Sans", sans-serif;
  @apply text-headline;

}

p {
  font-family: "DM Sans", sans-serif;
  @apply font-medium;
}
</style>

<style lang="scss" scoped>
h1 {
  line-height: 100%; /* 79px */
  letter-spacing: 0px;

  @apply font-bold text-6xl <lg:text-4xl;
}

h2 {
  letter-spacing: -1px;
  @apply font-bold text-32px;
}

p {
  line-height: 24px;
  &.cta {
    font-family: "DM", sans-serif;
    letter-spacing: -1px;
    line-height: 100%;
    @apply text-18px uppercase font-bold;
  }

  &.body {
    @apply text-18px;
  }

  &.caption {
    @apply text-14px;
  }
}
</style>
