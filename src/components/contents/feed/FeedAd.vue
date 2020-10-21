<template>
  <article class="item-container ad-wrapper">
    <div class="ad-header">
      <span> sponsored </span>
    </div>
    <div class="ad-content">
      <div class="img-box">
        <img class="img-box__img" src="" alt="" />
      </div>
      <div class="ad-content__ad-txt">
        <div class="ad-txt__title">
          <h1>title</h1>
        </div>
        <div class="ad-txt__content">
          <div>content</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
.ad-wrapper {
  padding: 20px 54px 20px 30px;
  display: flex;
  flex-direction: column;
  font-weight: normal;
}

// 헤더 파트
.ad-header {
  width: 100%;
  height: max-content;
  margin-bottom: 15.5px;
}

.ad-header > span {
  font-size: 13px;
  color: $strong-gray;
}

// 광고 내용 파트
.ad-content {
  width: 100%;
  height: max-content;
  display: flex;
}

.img-box {
  margin-right: 29.5px;
}

.img-box__img {
  display: block;
  width: 315px;
  height: 179px;
}

.ad-content__ad-txt {
  width: calc(100% - 344.5px);
  display: flex;
  flex-direction: column;
}

.ad-txt__title {
  width: 100%;
  min-height: 56px;
  margin-bottom: 10px;
}

.ad-txt__title > h1 {
  font-size: 18px;
  color: $title-black;
  font-weight: bold;
}

.ad-txt__content {
  width: 100%;
  min-height: 100px;
}

.ad-txt__content > div {
  font-size: 16px;
  color: $content-black;
}
</style>