<template>
  <div class="hello" v-if="dapps&&dapps.docs.length>0">
    <el-table :data="dapps.docs" stripe style="width: 100%">
      <el-table-column width="60">
        <template slot-scope="scope">
          <p>{{scope.$index}}</p>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <img :src=scope.row.logo style="height:20px">
        </template>
      </el-table-column>
      <el-table-column prop="title" label="名称">
      </el-table-column>
      <el-table-column prop="balance" label="余额">
      </el-table-column>
      <el-table-column prop="tx_last_day" label="24小时交易量">
      </el-table-column>
      <el-table-column prop="tx_last_week" label="7天交易量">
      </el-table-column>
      <el-table-column prop="volume_last_day" label="24小时交易额">
      </el-table-column>
      <el-table-column prop="volume_last_week" label="7天交易额">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :page-count="dapps.pages" @current-change="pageChanged">
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Dapps',
  data() {
    return {
      visible: false,
      currentPage: 1,
    };
  },
  computed: {
    ...mapState({
      dapps: state => state.dapps.dapps,
    }),
  },
  created() {
    this.$store.dispatch('getDapps', { page: 1 });
  },
  methods: {
    pageChanged: function(val) {
      this.$store.dispatch('getDapps', { params: { page: val } });
    },
  },
};
</script>
