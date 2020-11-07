<template>
  <div>
    <p>Hello {{ name }}!!</p>
    <button @click="onClickButton">변경</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: 'Vue',
    };
  },
  methods: {
    onClickButton() {
      this.name = 'React';
    },
  },
};
</script>

<style lang="scss">

</style>