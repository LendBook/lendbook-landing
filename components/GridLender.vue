<template>
  <div
    class="cards-lender-trigger grid-container w-full max-w-1000px flex flex-col items-start justify-start gap-20px"
  >
    <div class="w-full flex flex-row <md:flex-col items-start justify-between gap-20px" >
      
      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
            small
            link-title="LTV1"
            title="Earn Interest rate"
            content="Lenders place limit orders and receive interest on them."
            to=""
            :padding-bottom="false"
            class="up-left-lender-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/invest.png" alt="Balance Image" />
            <Typo role="h2">Earn Interest rate</Typo>
        </GridCard>
        <GridCard
            small
            link-title="liquidation1"
            title="Earn liquidation fees"
            content="Liquidation profit to lenders, not bots"
            to=""
            :padding-bottom="false"
            class="down-left-lender-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/liquidity.png" alt="Balance Image" />
            <Typo role="h2">Earn liquidation fees</Typo>
        </GridCard>
      </div>
      

      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
            small
            link-title="skaha"
            title="Lenders control their own risk management"
            content="Lenders choose their own risk-reward strategies"
            to=""
            :padding-bottom="false"
            class="up-right-lender-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/chart.png" alt="Balance Image" />
            <Typo role="h2" class-name=" text-center">Lend at the limit price<br>of your choice</Typo>
        </GridCard>
        
        <GridCard
            small
            link-title="ska"
            title="Profit from the price ups and downs"
            content="Implement buy the bottom - sell the top strategies"
            to=""
            :padding-bottom="false"
            class="down-right-lender-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/chess.png" alt="Balance Image" />
            <Typo role="h2" class-name=" text-center">Harvest the price <br>volatility</Typo>
        </GridCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

<style>
.fit-image {
  /* Set the maximum width and height of the image */
  max-width: 60%;
  max-height: 60%;
  /* Ensure the image retains its aspect ratio */
  height: auto;
  width: auto;
  /* Style to fit within the container */
  display: block;
  margin: auto;
}
</style>