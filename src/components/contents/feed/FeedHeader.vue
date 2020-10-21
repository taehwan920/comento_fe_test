<template>
  <div class="feed__header">
    <ul class="feed__sort">
      <li class="sort-item item-left">
        <div class="sort__ball ball-selected" />
        <span class="sort__txt txt-selected"> 오름차순 </span>
      </li>
      <li class="sort-item">
        <div class="sort__ball" />
        <span class="sort__txt"> 내림차순 </span>
      </li>
    </ul>
    <button class="filter-btn">필터</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.feed__header {
  width: 100%;
  height: 24px;
  margin-bottom: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// 정렬 버튼
.feed__sort {
  width: max-content;
  height: max-content;
  display: flex;
}

.sort-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item-left {
  margin-right: 13px;
}

.sort__ball {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 5px;
  background: $weak-gray;
}

.ball-selected {
  background: $comento-green;
}

.sort__txt {
  font-size: 13px;
  font-weight: normal;
  color: $strong-gray;
}

.txt-selected {
  color: $content-black;
}

//필터 버튼
.filter-btn {
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px $weak-gray;
  background: #fff;
  font-weight: normal;
  color: $strong-gray;
  text-align: center;
  cursor: pointer;
}

.filter-btn:focus {
  outline: none;
}
</style>