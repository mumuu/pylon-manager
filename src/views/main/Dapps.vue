<template>
  <div class="hello">
    <el-button @click="poppage">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dapps',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    poppage: function() {
      console.log(this.$route);
      console.log(this.$store.state);
      // this.$router.go('/');
    },
  },
};
</script>
