<template lang="">
  <div class="home_wrapper">
    <div class="home-top-panel">
      <p class="home-top-panel-link" :class="{ active: mode == -1 }" @click="loadAboutView">ABOUT</p>
      <p class="home-top-panel-link" :class="{ active: mode == 0 }" @click="loadOverviewView">OVERVIEW</p>
      <p class="home-top-panel-link" :class="{ active: mode == 1 }" @click="loadExperienceView">EXPERIENCE</p>
      <n-button class="home-top-panel-button" color="#C89B3C" ghost>
        <a class="home-top-panel-link" href="./downloads/Jamal_Fox_Resume_Sept_2023.pdf" download> <font-awesome-icon :icon="['fas', 'download']" /> RESUME</a>
      </n-button>
    </div>
    <div class="home-main-panel">
      <div class="home-text" ref="homeMainLeft">
        <p>Full-Stack Developer</p>
        <h1>Jamal Fox</h1>
        <p>Welcome to my portfolio! Take a look around!</p>
      </div>
      <div class="home-video" ref="homeMainRight">
        <iframe v-if="mode == 0" class="iframe" src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
        <div v-if="mode == -1" class="about-wrapper">
          <h2>Hello!</h2>
          <p>Hello, I'm Jamal Fox, a passionate Front End Developer with a knack for crafting visually stunning and highly functional web experiences. With a background in Information Systems and a proven track record in the industry, I thrive on translating creative ideas into digital reality.</p>
          <p>I find immense joy in the art of web development, combining my technical prowess in Vue.js, React, and PHP with a keen eye for design. My journey in the ever-evolving world of front-end development has equipped me with an array of skills, including expertise in HTML, CSS, JavaScript, and more. From harnessing the power of Vue.js to implementing responsive design principles, I'm committed to delivering user-friendly, accessible, and performance-optimized web solutions.</p>
          <p>My professional journey has been enriched by diverse experiences, from leading front-end development initiatives at American Reading Company to connecting with clients as a Technical Sales Agent at Rebillia. Through these roles, I've honed my ability to seamlessly collaborate with cross-functional teams, ensuring that design concepts come to life with pixel-perfect precision.</p>
          <p>Beyond the code, I'm a firm believer in the importance of web accessibility. I take pride in adhering to WCAG guidelines, ensuring that digital experiences are inclusive and reach a wide audience.</p>
          <p>Feel free to reach out at Fox.Jamal@outlook.com or give me a call at (678) 522-8843. I'm always up for a chat about web development, accessibility, or the latest tech trends.</p>
        </div>
        <div v-if="mode == 1" class="timeline-wrapper">
          <n-timeline>
            <n-timeline-item type="success" title="Freelance" content="Freelance Web Developer" time="June 2023 - " />
            <n-timeline-item type="success" title="American Reading Company" content="Front End Developer" time="March 2022 - " />
            <n-timeline-item type="success" title="Rebillia" content="Technical Sales Associate" time="February 2021 - March 2022 " />
            <n-timeline-item type="success" title="Rebillia" content="Technical Sales Associate" time="February 2021 - March 2022 " />
            <n-timeline-item type="success" title="Rebillia" content="Technical Sales Associate" time="February 2021 - March 2022 " />
          </n-timeline>
        </div>
      </div>
    </div>
    <div v-if="mode == 0" class="home-bottom-panel" ref="homeMainBottom">
      <div v-for="project in featuredProjects" class="item" :style="{ flexGrow: project.portion }">
        <div class="image">
          <img :src="`./project-photos/${project.img}`" />
          <a v-if="project.demoLink" :href="project.demoLink" target="_blank"></a>
          <a v-if="project.downloadLink" :href="project.downloadLink" class="download-link" download></a>
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
    let filteredFeaturedProjects = featuredProjects.filter((item) => item.featured);
    return { filteredFeaturedProjects };
  },
  data() {
    return {
      mode: 0,
      featuredProjects: [
        {
          title: "Apollo Appointment Scheduler",
          portion: 2,
          img: "Apollo/dashboard.png",
          demoLink: "https://apollo-appointment-scheduler-evptp4uhp-jamalfox85.vercel.app/login",
        },
        {
          title: "Intro to Web Accessibility PPT",
          portion: 2,
          img: "intro-to-a11y.png",
          downloadLink: "./downloads/intro-to-web-accessibility.pptx",
        },
        {
          title: "Accessibility Testing PPT",
          portion: 2,
          img: "a11y-testing.png",
          downloadLink: "./downloads/accessibility-testing.pptx",
        },
        // {
        //   title: "Blog Post #1",
        //   portion: 1,
        //   img: "modus-email.png",
        //   link: "https://www.figma.com/file/eIB0SgPTycUD5buStDe38V/Email-Collection?node-id=0%3A1&t=vfD356Oxi4mS4Jty-1",
        // },
        // {
        //   title: "Blog Post #2",
        //   portion: 1,
        //   img: "grocery-login.png",
        //   link: "https://www.figma.com/file/uExd8naVUWvtqkEQ6UMlN2/Grocery-App?node-id=1%3A2&t=TM3lHfZ7sCK3KnZ8-1",
        // },
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
        border-image: linear-gradient(300deg, rgba(0, 0, 0, 1) 0%, rgba(200, 155, 60, 1) 48%, rgba(0, 0, 0, 1) 100%) 1;
        color: #f0e6d2;
      }
      &:hover {
        color: #f0e6d2;
        cursor: url("../assets/link.cur"), pointer;
      }
    }
    .home-top-panel-button {
      margin-left: auto;
      &:hover {
        background-color: #091428;
      }
    }
  }
  .home-main-panel {
    flex-grow: 1;
    display: flex;
    padding: 1em;
    .home-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      margin: 0 1em 2em 2em;
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
        justify-content: flex-start;
      }
      &.experience-view {
        justify-content: flex-end;
      }
    }
    .home-video {
      width: 60%;
      display: flex;
      margin-left: auto;
      // margin: 1em 1em 1em auto;
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
    .item {
      height: 150px;
      max-width: 225px;
      margin: 12px 6px;
      display: flex;
      flex-direction: column;
      .image {
        height: 100%;
        width: 100%;
        display: flex;
        overflow: hidden;
        position: relative;
        img {
          border: solid 1px #5b5a56;
          width: 100%;
        }
        a {
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 2;
          cursor: url("../assets/link.cur"), pointer;
        }
      }
      p {
        margin: 4px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .home-main-panel {
    // flex-direction: column;
    // & > * {
    //   margin: auto !important;
    // }
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
