<template>
  <div class="zz-container">
    <h1>Zzboss 实验室</h1>
    <Row
      style="padding:20px"
      v-for="(rowCard, rowIndex) in cardList"
      :key="rowIndex"
    >
      <Col
        span="6"
        offset="1"
        v-for="(item, colIndex) in rowCard"
        :key="colIndex"
      >
        <div class="card" @click="toPath" :data-url="item.pathName">
          <h3>{{ item.title }}</h3>
          <div>
            {{ item.description }}
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        [
          {
            title: 'Js 文字转图片',
            description: '通过 canvas 将指定的文字转为图片显示',
            pathName: 'font-to-img'
          },
          {
            title: '图片灰度处理',
            description: '通过 canvas 将图片转为灰色'
          },
          {
            title: '动手实验室',
            description: '尝试一些 api 的使用'
          }
        ]
      ]
    }
  },
  methods: {
    toPath(e) {
      const pathName = e.currentTarget.dataset.url
      this.$router.push({
        path: pathName
      })
    }
  }
}
</script>

<style>
.zz-container h1 {
  width: 200px;
  margin: 30px calc(50% - 100px);
  color: #2f3542;
}

.zz-container .card {
  height: 100px;
  display: flex;
  color: #2f3542;
  flex-direction: column;
  border: solid 1px black;
  box-shadow: 1px 1px 2px #2c3a47;
  background-color: #fea47f;
}
.card :first-child {
  height: 40px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #2c3a47;
}
.card :last-child {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
