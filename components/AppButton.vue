<template>
  <button :class="[{ small: props.small }, props.type]" :disabled="disabled">
    <Typo
      :role="['tertiary', 'other'].includes(props.type) ? 'body' : 'cta'"
      :class-name="
        props.type == 'secondary'
          ? 'text-dark  whitespace-nowrap'
          : 'text-white  whitespace-nowrap'
      "
    >
      <slot></slot>
    </Typo>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  small?: boolean;
  icon?: any;
  disabled?: boolean;
  type?: "primary" | "secondary" | "tertiary" | "other";
}

const props = withDefaults(defineProps<Props>(), {
  small: false,
  type: "primary",
});
</script>

<!-- color colour button appbutton -->
<style lang="scss" scoped>
button {
  transition: all 0.3s;
  @apply rounded-10px flex flex-row items-center justify-center cursor-pointer;

  &.primary {
    background: linear-gradient(180deg, #FF8E00 0%, #cc4902 100%);
    box-shadow: 0 0px 0 #ff9800 inset, 0 -3px 0 #ac3d01 inset;

    &:hover {
      box-shadow: 0 0px 0 #a33a01 inset, 0 -3px 0 #ac3d01 inset;
      background: linear-gradient(
        180deg,
        #cc4902 0%,
        #ac3d01 100%
      );
    }
  }

  &.secondary {
    background: linear-gradient(180deg, #eff1f5 0%, #c9cbcf 100%);
    box-shadow: 0px 2px 0px 0px #f9fbff inset, 0px -2px 0px 0px #b1b3b5 inset;
    @apply text-background;

    &:hover {
      box-shadow: 0px 2px 0px 0px #f9fbff inset, 0px -2px 0px 0px #b1b3b5 inset,
        0 5px 30px rgba(255, 255, 255, 0.2);
      background: linear-gradient(180deg, #c9cbcf 0%, #eff1f5 100%);
    }
  }

  &.tertiary {
    @apply bg-outline bg-opacity-0 border-1px border-outline px-20px py-10px;

    &:hover {
      @apply bg-opacity-100;
    }
  }

  &.other {
    box-shadow: rgba(191, 151, 255, 0.44) 0px 0px 12px 0px inset;
    border: 1px solid rgb(127, 107, 173);
    background: linear-gradient(
      rgba(60, 8, 126, 0.46) 0%,
      rgba(60, 8, 126, 0.94) 100%
    );

    &.small {
      @apply px-20px pt-15px pb-16px h-44px;
    }

    &:hover {
      box-shadow: rgba(191, 151, 255, 0.7) 0px 0px 20px 0px inset;
    }
  }

  &.small:not(.other) {
    @apply px-20px py-12px h-auto;
  }

  &:not(.small) {
    @apply px-25px py-10px h-50px;
  }
}
</style>
