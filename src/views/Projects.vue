<template lang="">
  <div class="projects_wrapper">
    <!--
      PROJECT TYPES:
      1 - Primary
      2 - Secondary or API
      3 - Company
    -->
    <div v-for="project in projects" :class="getProjectClass(project.type)">
      <div class="project-header">
        <div>
          <h2>{{ project.title }}</h2>
          <small class="project-tags">
            <span
              v-for="(tag, index) in project.tags"
              :key="index"
              class="project-tag"
            >
              {{ tag }}
              <span v-if="index < project.tags.length - 1"> • </span>
            </span>
          </small>
        </div>
        <div v-if="project.icon" class="project-icon-wrapper">
          <font-awesome-icon
            :icon="['fas', project.icon]"
            class="project-icon"
          />
        </div>
      </div>
      <div class="project-main">
        <div class="project-col-left">
          <n-collapse default-expanded-names="" accordion>
            <n-collapse-item title="Description" name="description">
              <div>
                <p>{{ project.description }}</p>
              </div>
            </n-collapse-item>
            <n-collapse-item v-if="project.type == 3" title="Role" name="role">
              {{ project.role }}
            </n-collapse-item>
            <n-collapse-item title="Skills" name="skills">
              <div class="skills">
                <span
                  v-for="skill in getProjectSkills(project.skills)"
                  :key="skill.id"
                  class="skill"
                >
                  <img :src="`./images/skill-icons/${skill.img}.svg`" />
                </span>
              </div>
            </n-collapse-item>
          </n-collapse>
          <div class="project-buttons" v-if="project.type != 3">
            <n-button color="#C89B3C" ghost>Live Demo</n-button>
            <n-button color="#C89B3C" ghost>View Code</n-button>
          </div>
        </div>
        <div class="project-col-right" v-if="project.type == 1">
          <div class="video-wrapper">
            <iframe
              v-if="project.video_url"
              :src="project.video_url"
              title="Project Demo"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectBlock from "../components/ProjectBlock.vue";
import { projectData } from "../data/projects";
import { categories } from "../data/skills";
import { NButton, NCollapse, NCollapseItem } from "naive-ui";

export default {
  components: { ProjectBlock, NButton, NCollapse, NCollapseItem },
  data() {
    return {
      toggler: false,
      activeProjectIndex: 0,
      projects: projectData,
    };
  },
  computed: {
    allSkills() {
      let skills = [];
      categories.forEach((category) => {
        category.skills.forEach((skill) => {
          skills.push(skill);
        });
      });
      return skills;
    },
  },
  methods: {
    getProjectClass(projectType) {
      if (projectType === 1) return "primary-project";
      if (projectType === 3) return "company-project";
      return "secondary-project";
    },
    getProjectSkills(skills) {
      return this.allSkills.filter((skill) => skills.includes(skill.id));
    },
    openLink(link) {
      window.open(link);
    },
    setActiveProject(index) {
      this.activeProjectIndex = index;
      const targetSection = this.$refs[`project-${index}`][0];
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" });
    },
  },
};
</script>
<style lang="scss">
.projects_wrapper {
  overflow-y: scroll;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 225px;
  grid-auto-flow: dense;
  gap: 1em;
  padding: 1em;
  max-height: 750px;
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
  .primary-project {
    grid-column: span 3;
    grid-row: span 2;
    min-height: 400px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    overflow: auto;
    border: solid 2px rgba(240, 230, 210, 0.5);
    background-color: rgba(214, 212, 208, 0.1);
    border-radius: 4px;
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
    .project-main {
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      .project-col-left {
        flex-grow: 1;
        width: 200px;
        min-width: 175px;
        margin-bottom: 1em;
        padding: 0.5em;
      }
      .project-col-right {
        width: 60%;
        flex-grow: 1;
        min-width: 525px;
        height: 100%;
        padding: 0.5em;
        .video-wrapper {
          width: 100%;
          height: 100%;
          iframe {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .secondary-project,
  .company-project {
    grid-column: span 1;
    grid-row: span 1;
    padding: 1em;
    font-size: 0.8em;
    overflow: auto;
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
    .project-main {
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
    }
  }
  .company-project {
    background-color: #c89b3c35;
    border-radius: 4px;
  }
  .project-header {
    color: rgb(240, 230, 210);
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    .project-icon {
      font-size: 2em;
      margin: 0 0 0.5em 0.5em;
    }
  }
  .skills {
    padding: 0.5em 2em;
    .skill {
      margin-right: 0.5em;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .project-buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1em;
    .n-button {
      color: rgb(240, 230, 210) !important;
    }
  }

  // COLLAPSE
  .n-collapse {
    .n-collapse-item {
      border-top: none !important;

      .n-collapse-item__header {
        background-color: #c89b3c;
        border-radius: 4px 4px;
        padding: 0.25em !important;
      }
      &.n-collapse-item--active {
        .n-collapse-item__content-wrapper {
          color: rgb(240, 230, 210);
          padding: 0.25em !important;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .projects_wrapper {
    grid-template-columns: 1fr;
    max-height: 650px;
    .primary-project {
      grid-column: span 1;
      .project-main {
        .project-col-right {
          min-width: 100%;
          height: auto;
        }
      }
    }
    .project-tags {
      display: none;
    }
  }
}
</style>
