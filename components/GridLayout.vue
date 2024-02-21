<template>
  <div
    class="cards-trigger grid-container w-full max-w-1000px flex flex-col items-start justify-start gap-20px"
  >
    <div class="w-full flex flex-row <md:flex-col items-start justify-between gap-20px" >
      
      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
            small
            link-title="LTV"
            title="Enjoy high Loan-To-Value"
            content="blabla"
            to=""
            :padding-bottom="false"
            class="up-left-leverage-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/balance.png" alt="Balance Image" />
            <Typo role="h2">High Loan-To-Value</Typo>
        </GridCard>
        <GridCard
            small
            link-title="liquidation"
            title="Enjoy liquidation"
            content="blabla"
            to=""
            :padding-bottom="false"
            class="down-left-leverage-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/money.png" alt="Balance Image" />
            <Typo role="h2">Low liquidation costs</Typo>
        </GridCard>
      </div>
      

      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
            small
            link-title="leverage"
            title="Enjoy high Leverage"
            content="blabla"
            to=""
            :padding-bottom="false"
            class="up-right-leverage-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/grow-up.png" alt="Balance Image" />
            <Typo role="h2">High Leverage</Typo>
        </GridCard>
        <GridCard
            small
            link-title="debt"
            title="Enjoy debt management"
            content="blabla"
            to=""
            :padding-bottom="false"
            class="down-right-leverage-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/snap.png" alt="Balance Image" />
            <Typo role="h2" class-name=" text-center">Intuitive<br>debt management</Typo>
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