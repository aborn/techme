<template>
  <header class="grax_topbar w-full fixed top-0 left-0 z-10 bg-dark py-4">
    <div class="container">
      <div class="w-100 h-auto items-center flex justify-between">
        <div class="w-auto text-white">
          <NuxtLink to="/" class="hover:no-underline flex">
            <span class="self-center text-white"> 比心技术 </span>
          </NuxtLink>
        </div>
        <div class="text-white hidden lg:block">
          <TheNavigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
