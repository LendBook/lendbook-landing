<template>
  <div
    class="cards-market-trigger grid-container w-full max-w-1000px flex flex-col items-start justify-start gap-20px"
  >
    <div class="w-full flex flex-row <md:flex-col items-start justify-between gap-20px" >
      
      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
            small
            link-title="On-chain risk management"
            title="On-chain risk management"
            content="Risk management is market-driven"
            to=""
            :padding-bottom="false"
            class="up-left-market-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/adjustment.png" alt="Balance Image" />
            <Typo role="h2">Manage your own risk</Typo>
        </GridCard>
      </div>
      

      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
            small
            link-title="Solvency guaranteed at the code level"
            title="Solvency guaranteed at the code level"
            content="LendBook removes the risk of bad debt. Borrowing positions cannot go under-collateralized"
            to=""
            :padding-bottom="false"
            class="up-right-market-feat md:h-240px flex flex-col items-center justify-center gap-8px"
          >
            <img class="fit-image" src="/img/shield.png" alt="Balance Image" />
            <Typo role="h2" class-name=" text-center">No risk of bad debt</Typo>
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