<template>
  <div>
    <transition name="fade">
      <router-view class="wrapper"></router-view>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
