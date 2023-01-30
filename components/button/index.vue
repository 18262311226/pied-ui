<template>
  <div 
    class="pied-button"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PiedButton'
}
</script>

<script setup>

</script>


<style>
.pied-button{
  position: relative;
  width: 200px;
  height: 60px;
  border: 1px solid rgb(143, 238, 230);
  border-radius: 25px;
  text-align: center;
  line-height:60px;
  color: #fff;
  z-index:1;
  overflow: hidden;
  cursor: pointer;
}
.pied-button::before{
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  /* 旋转体的宽高决定了边框环绕的样式 */
  width: 120px;
  height:100px;
  background:linear-gradient(120deg, red, #41d1ff);
  z-index: -1;
  transform-origin: left top;
  /* 调用旋转动画 2秒一个周期 无限循环 匀速 */
  animation: rotate 2s infinite linear;
}
.pied-button::after{
  position: absolute;
  top: 3px;
  left: 4px;
  content: "";
  width: 190px;
  height: 50px;
  /* 修改按钮颜色可以在这里修改 */
  background:linear-gradient(120deg, red, #41d1ff);
  border-radius:19px;
  z-index: -1;
}
@keyframes rotate {
    to{
        transform: rotate(360deg);
    }
}
</style>