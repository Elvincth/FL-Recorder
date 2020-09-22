<!--Record windows select-->
<template>
  <div>
    <div class="mytab">
      <v-tabs v-bind="tabsOptions" v-model="tab">
        <!--Tabs-->
        <v-tab v-for="(item, i) in tabData" :key="i">{{item.text}}</v-tab>

        <v-tabs-items v-model="tab" dark>
          <v-tab-item v-for="(item, i) in tabData" :key="i">
            <v-card>
              <!--Window select-->
              <div
                v-for="(source,i) in item.id=='screen' ? purifyArray(screenSources):purifyArray(windowSources)"
                :key="i"
              >
                <img :src="pngToB64(source.thumbnail.toPNG())" />
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <!-- <v-tab-item v-for="i in 2" :key="i" v-model="tab">
          <v-card flat tile>
            <v-card-text>test</v-card-text>
          </v-card>
        </v-tab-item>-->
      </v-tabs>
    </div>

    <br />
  </div>
</template>

<script>
//Lib
import recorderMixin from "../util/record-mixin";

export default {
  mixins: [recorderMixin],
  data() {
    return {
      tab: null,
      //For tabs
      tabData: [
        {
          text: "your enitre screen",
          id: "screen",
        },
        {
          text: "application window",
          id: "window",
        },
      ],
      tabsOptions: {
        "background-color": "var(--background-color)!important",
        "slider-color": "var(--main-color)!important",
        color: "var(--main-color)!important",
        dark: true,
        grow: true,
        // centered: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.mytab {
  position: sticky;
  top: 0;
}

::v-deep .v-tab {
  font-family: "roboto", sans-serif;
  text-transform: capitalize !important;
  letter-spacing: 0.5px;
}
</style>
