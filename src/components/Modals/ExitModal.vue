<template lang="">
  <div class="modal_wrapper">
    <div class="modal_inner_wrapper">
      <div class="modal-header">
        <h1>Get In Touch!</h1>
      </div>
      <hr />
      <div class="modal-main">
        <form ref="contact_form" aria-label="contact-form">
          <div class="input-group">
            <label for="name">Name: </label>
            <input id="name" name="name" type="text" required />
          </div>
          <div class="input-group">
            <label for="email">Email: </label>
            <input id="email" name="email" type="email" required />
          </div>
          <div class="input-group">
            <label for="phone">Phone: </label>
            <input id="phone" name="phone" type="phone" />
          </div>
          <div class="input-group">
            <label for="message">Message: </label>
            <textarea id="message" name="message" rows="6" cols="20" />
          </div>
        </form>
      </div>
      <hr />
      <div class="modal-footer">
        <div @click="closeModal" class="close-bttn" role="button">
          <div class="inside-border">
            <p>Exit</p>
          </div>
        </div>
        <div @click="submitContactForm" class="close-bttn" role="button">
          <div class="inside-border">
            <p>Send</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
    submitContactForm() {
      emailjs.sendForm("service_nqorcuj", "contact_form", this.$refs.contact_form, "Nen3vHIrFa4RHGGdJ").then(
        (result) => {
          console.log("SUCCESS!", result.text);
          this.closeModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    },
  },
};
</script>
<style lang="scss">
.modal_wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  .modal_inner_wrapper {
    // min-height: 500px;
    min-width: 600px;
    background-color: #091428;
    border-radius: 8px;
    margin: auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
    border: solid 2px #c89b3c;
    box-shadow: 0px 2px 4px rgba(239, 234, 234, 0.3), 0px 2px 4px rgba(240, 230, 210, 0.35), 0px 4px 8px rgba(240, 230, 210, 0.35), 0px 8px 16px rgba(240, 230, 210, 0.35);
    color: #f0e6d2;
    hr {
      border: solid 1px rgba(0, 0, 0, 0.05);
      margin: 1em;
    }
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      .close-button {
        font-size: 1.5em;
        align-self: flex-start;
        cursor: url("../assets/link.cur"), pointer;
      }
    }
    .modal-main {
      flex-grow: 1;
      margin: 1em 0;
      padding: 0 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      .input-group {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
        label {
          margin-right: 1em;
          font-weight: bold;
          // border: solid 2px pink;
          width: 75px;
          text-align: center;
        }
        input,
        textarea {
          padding: 8px;
          border-radius: 4px;
          flex-grow: 1;
          // line-height: 1.25;
          background-color: #005a8260;
          color: #f0e6d2;
          font-weight: bold;
          &:focus {
            outline: solid 1px #c89b3c;
          }
        }
      }
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      position: relative;
      .close-bttn {
        border: solid 1px #c89b3c;
        padding: 3px;
        text-decoration: none;
        position: relative;
        background-color: #463714;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: url("../assets/link.cur"), pointer;
        margin-right: 0.5em;
        border-radius: 2px;
        // margin: auto;
        padding: 0.25em 0.75em;
        font-size: 1.25em;
        color: #c8aa6e;
        font-weight: bold;
        // &:hover {
        //   background-color: rgb(67, 68, 69);
        // }
      }
    }
  }
}
</style>
