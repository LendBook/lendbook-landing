<template>
  <div
    class="home-wrapper w-full pt-100px flex flex-col items-center justify-start gap-100px"
  >

    <main
      class="alb-stars-trigger w-full default-layout-padding flex flex-row <md:items-start <lg:(flex-col items-center gap-32px) items-stretch justify-center gap-100px"
    >
      <div
        class="flex flex-col <md:items-start <lg:(items-center w-full) justify-between gap-32px"
      >
        <img class="h-400px w-400px" src="/img/Logo500.png" alt="Balance Image" />
        
      </div>
      <div
        class="<md:w-full data flex flex-row items-start justify-end gap-40px"
      >
        <div
          class="flex flex-col items-start justify-start gap-14px <lg:hidden"
        >
          <header
            class="flex flex-col <md:items-start <lg:items-center justify-start gap-12px"
          >
            <h2 class="text-6xl gradient font-bold" style="letter-spacing: 0px"> LendBook </h2>
            <h2
              class="text-18px text-headline font-bold max-w-350px md:max-w-500px leading-[120%]"
              stlye="letter-spacing: -3px;"
            >
              <span :style="{ color: '#FF8E00' }">An order book turned into a robust lending protocol</span>
            </h2>
          </header>
          <Typo role="body" class-name="text-body max-w-500px">
            <br>
            
            LendBook is a non-custodial and permissionless lending protocol that enables users to lend and borrow limit orders' assets :
            <br>- Lenders post orders which can be borrowed
            <br>- Borrowers post orders as collateral in order to borrow assets posted by lenders.
            <br><br>
            LendBook was designed to create a unique and robust lending and borrowing experience.
            <br>
          </Typo>
          <NuxtLink
            to="https://lendbook.github.io/lendbook-docs/"
            title="Documentation"
            class="text-headline font-medium mb-4px text-18px flex flex-row items-center justify-start gap-8px hover:(opacity-60 underline)"
            style="transition: all 0.3s"
          > Documentation <IconsExternalLink class="w-24px h-24px" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/LendBook/Borrowable-limit-order-book/blob/main/lendbook_wp.pdf"
            title="Whitepaper"
            class="text-headline font-medium mb-4px text-18px flex flex-row items-center justify-start gap-8px hover:(opacity-60 underline)"
            style="transition: all 0.3s"
          >
            Whitepaper <IconsExternalLink class="w-24px h-24px" />
          </NuxtLink>
        </div>
      </div>

    </main>






    <section
      class="leverage-trigger w-full flex flex-col items-center justify-start gap-40px default-layout-padding"
    >
      <Typo role="h1" class-name=" text-center">
          Optimized for <span :style="{ color: '#FF8E00' }">leverage</span></Typo
        >
      <GridLayout />
    </section>

    <section
      class="lenders-trigger w-full flex flex-col items-center justify-start gap-40px default-layout-padding"
    >
      <Typo role="h1" class-name=" text-center">
          Designed for <span :style="{ color: '#FF8E00' }">lenders</span></Typo
        >
      <GridLender />
    </section>

    <section
      class="market-trigger w-full flex flex-col items-center justify-start gap-40px default-layout-padding"
    >
      <Typo role="h1" class-name=" text-center">
          Built to weather <span :style="{ color: '#FF8E00' }">all market conditions</span></Typo
        >
      <GridMarket />
    </section>


    <section
      class="how-faq-trigger w-full default-layout-padding flex flex-col  justify-start gap-42px "
    >
      <div class="max-w-800 mx-auto" >
        <div class="flex flex-col items-start justify-start gap-14px" >
          <h2 class="text-6xl gradient font-bold text-center" style="letter-spacing: 0px"> How does LendBook work ?  </h2>

          <h2 class="text-24px text-headline font-bold max-w-350px md:max-w-800px leading-[120%]" > 
          <span :style="{ color: '#FF8E00' }">Lenders</span> supply assets in buy orders </h2>
          
          <Typo role="body" class-name="text-body max-w-800px">
            Lenders choose a limit price at which they wish to trade
            <br>
            <em>Example: Alice deposits 30,000 USDC in a buy order at limit price 2000. 
            Her order is displayed in the order book to be traded or borrowed.</em>
          </Typo>

          <h2 class="text-24px text-headline font-bold max-w-350px md:max-w-800px leading-[120%]" > 
          <span :style="{ color: '#FF8E00' }">Borrowers</span> borrow assets from orders </h2>
          
          <Typo role="body" class-name="text-body max-w-800px">
            They deposit collateral in sell orders and borrow assets from buy orders 
            <br>
            <em>Example cont.: Bob deposits 5 ETH as collateral in a sell order and borrows 10,000 USDC from buy orders at 1800.</em>
          </Typo>

          <h2 class="text-24px text-headline font-bold max-w-350px md:max-w-800px leading-[120%]" > 
          <span :style="{ color: '#FF8E00' }">Positions</span> are liquidated when limit orders are filled </h2>
          
          <Typo role="body" class-name="text-body max-w-800px">
            Lenders receive collateral assets from traders and liquidated positions 
            <br>
            <em>Example continue: Price decreases to 2000:
            <br>
            - takers give lenders ETH against their USDC
            <br>
            - collateral in ETH of borrowers at 2000 is transferred to lenders at 2000 </em>
          </Typo>
        </div>
      </div>

      <div class="max-w-800 mx-auto" >
        <div class="flex flex-col items-start justify-start gap-14px" >
          <h2 class="text-6xl gradient font-bold text-center" style="letter-spacing: 0px"> FAQ </h2>

          <Typo role="body" class-name="text-body max-w-800px">
            <h2 class="font-bold" style="color: #FF8E00;">What is LendBook ?</h2>
            LendBook is a lending protocol built on an order book. Users benefit from all functionalities of lending protocols,
             with a catch: they deposit assets in limit orders and have to figure out the price at which they are willing to buy 
             or sell the collateral assets. 
             <br><br>
            <h2 class="font-bold" style="color: #FF8E00;">What is a limit order?</h2>
            A limit order is a trading instruction specifying the maximum purchase price or minimum sale price for a financial asset. 
            It is only executed when the market reaches or surpasses the specified price. The order book is a real-time display of buy 
            and sell orders in a market. 
             <br><br>
            <h2 class="font-bold" style="color: #FF8E00;">Can LendBook be used as a classical order book?</h2>
            Yes, LendBook is a full-fledged order book. However , to avoid liquidity fragmentation, users will be able to place limit orders 
            in a limited set of prices. 
             <br><br>
            <h2 class="font-bold" style="color: #FF8E00;">What are the key benefits of LendBook?</h2>
            Lending in limit orders results in an efficient and robust lending primitive with high loan-to-value, high leverage, 
            low liquidation costs, lending and borrowing programmability, governance minimization and immunity to the risk of bad debt. 
             <br><br>
            <h2 class="font-bold" style="color: #FF8E00;">Which assets will be available to lend and borrow?</h2>
            LendBook V1 will work with any ERC20 token with a price feed. Long-tail assets without a reliable external price oracle will
             be borrowable in the V2.  
             <br><br>
            <h2 class="font-bold" style="color: #FF8E00;">When launch?</h2>
            LendBook is expected to launch in Q3 2024.
          </Typo>

        </div>
      </div>
        
    </section>


  </div>
  <div
    class="w-full flex flex-col items-center jusitfy-start mt-100px gap-124px"
  >
    <section class="h-2vh"></section>
    
  </div>
