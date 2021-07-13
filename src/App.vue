<template>
  <div>
    <p>Hello {{ name }}!!</p>
    <button @click="onClickButton">변경</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // 컴포넌트
  },
  props: {
    // 프롭스
  },
  data() {
    // 데이터
    return {
      name: 'Vue',
    };
  },
  computed: {
    // 가공된 데이터
  },
  watch: {
    // 데이터 감시
  },
  
  beforeCreate() {},
  created() {
    // 생명주기 - 생성
  },
  beforeMount() {},
  mounted() {
    // 생명주기 - 렌더링
  },
  beforeUpdate() {},
  updated() {
    // 생명주기 - 리렌더링
  },
  beforeUnmount() {},
  unmounted() {
    // 생명주기 - 소멸
  },
  methods: {
    // 메소드
    onClickButton() {
      if (this.name === 'Vue') {
        this.name = 'React';
      } else {
        this.name = 'Vue';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #ffffff;
  background: #333333;
  padding: 10px;
}
</style>