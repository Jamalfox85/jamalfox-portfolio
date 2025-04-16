<template lang="">
    <div class="mobile-menu-drawer">
        <n-drawer
            v-model:show="showMobileMenu"
            width="70%"
            :placement="'right'"
            :to="'#main-app-container'"
            :on-after-leave="closeDrawer"
        >
            <n-drawer-content title="">
                <div class="mobile-menu-links">
                    <div class="nav-links">
                        <div
                            class="nav-link-container custom-cursor-active"
                            @click="closeDrawer"
                        >
                            <RouterLink to="/" class="nav-link"
                                >HOME</RouterLink
                            >
                        </div>
                        <div
                            class="nav-link-container custom-cursor-active"
                            @click="closeDrawer"
                        >
                            <RouterLink to="/skills" class="nav-link"
                                >SKILLS</RouterLink
                            >
                        </div>
                        <div
                            class="nav-link-container custom-cursor-active"
                            @click="closeDrawer"
                        >
                            <RouterLink to="/projects" class="nav-link"
                                >PROJECTS</RouterLink
                            >
                        </div>
                        <!-- <div class="nav-link-container" :class="{ activeLink: currentPath === '/skills' }"><RouterLink to="/skills" class="nav-link">Skills</RouterLink></div> -->
                    </div>
                </div>
                <!-- RESUME DOWNLOAD BTTN -->
                <n-button
                    class="mobile-resume-button-group custom-cursor-active"
                    color="#C89B3C"
                    ghost
                >
                    <a
                        class="custom-cursor-active"
                        href="https://jamalfox-portfolio-resources.s3.us-east-1.amazonaws.com/Jamal_Fox_Resume.pdf"
                        target="_blank"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'arrow-up-right-from-square']"
                            style="margin-right: 4px"
                        />
                        RESUME</a
                    >
                </n-button>
                <!-- CONTACT BTTN -->
                <div class="contact-button-group">
                    <img
                        class="lol-header-icon"
                        src="@images/desktop-icons/league-icon.png"
                        alt="League of Legends Icon"
                    />
                    <div
                        @click="showContactDrawer = true"
                        class="contact-bttn custom-cursor-active"
                        role="button"
                    >
                        <div class="inside-border">
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            </n-drawer-content>
        </n-drawer>

        <!-- CONTACT DRAWER -->
        <contact-drawer
            :show="showContactDrawer"
            @close="showContactDrawer = false"
        />
    </div>
</template>
<script>
import ContactDrawer from "./ContactDrawer.vue";

import { NDrawer, NDrawerContent, NButton } from "naive-ui";

export default {
    props: ["show"],
    components: {
        ContactDrawer,
        NDrawer,
        NDrawerContent,
        NButton,
    },
    data() {
        return {
            showContactDrawer: false,
            showMobileMenu: false,
        };
    },
    methods: {
        closeDrawer() {
            this.$emit("close");
        },
    },
    watch: {
        show: {
            immediate: true,
            handler(newVal) {
                this.showMobileMenu = newVal;
            },
        },
    },
};
</script>
<style lang="scss">
.n-drawer {
    .n-drawer-content-wrapper {
        background-color: rgb(21, 30, 36);
        color: white;
        .n-drawer-body {
            .n-drawer-body-content-wrapper {
                display: flex !important;
                flex-direction: column;
                align-items: center;
                padding: 0;
            }
        }
    }
}

.mobile-menu-links {
    margin-top: 4em;
    .nav-links {
        .nav-link-container {
            margin-bottom: 1em;
            text-align: center;
            .nav-link {
                color: rgb(240, 230, 210);
                text-decoration: none;
                font-size: 1em;
            }
        }
    }
}
.mobile-resume-button-group {
    a,
    a:visited {
        color: rgb(240, 230, 210);
        font-size: 1em;
        text-decoration: none;
    }
    width: 100%;
}
.contact-button-group {
    position: relative;
    margin-top: auto;
    left: 1em; // To offset right: 2em of child element
}
</style>
