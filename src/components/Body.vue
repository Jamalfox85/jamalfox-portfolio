<template lang="">
  <div class="body_wrapper">
    <div class="body-content">
      <div class="main-body">
        <div class="personal-info">
          <h1 class="main-name">Jamal Fox</h1>
          <h2 class="main-tags">Front End Developer</h2>
        </div>
        <div class="dividing-line"></div>
        <p class="bio-text">Hello! I'm a front-end developer who crafts user-friendly and accessible websites with a passion for seamless digital experiences.</p>
      </div>
      <div class="body-panels">
        <!-- <div class="panel" v-for="project in filteredFeaturedProjects">
          <a :href="project.link || project.file" target="_blank" download>
            <div class="panel-inner">
              <img :src="require(`../assets/images/project-ss/${project.image}`)" />
            </div>
            <p class="item-name">{{ project.name }}</p>
          </a>
        </div> -->
        <!-- <div class="panel">
          <div class="panel-inner"></div>
        </div>
        <div class="panel">
          <div class="panel-inner"></div>
        </div> -->
        <div class="panel smaller">
          <a href="../assets/downloads/Jamal_Fox_Resume_July_2023.pdf" download>
            <div class="panel-inner">
              <img src="../assets/design-icons/download.svg" alt="download resume" />
              <p>Resume</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="body-overlay"></div>
  </div>
</template>
<script>
import featuredProjects from "../services/featuredProjects.json";
export default {
  setup() {
    let filteredFeaturedProjects = featuredProjects.filter((item) => item.featured);
    return {
      filteredFeaturedProjects,
    };
  },
  data() {
    return {
      figmaDesigns: [
        {
          name: "Mystic Fox Marketing",
          subtitle: "Marketing Agency Website",
          img1: "mfm-hero.png",
          img2: "mfm-benefits.png",
          link: "https://www.figma.com/file/QUe3RMzq9S1AHWABfCL6E8/Mystic-Fox-Marketing?node-id=0%3A1&t=snogOdCpbqvlPwmO-1",
        },
        {
          name: "Kia Sterling Portfolio",
          subtitle: "Modeling Portfolio Website",
          img1: "kia-hero.png",
          link: "https://www.figma.com/file/OslVemYr4Z32RJL6AsQVtX/Kia-Sterling?node-id=11%3A2&t=ijNmE8YuJqjdTVNa-1",
        },
        {
          name: "MODUS.AI",
          subtitle: "Pre-launch Email Collection Page",
          img1: "modus-email.png",
          link: "https://www.figma.com/file/eIB0SgPTycUD5buStDe38V/Email-Collection?node-id=0%3A1&t=vfD356Oxi4mS4Jty-1",
        },
        {
          name: "Grocery App",
          subtitle: "Login Page for Grocery Shopping App",
          img1: "grocery-login.png",
          link: "https://www.figma.com/file/uExd8naVUWvtqkEQ6UMlN2/Grocery-App?node-id=1%3A2&t=TM3lHfZ7sCK3KnZ8-1",
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
  },
};
</script>
<style lang="scss">
.body_wrapper {
  height: 100%;
  .body-overlay {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(at right top, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.75) 40%, rgba(1, 1, 1, 1) 100%);
    position: absolute;
    top: 0;
  }
  .body-content {
    position: relative;
    z-index: 2;
    padding: 2em 1em;
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    .skills-section-toggle {
      color: RGB(200, 170, 110);
      font-size: 1.25em;
      background-color: transparent;
      border: none;
      margin-left: auto;
    }
    .main-body {
      padding: 1em;
      display: flex;
      margin: 1em;
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
      .personal-info {
        width: fit-content;
        text-align: center;
        .main-name {
          font-size: 64px;
          margin-bottom: 8px;
          color: rgb(240, 230, 210);
          text-shadow: -1px 1px 2px #c89b3c, 1px 1px 2px #c89b3c, 1px -1px 0 #c89b3c, -1px -1px 0 #c89b3c;
        }
        .main-tags {
          opacity: 0.75;
          font-size: 24px;
          text-shadow: -1px 1px 2px #c89b3c, 1px 1px 2px #c89b3c, 1px -1px 0 #c89b3c, -1px -1px 0 #c89b3c;
        }
      }
      .dividing-line {
        height: inherit;
        width: 4px;
        margin: 4px 32px;
        background: rgb(156, 134, 97);
        background: radial-gradient(circle, rgba(156, 134, 97, 1) 9%, rgba(2, 0, 36, 1) 100%);
      }
      .bio-text {
        font-size: 20px;
        width: 200px;
        align-self: center;
      }
    }
    .body-panels {
      height: fit-content;
      width: 100%;
      display: flex;
      margin-top: auto;
      align-items: flex-start;
      .panel {
        height: 100%;
        flex-grow: 2;
        padding: 8px;
        flex-direction: column;
        margin: 0 0.5em;
        width: 25%;
        position: relative;
        top: 0;
        &.smaller {
          height: 75%;
          width: 10%;
          position: relative;
          font-size: 24px;
          color: rgb(240, 230, 210);
          text-shadow: -1px 1px 2px #c89b3c, 1px 1px 2px #c89b3c, 1px -1px 0 #c89b3c, -1px -1px 0 #c89b3c;
          a {
            color: rgb(240, 230, 210);
            .panel-inner {
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 1em 0.5em;
              border-radius: 8px;
              overflow: hidden;
              img {
                width: 25%;
                margin-bottom: 1em;
              }
            }
          }
          &:hover {
            .panel-inner {
              background-color: #c89c3cdd;
              transition: 0.1s ease-in;
            }
          }
        }
        &:hover {
          top: -0.35em;
          transition: 0.2s ease-in;
          .item-name {
            color: #c89b3c;
          }
        }
        .panel-inner {
          height: 75%;
          display: flex;
          box-shadow: 0.3px 0.5px 0.5px hsl(var(208deg 74% 2%) / 0.51), 0.5px 1px 0.9px -0.6px hsl(var(208deg 74% 2%) / 0.45), 1.1px 2.1px 2px -1.3px hsl(var(208deg 74% 2%) / 0.4), 2.3px 4.6px 4.2px -1.9px hsl(var(208deg 74% 2%) / 0.34), 4.6px 9.1px 8.4px -2.6px hsl(var(208deg 74% 2%) / 0.28), 8.2px 16.4px 15.1px -3.2px hsl(var(208deg 74% 2%) / 0.23), 13.7px 27.3px 25.2px -3.9px hsl(var(208deg 74% 2%) / 0.17), 21.3px 42.5px 39.2px -4.5px hsl(var(208deg 74% 2%) / 0.11);
          img {
            width: 100%;
          }
        }
        a {
          text-decoration: none;
          .item-name {
            color: #f0e6d2;
            font-size: 1.25em;
            margin: 0.5em;
          }
        }
      }
    }
  }
}
// @media screen and (max-width: 1000px) {
//   .main-name,
//   .main-tags {
//     text-align: center;
//   }g
// }
// @media screen and (max-width: 700px) {
//   .main-name {
//     font-size: 72px !important;
//   }
// }

@media screen and (max-width: 850px) {
  .body_wrapper {
    // max-width: 100%;
    height: auto;
    .body-content {
      max-height: 725px;
      .body-nav {
        .skills-section-toggle {
          display: block;
        }
      }
      .main-body {
        .main-name,
        .main-tags {
          text-align: center;
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .body_wrapper {
    max-width: 100% !important;
  }
}
@media screen and (max-width: 600px) {
  .body_wrapper {
    height: auto !important;
  }
  .main-name {
    font-size: 4em !important;
  }
}
</style>
