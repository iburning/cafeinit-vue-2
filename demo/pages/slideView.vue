<template>
  <div id="page-slide-view">
    <ci-slide-view class="banner" ref="my-slide-view"
      v-model="items"
      v-bind:duration="300"
      v-bind:delay="3000"
      v-bind:isAutoplay="true"
      v-bind:isLoop="true"
      v-bind:index="0"
      v-bind:item-width="itemWidth"
      v-bind:item-height="itemHeight"
      v-bind:isShowButtons="false"
      v-bind:isShowDots="true"
      v-on:did-change="mySlideViewDidChange">
      <ci-slide-view-item class="box-item"
        v-for="(item, index) in items" v-bind:key="index"
        v-bind:index="index" v-bind:width="itemWidth" v-bind:height="itemHeight">
        <ci-image v-bind:src="item.banner" v-bind:width="itemWidth" v-bind:height="itemHeight"></ci-image>
      </ci-slide-view-item>
    </ci-slide-view>

    <p>{{currentIndex}}</p>
  </div>
</template>

<script>
export default {
  name: 'page-slide-view',

  data() {
    return {
      itemWidth: window.innerWidth,
      itemHeight: parseInt(window.innerWidth * 0.35),
      items: [
        { banner: 'http://i3.mifile.cn/a4/91214487-3c8c-4fa5-b27d-1fea1e2f8773' },
        { banner: 'http://i3.mifile.cn/a4/d1e41f4a-2fb3-42cc-86be-4f4be9e046df' },
        { banner: 'http://i3.mifile.cn/a4/a8c14776-3d56-484f-8d5a-958693d3afdc' },
        { banner: 'http://i3.mifile.cn/a4/592af129-b3ea-487f-9fe3-848c588fa681' },
        { banner: 'http://i3.mifile.cn/a4/ac593fe5-c5ab-4541-9526-f113b03ee213' }
      ],
      currentIndex: 0
    }
  },

  methods: {
    mySlideViewDidChange(index, lastIndex) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less">
.banner {
  margin-bottom: 25px;
}

.ci-slide-view {
  position: relative;
}

.ci-slide-view-item {
  float: left;
}

.ci-slide-view-prev,
.ci-slide-view-next {
  display: block;
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  background-color: #fff;
  text-align: center;
  line-height: 30px;
  opacity: 0.5;
}

.ci-slide-view-prev {
  left: 10px;
}

.ci-slide-view-next {
  right: 10px;
}

.ci-slide-view-dots {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 30px;
  text-align: center;
}

.ci-slide-view-dot {
  display: inline-block;
  overflow: hidden;
  width: 10px;
  height: 10px;
  padding: 0;
  margin: 0 2px;
  border-radius: 50%;
  background-color: #fff;
  text-indent: -100px;
  opacity: 0.5;

  &.ci-actived {
    background-color: #52b888;
  }
}
</style>
