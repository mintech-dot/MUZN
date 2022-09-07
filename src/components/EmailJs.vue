<template>
    
  <section class="relative block py-24 lg:pt-0 bg-gray-900 font-Changa" >
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
              <form @submit.prevent="sendEmail">
                <div class="flex-auto p-5 lg:p-10">
                  <h4  class="text-2xl font-semibold">تريد العمل معنا ؟ </h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    قم بملأ هذه الإستمارة و سنرد عليك في أسرع وقت
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >الإسم الكامل</label
                    ><input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      v-model="name"
                      name="name"
                      placeholder="إسمك الكامل"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >البريد الإلكتروني </label
                    ><input
                      type="email"
                      name="email"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="بريدك الإلكتروني"
                      v-model="email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >الرسالة</label
                    ><textarea
                      rows="4"
                      cols="80"
                      v-model="message"
                      name="message"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="أكتب رسالتك .."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <input type="submit" value="أرسل">

                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  </template>

<script>
import emailjs from 'emailjs-com';

export default {
name: 'EmailJs',
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
      emailjs.sendForm('service_0ybg9d6', 'template_9z9dng7', e.target, 'aImt3UnW0anRt23hU', {
        name: this.name,
        email: this.email,
        message: this.meessage
      })

    } catch (error) {
        console.log({error})
    }
    // Reset form field
    this.name = ''
    this.email = ''
    this.message = ''
  },
}
}
</script>


