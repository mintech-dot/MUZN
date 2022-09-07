<template>
  <nav dir="rtl" 
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between font-Changa"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          > مزن</a
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        
        <ul class="flex flex-col lg:flex-row list-none justify-center items-center mr-auto  ">
         
          <li class="flex items-center">
            <button
              class="bg-transparent hover:bg-blue-200 text-white font-Changa hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arrow"></i> إتصل بنا
            </button>
            <button
              class="bg-transparent hover:bg-blue-200 text-white font-Changa hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arr"></i> عن مزن
            </button>
            <button
              class="bg-transparent hover:bg-blue-200 text-white font-Changa hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa"></i> المؤسسون
            </button>
            <button
              class="bg-transparent hover:bg-blue-200 text-white font-Changa hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa"></i> المؤسسون
            </button>
            
          </li>
          
        </ul>

         <ul class="flex flex-col lg:flex-row list-none mr-auto">
           <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Share</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Star</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBarFront",

  data() {

    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
