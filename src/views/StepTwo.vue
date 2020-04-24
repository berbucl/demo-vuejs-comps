<template>
  <div>
    <h1>Step 2</h1>
    <sidebar :desc="desc"></sidebar>
    <comp-c></comp-c>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import CompC from "@/components/CompC";
export default {
  components: {
    CompC,
    Sidebar
  },
  data() {
    return {
      desc: "This is the description from Step 2."
    };
  }
};
</script>

<style></style>
