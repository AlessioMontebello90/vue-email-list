const app = Vue.createApp({
  data() {
    return {
      mailList: [],
    };
  },
  methods: {
    getRandomMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((serverResponse) =>
            this.mailList.push(serverResponse.data.response)
          );
      }
      this.mailList = [];
    },
  },
  created() {
    this.getRandomMail();
  },
});

app.mount("#app");
