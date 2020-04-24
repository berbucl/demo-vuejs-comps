<template>
  <div class="home">
    <h1>Home</h1>
    <sidebar :desc="desc"></sidebar>
    <comp-a></comp-a>
    <comp-b></comp-b>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import CompA from "@/components/CompA";
import CompB from "@/components/CompB";

export default {
  name: "Home",
  components: {
    CompA,
    CompB,
    Sidebar
  },
  data() {
    return {
      desc: "This is the description from Step 1 (Home)."
    };
  }
};
</script>
