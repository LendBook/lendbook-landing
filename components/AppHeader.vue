<template>
  <div class="nav-wrapper w-screen h-100px">
    <nav
      class="w-full h-full relative flex flex-row items-center justify-between default-layout-padding bg-[##0e1218] bg-opacity-20 backdrop-filter backdrop-blur-4px"
    >
      <ul
        class="absolute left-[50%] transform translate-x-[-50%] flex flex-row items-center justify-center gap-40px <lg:hidden"
      >
        <li
          v-for="link in links"
          :key="link.name"
          class="nav-link cursor-pointer transform translate-y-[7px]"
        >
          <NuxtLink
            :to="link.to"
            class="text-headline opacity-70 hover:opacity-100 font-medium flex flex-col items-center justify-start gap-2px"
            style="transition: all 0.3s; font-family: 'DM Sans', sans-serif"
            :title="link.name"
            target="_blank"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>

  <div
    class="cta-container h-100px flex flex-row items-center justify-end px-18px fixed right-0"
    :class="{
      'top-0px': scrollY < 20 && menu.advertiser,
      'top-0': scrollY > 10 || !menu.advertiser,
    }"
    style="z-index: 999; transition: top 0.2s"
  >
    <button
      class="menu-wrapper min-w-44px w-44px h-44px rounded-10px grid place-items-center cursor-pointer lg:hidden"
      :class="{
        'border-outline border-1px hover:border-2px': !menu.visible,
        'border-[#0358D8] border-2px': menu.visible,
      }"
      style="transition: all 0.3s"
      @click="menu.toggle(!menu.visible)"
    >
      <IconsMenu v-if="!menu.visible" />
      <IconsCross v-else />
    </button>
    <!--<NuxtLink
      to="https://beta.lendbook.org/"
      title="Launch App"
      class="cta-wrapper <lg:hidden"
    >
      <AppButton >Launch App</AppButton>
    </NuxtLink>-->
  </div>
</template>

<script lang="ts" setup>
import { NavConfigs } from "~/configs/NavConfig";
import { useMenuStore } from "@/stores/menu";

const links = ref(NavConfigs);
const menu = useMenuStore();

const scrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", (_) => {
    scrollY.value = window.scrollY;
  });
});
</script>

<style lang="scss" scoped>
.nav-link {
  .star {
    transition: all 0.3s;
    @apply opacity-0 transform translate-y-[10px];
  }

  &:hover {
    text-shadow: 0 1px 10px rgba(255, 255, 255, 0.6);
    @apply shadow-white;

    .star {
      @apply opacity-100 transform translate-y-0;
    }
  }
}
</style>
