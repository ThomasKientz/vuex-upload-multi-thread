<template>
  <div id="app">
    <div>total completed : {{ $store.state.completed.length }}</div>
    <div>current : {{ $store.state.current }}</div>
  </div>
</template>

<script>
export default {
  name: "app",

  mounted() {
    this.uploadAll();
  },

  methods: {
    uploadAll() {
      this.$store.subscribeAction({
        after: (action, state) => {
          console.log(`after action ${action.type}`);
          if (state.buffer.length) this.$store.dispatch("uploadNext");
        }
      });

      this.$store.dispatch("uploadNext");
      this.$store.dispatch("uploadNext");
      this.$store.dispatch("uploadNext");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
