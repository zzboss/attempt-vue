<template>
  <div class="zz-container font-to-img">
    <Split :v-model="0.5">
      <div slot="left" class="zz-center" style="height:100vh;">
        <div class="generate-area">
          <div class="font-option">
            <span class="zz-label">预览:</span>
            <div
              class="font-img"
              :style="
                `font-family:${fontFamily};font-weight:${fontWeight};font-size:${fontSize}px;`
              "
            >
              {{ inputText }}
            </div>
          </div>
          <div class="font-option">
            <span class="zz-label">输入字符:</span>
            <Input
              v-model="inputText"
              placeholder="Enter something..."
              style="width:200px"
            />
          </div>
          <div class="font-option">
            <span class="zz-label">选择字体:</span>
            <Select v-model="fontFamily" style="width:200px">
              <Option
                v-for="item in fontFamilyList"
                :value="item.value"
                :key="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
          <div class="font-option">
            <span class="zz-label">选择字粗:</span>
            <Select v-model="fontWeight" style="width:200px">
              <Option
                v-for="item in fontWeightList"
                :value="item.value"
                :key="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
          <div class="font-option">
            <span class="zz-label">选择字号:</span>
            <Slider
              v-model="fontSize"
              :min="12"
              :max="36"
              style="width:200px"
            />
          </div>
          <Button type="primary" @click="generate">生成</Button>
        </div>
      </div>
      <div slot="right" class="zz-center" style="height:100vh;">
        <div class="generate-area">
          <img :src="imgDataUrl" :style="imgParam" alt="文字图片" />
        </div>
      </div>
    </Split>
  </div>
</template>

<script>
import fontList from '@/assets/font_family.json'
export default {
  data() {
    return {
      inputText: '两个黄鹂鸣翠柳',
      fontFamily: 'Microsoft Yahei',
      fontWeight: 'normal',
      fontSize: 16,
      fontFamilyList: fontList,
      fontWeightList: [
        {
          label: '加粗',
          value: 'bold'
        },
        {
          label: '正常',
          value: 'normal'
        }
      ],
      imgDataUrl: '',
      imgParam: {
        width: '200px',
        height: '40px',
        border: 'solid 1px #fff'
      }
    }
  },
  methods: {
    generate() {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.height = 2 * this.fontSize * 2
      canvas.width = (this.inputText.length + 2) * this.fontSize * 2
      context.font = `${this.fontWeight} 
        ${this.fontSize * 2}px  
        ${this.fontFamily}`
      context.fillStyle = '#000000'
      context.fillText(this.inputText, canvas.height/2, this.fontSize * 3)
      this.imgParam.width = canvas.width / 2 + 'px'
      this.imgParam.height = canvas.height / 2 + 'px'
      this.imgDataUrl = canvas.toDataURL('image/png')
    }
  }
}
</script>

<style scoped>
.font-to-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.generate-area {
  width: 350px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid 1px #000;
}

.generate-area .font-option {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
}
.generate-area .zz-label {
  text-align: center;
}
.font-img {
  width: 200px;
  /* height: 100px; */
  border: solid 1px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
