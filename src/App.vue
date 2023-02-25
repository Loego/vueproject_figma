<template>
  <div class="d-flex flex-column col-12">
    <Navbar />
    <TokenPanel />
  </div>
 
</template>

<style scoped>
  main{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
</style>

<script>
import Land from '../components/layout/Land.vue';

import Navbar from '../components/layout/Navbar.vue';
import HumanMD from '../components/panels/HumanMD.vue';
import TokenPanel from '../components/panels/TokenPanel.vue';
import Total from '../components/panels/total.vue';
import OtherPanels from '../components/panels/OtherPanels.vue';
import Footers from '../components/layout/Footers.vue';
import RecentEntries from '../components/panels/RecentEntries.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Land, TokenPanel, HumanMD, Total, OtherPanels, Footers, RecentEntries }
}
</script>
