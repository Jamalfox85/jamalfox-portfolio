<template>
    <div class="contact-drawer">
        <n-drawer
            v-model:show="showContactDrawer"
            width="300px"
            placement="right"
            to="#main-app-container"
            :on-after-leave="closeDrawer"
        >
            <n-drawer-content title="Contact">
                <n-form
                    ref="formRef"
                    :model="form"
                    :rules="rules"
                    label-placement="top"
                >
                    <n-form-item path="name" label="Name">
                        <n-input
                            v-model:value="form.name"
                            placeholder="Your Name"
                        />
                    </n-form-item>
                    <n-form-item path="email" label="Email">
                        <n-input
                            v-model:value="form.email"
                            placeholder="you@email.com"
                        />
                    </n-form-item>
                    <n-form-item path="message" label="Message">
                        <n-input
                            v-model:value="form.message"
                            type="textarea"
                            placeholder="Your message..."
                        />
                    </n-form-item>
                </n-form>
                <div class="button-group">
                    <n-button @click="closeDrawer" color="#c89b3c" ghost
                        >Cancel</n-button
                    >
                    <n-button color="#c89b3c" @click="submitForm"
                        >Send</n-button
                    >
                </div>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script>
import {
    NDrawer,
    NDrawerContent,
    NButton,
    NInput,
    NForm,
    NFormItem,
} from "naive-ui";
import emailjs from "@emailjs/browser";

export default {
    props: ["show"],
    components: {
        NDrawer,
        NDrawerContent,
        NButton,
        NInput,
        NForm,
        NFormItem,
    },
    data() {
        return {
            showContactDrawer: false,
            form: {
                name: "",
                email: "",
                message: "",
            },
            rules: {
                name: {
                    required: true,
                    message: "Please enter your name",
                    trigger: "blur",
                },
                email: {
                    required: true,
                    message: "Please enter a valid email",
                    trigger: ["blur", "input"],
                },
                message: {
                    required: true,
                    message: "Please enter a message",
                    trigger: "blur",
                },
            },
        };
    },
    methods: {
        closeDrawer() {
            this.$emit("close");
        },
        submitForm() {
            this.$refs.formRef.validate((errors) => {
                if (!errors) {
                    emailjs
                        .send(
                            "service_mp42lri",
                            "contact_form",
                            this.form,
                            "Nen3vHIrFa4RHGGdJ"
                        )
                        .then((result) => {
                            window.$message.success("Message sent!");
                            this.closeDrawer();
                        })
                        .catch((error) => {
                            window.$message.error(
                                "Failed to send message. Please try again."
                            );
                            console.error(
                                "Failed to send message:",
                                error.text
                            );
                        });
                } else {
                    console.log("Form errors:", errors);
                }
            });
        },
    },
    watch: {
        show: {
            immediate: true,
            handler(newVal) {
                this.showContactDrawer = newVal;
            },
        },
    },
};
</script>

<style lang="scss">
.n-drawer {
    .n-drawer-header__main {
        color: #f0e6d2;
    }
    .n-drawer-content-wrapper {
        background-color: rgb(21, 30, 36);
        color: white;
        .n-drawer-body {
            padding: 1.5em;
        }
    }
}

.n-form {
    width: 100%;
    .n-form-item {
        margin-bottom: 0.5em;
    }
    .n-form-item-label__text {
        color: #a09b8c !important;
    }
    .n-input .n-input--resizable .n-input--stateful {
        border: solid 2px #785a28 !important;
    }
    .n-input,
    .n-input--focus,
    .n-input--stateful {
        background-color: #0a1428 !important;
        border: solid 2px #785a28 !important;
    }
    .n-input__input-el,
    .n-input__textarea-el {
        color: #f0e6d2 !important;
    }
    .n-input__placeholder {
        color: #5c5c61 !important;
    }
}

.button-group {
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    margin-top: 1.5em;
}
</style>
