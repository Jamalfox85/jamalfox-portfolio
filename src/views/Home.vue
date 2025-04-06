<template lang="">
  <div class="home_wrapper">
    <div class="home-top-panel">
      <p
        class="home-top-panel-link custom-cursor-active"
        :class="{ active: mode == -1 }"
        @click="loadAboutView"
      >
        ABOUT
      </p>
      <p
        class="home-top-panel-link custom-cursor-active"
        :class="{ active: mode == 0 }"
        @click="loadOverviewView"
      >
        OVERVIEW
      </p>
      <!-- <p class="home-top-panel-link custom-cursor-active" :class="{ active: mode == 1 }" @click="loadExperienceView">EXPERIENCE</p> -->
      <n-button
        class="home-top-panel-button custom-cursor-active"
        color="#C89B3C"
        ghost
      >
        <!-- This is the React Resume / Resume with react skills first -->
        <a
          class="home-top-panel-link custom-cursor-active"
          href="./downloads/Jamal_Fox_Resume.pdf"
          download
        >
          <font-awesome-icon :icon="['fas', 'download']" /> RESUME</a
        >
      </n-button>
    </div>
    <div class="home-main-panel">
      <div class="home-text" ref="homeMainLeft">
        <p>Full Stack Developer</p>
        <h1>Jamal Fox</h1>
        <p>Welcome to my portfolio! Take a look around!</p>
      </div>
      <div class="home-video" ref="homeMainRight">
        <iframe
          v-if="mode == 0"
          class="iframe"
          src="https://www.youtube.com/embed/RIch8f194ek?si=ui5gBf8pHtRPg6y-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div v-if="mode == -1" class="about-wrapper">
          <h2>Hello! &#129299;</h2>
          <p>
            I'm Jamal Fox, a dedicated Full-Stack Developer with a passion for
            creating visually stunning and highly functional web applications.
            With a solid background in Information Systems and a proven track
            record in the tech industry, I excel at bringing creative ideas to
            life through code. &#129303;
          </p>
          <p>
            Throughout my career, I've had the opportunity to lead front-end
            development initiatives, enhance accessibility, and engage directly
            with clients as a Technical Sales Agent at Rebillia. These
            experiences have sharpened my ability to collaborate effectively
            with cross-functional teams, ensuring that every project meets the
            highest standards of precision and functionality.
          </p>
          <p>
            I’m also a strong advocate for web accessibility, adhering to WCAG
            guidelines to ensure that the digital experiences I create are
            inclusive and accessible to all users.
          </p>
          <p>
            Feel free to reach out at
            <a
              style="color: #f0e6d2; text-decoration: underline"
              href="mailto:fox.jamal@outlook.com"
              >Fox.Jamal@outlook.com</a
            >
            or give me a call at (678) 522-8843. I’d love to connect and explore
            how we can work together. &#128513;
          </p>
        </div>
        <div v-if="mode == 1" class="timeline-wrapper">
          <n-timeline>
            <n-timeline-item
              type="success"
              title="Freelance"
              content="Freelance Web Developer"
              time="June 2023 - "
            />
            <n-timeline-item
              type="success"
              title="American Reading Company"
              content="Front End Developer"
              time="March 2022 - "
            />
            <n-timeline-item
              type="success"
              title="Rebillia"
              content="Technical Sales Associate"
              time="February 2021 - March 2022 "
            />
          </n-timeline>
        </div>
      </div>
    </div>
    <div v-if="mode == 0" class="home-bottom-panel" ref="homeMainBottom">
      <div
        v-for="project in featuredProjects"
        class="item"
        :style="{
          flexGrow: project.portion,
          maxWidth: project.portion === 1 ? '125px' : 'auto',
        }"
      >
        <div class="image">
          <img :src="`images/project-photos/${project.img}`" />
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            class="custom-cursor-active"
          ></a>
          <a
            v-if="project.downloadLink"
            :href="project.downloadLink"
            class="download-link custom-cursor-active"
            download
          ></a>
        </div>
        <p>{{ project.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import featuredProjects from "../services/featuredProjects.json";
import TopBar from "../components/TopBar.vue";
import SidePanel from "../components/SidePanel.vue";
import { NButton, NTimeline, NTimelineItem } from "naive-ui";

export default {
  components: { TopBar, SidePanel, NButton, NTimeline, NTimelineItem },
  setup() {
    let filteredFeaturedProjects = featuredProjects.filter(
      (item) => item.featured
    );
    return { filteredFeaturedProjects };
  },
  data() {
    return {
      mode: 0,
      featuredProjects: [
        {
          title: "[App] Apollo Appointment Scheduler",
          portion: 2,
          img: "Apollo/dashboard.png",
          demoLink:
            "https://apollo-appointment-scheduler-evptp4uhp-jamalfox85.vercel.app/login",
        },
        {
          title: "[PPT] Intro to Web Accessibility",
          portion: 2,
          img: "intro-to-a11y.png",
          downloadLink: "./downloads/intro-to-web-accessibility.pptx",
        },
        {
          title: "[PPT] Accessibility Testing",
          portion: 2,
          img: "a11y-testing.png",
          downloadLink: "./downloads/accessibility-testing.pptx",
        },
        {
          title: "Vue Variables in CSS",
          portion: 1,
          img: "blog-vue-var-in-css.png",
          demoLink:
            "https://blog.stackademic.com/global-vue-variables-in-css-only-4-steps-6495921dcd31?sk=74434db7c8d442937879e6bd5ceaf643",
        },
        {
          title: "Vue Fontawesome",
          portion: 1,
          img: "vue-fontawesome.png",
          demoLink:
            "https://medium.com/@fox.jamal/vue-fontawesome-components-made-simple-06c221efb9b6?sk=f5af261929e60a946166623d5fbd3ea7",
        },
      ],
    };
  },
  methods: {
    setMode(mode) {
      this.mode = mode;
    },
    openLink(link) {
      window.open(link);
    },
    loadAboutView() {
      this.mode = -1;
      this.$refs.homeMainLeft.classList.add("about-view");
      this.$refs.homeMainLeft.classList.remove("experience-view");
    },
    loadOverviewView() {
      this.mode = 0;
      this.$refs.homeMainLeft.classList.remove("about-view");
      this.$refs.homeMainLeft.classList.remove("experience-view");
    },
    loadExperienceView() {
      this.mode = 1;
      this.$refs.homeMainLeft.classList.remove("about-view");
      this.$refs.homeMainLeft.classList.add("experience-view");
    },
  },
};
</script>

<style lang="scss">
.home_wrapper {
  flex-grow: 1;
  color: white;
  display: flex;
  flex-direction: column;
  // height: 70%;
  display: flex;
  flex-direction: column;
  .home-top-panel {
    display: flex;
    align-items: center;
    padding: 4px 16px;
    .home-top-panel-link {
      margin: 0 1.5em;
      color: #a09b8c;
      text-decoration: none;
      &.active {
        border-width: 0;
        border-bottom: 1px;
        border-style: solid;
        border-image: linear-gradient(
            300deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(200, 155, 60, 1) 48%,
            rgba(0, 0, 0, 1) 100%
          )
          1;
        color: #f0e6d2;
      }
      &:hover {
        color: #f0e6d2 !important;
      }
    }
    .home-top-panel-button {
      margin-left: auto;
      &:hover {
        background-color: #091428;
        .home-top-panel-link {
          color: #f0e6d2 !important;
        }
      }
    }
  }
  .home-main-panel {
    flex-grow: 1;
    display: flex;
    padding: 1em;
    position: relative;
    .home-text {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin: 0 1em 2em 2em;
      transition: 0.3s ease-in;
      position: relative;
      top: 40%;
      h1 {
        color: #f0e6d2;
        font-size: 4em;
        line-height: normal;
      }
      p {
        font-size: 1.15em;
        color: #a09b8c;
      }
      &.about-view {
        top: 0%;
      }
      &.experience-view {
        top: 80%;
      }
    }
    .home-video {
      width: 60%;
      display: flex;
      margin-left: auto;
      .iframe {
        flex-grow: 1;
      }
      .about-wrapper {
        border: solid 2px #785a28;
        border-radius: 4px;
        margin-left: auto;
        background-color: #091428;
        padding: 1em;
        overflow-y: scroll;
        h2,
        p {
          margin-bottom: 1em;
        }
      }
      .timeline-wrapper {
        flex-grow: 1;
        margin-top: 2em;
        .n-timeline-item-content {
          .n-timeline-item-content__title {
            color: #c8aa6e;
            font-size: 1.1em;
          }
          .n-timeline-item-content__content {
            color: #f0e6d2;
            font-size: 1.5em;
          }
          .n-timeline-item-content__time {
            color: #a09b8c;
            font-size: 1.5em;
          }
        }
      }
    }
  }
  .home-bottom-panel {
    display: flex;
    margin-top: auto;
    padding: 0 2em;
    justify-content: space-evenly;
    .item {
      height: 150px;
      max-width: 225px;
      margin: 12px 6px;
      display: flex;
      flex-direction: column;
      position: relative;
      .image {
        height: 100%;
        width: 100%;
        display: flex;
        overflow: hidden;
        position: relative;
        bottom: 0;
        img {
          border: solid 1px #5b5a56;
          width: 100%;
        }
        a {
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 2;
        }
      }
      p {
        margin: 4px;
      }
      &:hover {
        bottom: 8px;
        transition: 0.2s ease-in !important;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .home-main-panel {
    .home-video {
      max-height: 500px;
      .iframe {
        flex-grow: initial !important;
        width: 300px !important;
        height: 200px;
        margin: auto;
      }
      .about-wrapper,
      .timeline-wrapper {
        overflow-y: auto;
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
  }

  @media screen and (max-width: 700px) {
    .home-top-panel {
      justify-content: space-around;
      & > * {
        font-size: 12px;
      }
      .home-top-panel-link {
        margin: 0 0.5em !important;
      }
    }
    .home-text {
      margin: 0 !important;
      flex-grow: unset !important;
    }
    .home-video {
      max-height: 225px !important;
    }
    .home-main-panel {
      flex-direction: column;
      align-items: center;
      & > * {
        margin: auto;
        width: 100% !important;
      }
      .home-video {
        .iframe {
          width: 75% !important;
        }
      }
    }
    .home-bottom-panel {
      display: none !important;
    }
  }
}
</style>
