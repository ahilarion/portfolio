<script setup>
import {defineProps, onMounted, ref} from 'vue';
import router from "@/router/index.js";

const dynamicLineCount = ref(0);
const props = defineProps({
  changeCurrentRoute: Function
});

const data = ref({
  email: "",
  message: "",
  date: new Date().toDateString(),
  name: ""
});

function updateLineCount() {
  const textContent = document.querySelector('.text-content');
  if (textContent) {
    const lineHeight = parseFloat(getComputedStyle(textContent).lineHeight);
    const totalHeight = textContent.scrollHeight;
    dynamicLineCount.value = Math.ceil(totalHeight / lineHeight);
  }
}

function sendForm() {
  let subject = "Contact from " + data.value.name;
  let body = data.value.message;
  let mailto = "mailto:contact@alan-hilarion.fr";

  data.value = {
    email: "",
    message: "",
    date: new Date().toDateString(),
    name: ""
  };

  window.location.href = mailto + "?subject=" + subject + "&body=" + body;
}

function goToParent() {
  router.push("/");
}

onMounted(async () => {
  props.changeCurrentRoute("/contact-me");
  document.title = "Contact me - Alan Hilarion";
  updateLineCount();
});

</script>

<template>
  <div class="h-full w-full flex items-center justify-start">
    <div class="flex flex-col items-center justify-start w-80 h-full border-r border-stroke transition-all">
    </div>
    <div class="flex flex-col items-center justify-start w-full h-full transition-all">
      <div class="h-8 w-full flex items-center justify-start border-b border-stroke">
        <div class="flex items-center justify-start gap-2 border-r border-stroke px-4 h-full">
          <span class="text-text">contact-me</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-text w-4 h-4 cursor-pointer" viewBox="0 0 384 512" @click="goToParent">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
        </div>
      </div>
      <div class="flex-1 flex items-start justify-start w-full">
        <div class="flex flex-col items-center justify-center w-1/2 h-full p-4 transition-all border-r border-stroke">
          <div class="w-3/4 flex flex-col items-start justify-stretch gap-4">
            <div class="flex flex-col items-start justify-start w-full gap-2">
              <label for="name" class="text-text">Name</label>
              <input type="text" placeholder="Name" class="w-full h-12 p-4 border border-stroke rounded-lg text-text bg-primary" v-model="data.name" maxlength="30">
            </div>
            <div class="flex flex-col items-start justify-start w-full gap-2">
              <label for="email" class="text-text">Email</label>
              <input type="email" placeholder="Email" class="w-full h-12 p-4 border border-stroke rounded-lg text-text bg-primary" v-model="data.email" maxlength="40">
            </div>
            <div class="flex flex-col items-start justify-start w-full gap-2">
              <label for="message" class="text-text">Message</label>
              <textarea placeholder="Message" class="w-full h-32 p-4 border border-stroke rounded-lg text-text bg-primary resize-none" v-model="data.message" maxlength="250"></textarea>
            </div>
            <button class="flex items-center justify-center w-full h-12 text-text bg-primary border border-stroke rounded-lg hover:bg-sp-blue hover:text-primary transition-all" @click="sendForm">Send</button>
          </div>
        </div>
        <div class="flex flex-col items-center justify-start w-1/2 h-full p-4 transition-all border-r border-stroke">
          <div class="grid grid-cols-[1fr_30fr] w-full">
            <div class="line-numbers flex flex-col text-right pr-4 text-[#8b8b8b] select-none">
              <div v-for="n in dynamicLineCount" :key="n">{{ n }}</div>
            </div>
            <div class="text-content text-text text-justify h-auto p-4">
              <span style="color: #8be9fd;">const</span> <span style="color: #f8f8f2;">button</span> = <span style="color: #f8f8f2;">document</span>.<span style="color: #f8f8f2;">querySelector</span>(<span style="color: #50fa7b;">'#send-button'</span>);
              <br/><br/>
              <span style="color: #8be9fd;">const</span> <span style="color: #f8f8f2;">message</span> = {
              <br/>
              &nbsp;&nbsp;<span style="color: #ff79c6;">name</span>: <span style="color: #50fa7b;">"{{data.name}}"</span>,
              <br/>
              &nbsp;&nbsp;<span style="color: #ff79c6;">email</span>: <span style="color: #50fa7b;">"{{data.email}}"</span>,
              <br/>
              &nbsp;&nbsp;<span style="color: #ff79c6;">message</span>: <span style="color: #50fa7b;">"..."</span>,
              <br/>
              &nbsp;&nbsp;<span style="color: #ff79c6;">date</span>: <span style="color: #50fa7b;">"{{data.date}}"</span>
              <br/>
              };
              <br/><br/>
              <span style="color: #f8f8f2;">button</span>.<span style="color: #f8f8f2;">addEventListener</span>(<span style="color: #50fa7b;">'click'</span>, () => {
              <br/>
              &nbsp;&nbsp;<span style="color: #f8f8f2;">form</span>.<span style="color: #f8f8f2;">send</span>(<span style="color: #f8f8f2;">message</span>);
              <br/>
              &nbsp;&nbsp;<span style="color: #f8f8f2;">console</span>.<span style="color: #f8f8f2;">log</span>(<span style="color: #f8f8f2;">message</span>);
              <br/>
              });
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>