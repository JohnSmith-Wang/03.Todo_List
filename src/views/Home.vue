<template>

    <main class="container-fluid">
      <div class="col-12 col-xl-6">
        <h4>★ 練習項目</h4>
        <ul>
          <li>Locale Stoarge 應用</li>
          <li>Vuex 應用</li>
          <li>Todo List實作</li>
        </ul>
      </div>
      <div class="col-12 col-xl-6">
        <h4>★ 功能簡述</h4>
        <ul>
          <li>新增待辦項目</li>
          <li>勾選可以使該待辦項目畫上刪除線(代表已完成)</li>
          <li>可以過濾出 全部項目、未完成項目、已完成項目</li>
          <li>點擊待辦項目的標題兩下，可以更改待辦項目的內容</li>
          <li>使用者下次使用相同瀏覽器時，會讀取上一次的設定</li>
          <li>提供 「清除所有已完成項目」 的功能</li>
        </ul>
      </div>
      <div class="col-12 col-xl-6">
        <h4>★ 更新履歷</h4>
        <ul>
          <li>8/01 初次建立</li>
          <li>8/21 更新RWD功能，修正輸入時無法選字的問題，字數超過時版面會跑掉的問題</li>
          <li>8/24 重新整理CSS程式碼的美觀</li>
          <li style="color:red">9/07 解決CSS的ID選擇器重複的問題</li>
        </ul>
      </div>
    </main>

</template>

<style lang="scss" scoped>
main div{
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

main div li{
  margin: 10px auto;
}

</style>

