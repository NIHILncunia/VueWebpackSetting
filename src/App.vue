<template>
  <div class="namebox">
    <p>안녕 나는 {{ name }}이야!</p>
    <p>이것은 Vue 테스트란다!</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: '니힐',
    };
  },
  methods: {},
};
</script>

<style lang="scss">
  .namebox {
    & p {
      color: #eeeeee;
      background: #333333;
      padding: 10px;
    }
  }
</style>