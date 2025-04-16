<template>
    <div class="main_wrapper">
        <img
            class="bg"
            src="https://jamalfox-portfolio-resources.s3.us-east-1.amazonaws.com/design-assets/default-mac-bg.jpg"
            alt="background"
        />
        <div class="desktop_wrapper">
            <desktop-view />
        </div>
        <div
            class="client_wrapper custom-cursor"
            v-if="clientOpen"
            id="main-app-container"
        >
            <img
                class="bg"
                src="/images/gameflow-background.jpg"
                alt="background"
            />
            <top-bar />
            <div class="client-main">
                <RouterView />
                <side-panel />
            </div>
            <div id="modal"></div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";
import SidePanel from "./components/SidePanel.vue";
import DesktopView from "./components/DesktopView.vue";

export default {
    components: { TopBar, SidePanel, DesktopView },
    data() {
        return {
            clientOpen: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.clientOpen = true;
        }, 2250);
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: Beaufort;
    src: url("./assets/fonts/beaufort-for-lol_woff/BeaufortforLOL-Regular.woff");
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.main_wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: black;
    position: relative;
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    background-size: cover;
    position: relative;
    align-items: center;
    justify-content: center;
    .desktop_wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }
    .client_wrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 90%;
        width: 90%;
        margin: 6em auto 0 auto;
        border-radius: 8px;
        background-color: rgb(7, 16, 24);
        padding: 4px;
        overflow: hidden;
        border: solid 2px #c89b3c;
        box-shadow: 0px 1px 2px rgba(239, 234, 234, 0.1),
            0px 2px 4px rgba(240, 230, 210, 0.15),
            0px 4px 8px rgba(240, 230, 210, 0.15),
            0px 8px 16px rgba(240, 230, 210, 0.15);
        opacity: 1;
        animation: loadClient 0.4s forwards;
        font-family: Beaufort;
        // background-image: url("../public/images/gameflow-background.jpeg");
        background-size: cover;

        .client-header {
            width: 100%;
            border-bottom: solid 2px rgb(67, 68, 69);
            display: flex;
            align-items: center;
            padding: 0.5 1em 0.75em 1em;
            position: relative;
        }
        .client-main {
            display: flex;
            position: relative;
            margin-top: auto;
            flex-grow: 1;
        }
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track {
            background: #32281e;
        }
        &::-webkit-scrollbar-thumb {
            background: #c89b3c;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #785a28;
        }
    }
}

@keyframes loadClient {
    from {
        opacity: 0;
        margin: 6em auto 0 auto;
    }
    to {
        opacity: 1;
        margin: auto auto;
    }
}

@media screen and (max-width: 900px) {
    .client-main {
        flex-direction: column;
    }
}
</style>
