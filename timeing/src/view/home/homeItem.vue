<template>
  <div id="homeItem">
    <div class="circleBox">
      <div class="title">
        <!-- 第一行内容 -->
        <div class="top" v-if="data.type == 'year'">
          {{ new Date().getFullYear() }}年已经过去
        </div>
        <div class="top" v-if="data.type == 'month'">
          {{ new Date().getMonth() + 1 }}月已经过去
        </div>
        <div class="top" v-if="data.type == 'week'">
          本周已经过去
        </div>

        <!-- 第二行内容 -->
        <div class="bottom">{{ getPassDays }}天</div>

        <!-- 第三行内容 -->
        <div>还剩{{ getRemnantDays }}天</div>
      </div>

      <van-circle
        v-model="currentRate"
        :rate="rate"
        :speed="100"
        :text="currentRate.toFixed(0) + '%'"
        layer-color="#e1e1e1"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "",
  data() {
    return {
      currentRate: 0,
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
    rate() {
      let returnData;
      let monthDays;
      let week;
      switch (this.data.type) {
        case "year":
          returnData =
            (this.$newDate().getDiff(new Date().getFullYear().toString()) /
              365) *
            100;
          break;
        case "month":
          monthDays = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          ).getDate();

          returnData =
            (this.$newDate().getDiff(
              `${new Date().getFullYear()}.${new Date().getMonth() +
                1}`.toString()
            ) /
              monthDays) *
            100;
          break;
        case "week":
          if (new Date().getDay() == 0) {
            week = 7;
          } else {
            week = new Date().getDay() + 1;
          }
          returnData = (week / 7) * 100;
          break;
      }
      return returnData;
    },
    getRemnantDays() {
      let returnDay;
      //获取月份的天数
      let num =
        new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        ).getDate() - 1;
      switch (this.data.type) {
        case "year":
          returnDay =
            365 - this.$newDate().getDiff(new Date().getFullYear().toString());
          break;
        case "month":
          returnDay =
            num -
            this.$newDate().getDiff(
              `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
            );
          break;
        case "week":
          if (new Date().getDay() == 0) {
            returnDay = 0;
          } else {
            returnDay = 7 - new Date().getDay();
          }
          break;
      }
      return returnDay;
    },
    getPassDays() {
      let returnDay;
      switch (this.data.type) {
        case "year":
          returnDay = this.$newDate().getDiff(
            new Date().getFullYear().toString()
          );
          break;
        case "month":
          returnDay = this.$newDate().getDiff(
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
          );
          break;
        case "week":
          if (new Date().getDay() == 0) {
            returnDay = 7;
          } else {
            returnDay = new Date().getDay();
          }
          break;
      }
      return returnDay;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#homeItem {
  margin-top: 10px;
  margin-right: 10px;
}
.circleBox {
  padding: 8px 10px;
  border: 4px solid #e1e1e1;
  border-radius: 8px;
  margin-left: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 12px;
  margin-right: 20px;
}
@media (max-width: 750px) {
  .circleBox {
    width: 85vw;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .title {
    font-size: 24px;
    margin-right: 10px;
  }
}
</style>
