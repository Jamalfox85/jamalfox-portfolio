<template lang="">
  <div>
    <n-modal v-model:show="showModal" :on-after-leave="onClose">
      <n-card style="width: 600px" title="Get In Touch!" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <template #header-extra></template>
        <div class="modal-main">
          <n-form ref="contactForm" :model="formValue" :rules="rules">
            <n-form-item path="name" label="Name">
              <n-input v-model:value="formValue.name" type="text" placeholder="Taylor Swift" />
            </n-form-item>
            <n-form-item path="email" label="Email">
              <n-input v-model:value="formValue.email" type="text" placeholder="taylorswift@gmail.com" />
            </n-form-item>
            <n-form-item path="phone" label="Phone">
              <n-input v-model:value="formValue.phone" type="text" placeholder="444-444-4444" />
            </n-form-item>
            <n-form-item path="message" label="Message">
              <n-input v-model:value="formValue.message" type="textarea" placeholder="Message" />
            </n-form-item>
          </n-form>
        </div>
        <template #footer class="modal-footer">
          <n-button ghost color="#c89b3c" @click="onClose">Close</n-button>
          <n-button color="#c89b3c" @click="validateForm">Submit</n-button>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>
<script>
import { NModal, NCard, NButton, NForm, NFormItem, NInput } from "naive-ui";
import emailjs from "@emailjs/browser";

export default {
  props: ["isOpen"],
  components: { NModal, NCard, NButton, NForm, NFormItem, NInput },
  data() {
    return {
      showModal: this.isOpen,
      formValue: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      rules: {
        name: {
          required: true,
          message: "Please input your name",
          trigger: "blur",
        },
        email: {
          required: true,
          message: "Please input your email",
          trigger: ["input", "blur"],
        },
        phone: {
          required: true,
          message: "Please input your number",
          trigger: ["input", "blur"],
        },
        message: {
          required: true,
          message: "Please input your message",
          trigger: ["input", "blur"],
        },
      },
    };
  },
  methods: {
    onClose() {
      this.$emit("closeModal");
    },
    validateForm(e) {
      this.$refs.contactForm.validate((errors) => {
        console.log(this.$refs.contactForm);
        if (!errors) {
          this.submitMessage();
          // message.success("Valid");
        } else {
          console.log(errors);
          //   message.error("Invalid");
        }
      });
    },
    submitMessage() {
      emailjs.sendForm("service_nqorcuj", "contact_form", this.$refs.contactForm.$el, "Nen3vHIrFa4RHGGdJ").then(
        (result) => {
          console.log("SUCCESS!", result.text);
          this.onClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    },
  },
  watch: {
    isOpen: function () {
      this.showModal = this.isOpen;
    },
  },
};
</script>
<style lang="scss">
.modal-main {
}
.n-card__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .n-button {
    margin: 0 0.5em;
  }
}
</style>