</template>


<script lang="ts" setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
let gsapContext;


import IcOutlineArrowForward from "~icons/ic/outline-arrow-forward";
import IcOutlineArrowBackward from "~icons/ic/outline-arrow-back";

import { AppConfigs } from "@/configs/AppConfig";


useHead({
  htmlAttrs: {
    lang: "en",
  },
  script: [
    /* {
      src: "/js/animations.js",
      tagPosition: "bodyClose",
    }, */
  ],
});

useSeoMeta({
  title: AppConfigs.title,
  description: AppConfigs.description,
  ogTitle: AppConfigs.title,
  ogDescription: AppConfigs.description,
  ogImage: AppConfigs.image,
  ogUrl: "https://www.lendbook.org/",
  ogType: "website",
  ogSiteName: "LendBook",
  twitterTitle: AppConfigs.title,
  twitterDescription: AppConfigs.description,
  twitterImage: AppConfigs.image,
  twitterCard: "summary_large_image",
});





onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  

  gsapContext = gsap.context((self) => {

    gsap.from("h1", {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.05,
      duration: 0.5,
    });

    gsap.from(".h1-paragraph", {
      y: -20,
      opacity: 0,
      stagger: 0.5,
      delay: 0.5,
      duration: 1,
    });

    gsap.from(".up-left-leverage-feat", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".up-left-leverage-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".up-right-leverage-feat", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".up-right-leverage-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });


    gsap.from(".down-left-leverage-feat", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".down-left-leverage-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".down-right-leverage-feat", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".down-right-leverage-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".up-left-lender-feat", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".up-left-lender-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".up-right-lender-feat", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".up-right-lender-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".down-left-lender-feat", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".down-left-lender-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".down-right-lender-feat", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".down-right-lender-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".up-left-market-feat", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".up-left-market-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".up-right-market-feat", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".up-right-market-feat",
        start: "top bottom",
        end: "top+=100px center",
        scrub: true,
        /* markers: true, */
      },
    });

    gsap.from(".footer-cta", {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "footer",
        start: "top+=100px bottom",
        end: "top-=150px 60%",
        scrub: 1,
        /* markers: true, */
      },
    });

    gsap.from(".footer-illustration", {
      opacity: 0,
      stagger: 0.5,
      delay: 1,
      duration: 0.5,
    });
  });

});

</script>

<style lang="scss" scoped>
/* .home-wrapper {
  background-image: url(/img/hero-illustration.png);
  background-repeat: no-repeat;
  background-size: 954px;
  background-position: center 9%;

  @media screen and (min-width: 500px) {
    background-position: center 6%;
  }

  @media screen and (min-width: 765px) {
    background-size: 2154px;
    background-position: center -43%;
  }

  @media screen and (min-width: 1024px) {
    background-size: 2154px;
    background-position: center -38%;
  }

  @media screen and (min-width: 1408px) {
    background-size: 2504px;
    background-position: center -100%;
  }
} */

</style>
