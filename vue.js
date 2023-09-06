const app = Vue.createApp({
  data() {
    return {
      mailList: [],
    };
  },
  methods: {
    getRandomMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(
          (serverResponse) => (this.mailList = serverResponse.data.response)
        );
    },
  },
  created() {
    this.getRandomMail();
  },
});

app.mount("#app");
