<template>
  <article class="item-container feed-content">
    <div class="content__category">
      <span class="category__name">category name</span>
      <span class="category__content-id">content id</span>
    </div>
    <div class="content__info">
      <span class="info__user-id">user id</span>
      <span class="info__date">created at(yyyy-mm-dd)</span>
    </div>
    <div class="content__title">
      <h1>
        titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
      </h1>
    </div>
    <div class="content__content">
      <div>
        contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
.feed-content {
  padding: 25px 30px 21px 30px;

  display: flex;
  flex-direction: column;
  background: #fff;

  font-weight: normal;
}

//카테고리 파트
.content__category {
  width: 100%;
  height: 20px;
  padding-bottom: 10px;
  border-bottom: solid 1px $weak-gray;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.category__name {
  color: $stronger-gray;
}

.category__content-id {
  color: $strong-gray;
}

// 유저 id 및 날짜 파트
.content__info {
  width: 100%;
  height: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  font-size: 13px;
}

.info__user-id {
  height: 15px;
  padding-right: 12px;
  border-right: solid 1px $weak-gray;
  margin-right: 10px;
  display: inline-block;
  color: $comento-green;
}

.info__date {
  height: 15px;
  display: inline-block;
  color: $content-black;
}

// 제목 파트
.content__title {
  width: 100%;
  height: 28px;
  padding-right: 49px;
  margin-bottom: 5px;
}

.content__title > h1 {
  font-size: 18px;
  font-weight: bold;
  color: $title-black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 글 내용 파트
.content__content {
  width: 100%;
  height: 25px;
  padding-right: 49px;
}

.content__content > div {
  font-size: 16px;
  color: $content-black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>