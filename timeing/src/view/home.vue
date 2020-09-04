<template>
  <div id="home">
    <div class="itemBox">
      <homeItem :data="dataYear"></homeItem>
      <homeItem :data="dataMonth"></homeItem>
      <homeItem :data="dataWeek"></homeItem>
    </div>
  </div>
</template>

<script>
import homeItem from "@/view/home/homeItem.vue";
export default {
  name: "",
  components: {
    homeItem,
  },
  data() {
    return {
      dataYear: {
        type: "year",
        time: "2020",
      },
      dataMonth: {
        type: "month",
        time: "2020",
      },
      dataWeek: {
        type: "week",
        time: "2020",
      },
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.itemBox {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
