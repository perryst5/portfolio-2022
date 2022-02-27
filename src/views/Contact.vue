<template>
  <div class="page">
    <h1>Connect with me on a social network</h1>
    <div class="socials">
      <a href="https://github.com/perryst5">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://www.linkedin.com/in/steeeveperry">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://www.instagram.com/wut_a_concept/">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
    <h2>Or send me an email via this form</h2>
    <div class="container">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input 
          type="text" 
          v-model="name"
          name="from_name"
          placeholder="Your Name"
        >
        <label>Email</label>
        <input 
          type="email" 
          v-model="email"
          name="email"
          placeholder="Your Email"
          >
        <label>Message</label>
        <textarea 
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
        </textarea>
        
        <input type="submit" value="Send">
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1, h2, .socials{
  text-align: center;
}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-family: 'Athiti', sans-serif;
  font-weight: 700;
  color: #333;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.socials{
  a{
    font-size: 40px;
    margin: 0 20px;

    &:hover{
      color: #ed2121;
    }
  }
}
</style>

<script lang="ts">
import emailjs from 'emailjs-com'
import { defineComponent } from 'vue'


export default defineComponent({
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_tfr1txk', 'template_w7xjm1d', e.target, 'EML_Nc8jJKjAB-VTu')
      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
});
</script>
