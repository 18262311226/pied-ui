<template>
  <div class="pied-select" @click="handelShow">
    <div class="pied-select-value">好看</div>
    <div class="pied-select-icon">&gt;</div>
    <transition name="fade">
        <div class="select-bg" v-if="selectBg" @click.stop.self="handelClose">
            <div class="bg-main">
                <div class="main-select-input">
                    <pied-input label="search" center></pied-input>
                </div>
                <div class="main-select-content">
                    <ul class="content-list">
                        <li class="list-item" 
                            v-for="(item,index) in 20" 
                            :key="index"
                            :class="[currentItemIndex == index ? 'itemActive' : '']"
                            @click="itemClick(index)"
                        >
                            option{{index}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {  
  name: 'piedSelect'
}
</script>

<script setup>
import { ref } from 'vue'
const selectBg = ref(false)
const currentItemIndex = ref('')
const inputValue = ref('')
const handelShow = () => {
    selectBg.value = true
}
const handelClose = () => {
    selectBg.value = false
}
const itemClick = (index) => {
    currentItemIndex.value = index
}
</script>

<style lang="scss" scoped>
.pied-select{
    width:100%;
    height:40px;
    position:relative;
    padding:2px 2px 2px 2px;
    box-sizing: border-box;
    background:linear-gradient(120deg, skyblue, purple);
    box-shadow: 0 15px 10px -10px rosybrown;
    cursor: pointer;
    .pied-select-value{
        width:100%;
        height:35px;
        background:#fff;
        color:rgb(113, 112, 112);
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        line-height:35px;
    }
    .pied-select-icon{
        position:absolute;
        right:10px;
        top:50%;
        transform: translateY(-50%);
        font-size: 20px;
        font-family: '宋体';
        font-weight: 700;
        color:purple;
    }
    .select-bg{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background:linear-gradient(90deg, purple, skyblue);
        .bg-main{
            width:500px;
            margin:auto;
            .main-select-input{
                width:300px;
                margin:20px auto;
            }
            .main-select-content{
                width:100%;
                height:400px;
                margin:auto;
                border-radius: 20px;
                padding:10px;
                box-sizing: border-box;
                .content-list{
                    width:100%;
                    height:100%;
                    overflow:hidden ;
                    overflow-y: auto;
                    .list-item{
                        width:100%;
                        height:40px;
                        transition: 0.8s;
                        text-align: center;
                        line-height: 40px;
                        color:#fff;
                    }
                    .itemActive{
                        color:#333;
                        height:60px;
                        background:#fff;
                        line-height: 60px;
                        font-size: 20px;
                    }
                    .list-item:hover{
                        color:#333;
                        height:60px;
                        background:#fff;
                        line-height: 60px;
                        font-size: 20px;
                    }
                }
            }
        }
    }
}

.fade-enter-from,.fade-leave-to{
    transform:scale(0);
    opacity: 0;
}
.fade-enter-active,.fade-leave-active {
    transition: all 0.5s;
}

.content-list::-webkit-scrollbar {
  width: 2px;
  height: 8px;
}

.content-list::-webkit-scrollbar-track {
  background-color:transparent;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
.content-list::-webkit-scrollbar-thumb {
  background-color: rgb(147,147,153,0.5);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
</style>