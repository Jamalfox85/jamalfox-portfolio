<template lang="">
  <div class="project_block_wrapper">
    <div class="block-header">
      <h3 class="title">{{ project.title }}</h3>
    </div>
    <div class="block-main">
      <div class="block-image">
        <iframe v-if="project.video_url" :src="project.video_url" title="Ixie AI Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p class="description">{{ project.description }}</p>
      <div class="skills">
        <span v-for="skill in projectSkills" :key="skill.id" class="skill">
          <img :src="`./images/skill-icons/${skill.img}.svg`" />
        </span>
      </div>
    </div>
    <div class="block-footer">
      <NButton size="small" class="project-button" @click="openLink(project.live_url)">View Project</NButton>
      <NButton size="small" class="project-button" @click="openLink(project.github_url)">View Github</NButton>
    </div>
  </div>
</template>
<script>
import { NButton } from "naive-ui";
import { categories } from "../data/skills";
export default {
  props: ["project"],
  components: { NButton },
  data() {
    return {};
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
    projectSkills() {
      return this.allSkills.filter((skill) => this.project.skills.includes(skill.id));
    },
  },
};
</script>
<style lang="scss">
.project_block_wrapper {
  padding: 1em;
  .block-header {
    padding: 0.5em;
    .title {
      font-size: 2em;
    }
  }
  .block-main {
    padding: 0.5em;
    .block-image {
      width: 100%;
      height: 200px;
      background-color: rgb(240, 230, 210);
      margin-bottom: 1em;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    .description {
      margin-bottom: 1em;
    }
    .skills {
      margin-bottom: 1em;
      .skill {
        margin-right: 0.5em;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .block-footer {
    padding: 1em;
    display: flex;
    justify-content: center;
    .project-button {
      margin: 0 0.5em;
      padding: 1.25em 2em;
      color: rgb(240, 230, 210);
      border: solid 21x rgb(240, 230, 210);
      &:hover {
        background-color: rgb(240, 230, 210, 0.2);
      }
    }
  }
}
</style>
