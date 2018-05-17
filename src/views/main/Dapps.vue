<template>
<div class="hello">
  <el-button @click="visible = true">Button</el-button>
  <el-dialog :visible.sync="visible" title="Hello world" >
    <p>Try Element</p>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Dapps',
  data () {
    return {
      visible: false
    }
  }
}
</script>
