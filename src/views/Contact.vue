<template>
  <div class="page">
    <Header />
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
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
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
</style>

<script lang="ts">
import Header from '@/components/Header.vue'
import emailjs from 'emailjs-com'
import { defineComponent } from 'vue'


export default defineComponent({
  name: "Contact",
  components: {
    Header
  },
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
        emailjs.sendForm('service_tfr1txk', 'template_w7xjm1d', e.target,
        'EML_Nc8jJKjAB-VTu', {
          from_name: this.name,
          email: this.email,
          message: this.message
        })

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
