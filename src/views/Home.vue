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
            <p
                class="home-top-panel-link custom-cursor-active"
                :class="{ active: mode == 1 }"
                @click="loadExperienceView"
            >
                EXPERIENCE
            </p>
            <div class="resume-button-group">
                <n-button
                    class="home-top-panel-button custom-cursor-active"
                    color="#C89B3C"
                    ghost
                >
                    <a
                        class="home-top-panel-link custom-cursor-active"
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
            </div>
        </div>
        <div class="home-main-panel">
            <div class="home-text" ref="homeMainLeft">
                <p>Full Stack Developer</p>
                <h1>Jamal Fox</h1>
                <p>Welcome to my portfolio! Take a look around!</p>
            </div>
            <div class="home-primary" ref="homeMainRight">
                <iframe
                    v-if="mode == 0"
                    class="iframe home-video"
                    src="https://www.youtube.com/embed/RIch8f194ek?si=ui5gBf8pHtRPg6y-"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <div v-if="mode == -1" class="about-wrapper">
                    <h2>Hello! &#128578;</h2>
                    <p>
                        I'm Jamal, a dedicated Full-Stack Developer specializing
                        in Vue, Laravel, and Go—passionate about building
                        accessible, user-friendly, and visually engaging web
                        experiences.
                    </p>
                    <p>
                        With a strong foundation in computer science and a
                        proven track record across the full stack, I thrive on
                        crafting performant, scalable, and maintainable products
                        for both web and mobile platforms.
                    </p>
                    <p>
                        Throughout my career, I've led front-end initiatives,
                        enhanced accessibility, and taken a critical eye to
                        UI/UX design to ensure products resonate with users. On
                        the back end, I've developed robust APIs and scalable
                        architecture built to stand the test of time. My work is
                        deeply collaborative—I value working across teams to
                        deliver polished, high-quality solutions that balance
                        functionality with thoughtful design.
                    </p>
                    <p>
                        I'm always up for the next challenge and excited to keep
                        growing as a developer. If you like what you see, let’s
                        connect!
                    </p>
                    <p>
                        📧
                        <a
                            style="color: #f0e6d2; text-decoration: underline"
                            href="mailto:fox.jamal@outlook.com"
                            >Fox.Jamal@outlook.com</a
                        >
                        <br />📞 (678) 522-8843
                    </p>
                </div>
                <div v-if="mode == 1" class="timeline-wrapper">
                    <n-timeline class="">
                        <n-timeline-item type="success">
                            <template #header>
                                <h1 class="experience-title">
                                    Full Stack Developer
                                </h1>
                                <p class="experience-company">
                                    American Reading Company
                                </p>
                                <p class="experience-dates">
                                    March 2021 - Present
                                </p>
                            </template>
                            <div class="experience-content">
                                <n-collapse class="mt-4">
                                    <n-collapse-item title="Details" name="1">
                                        <div class="mb-4 ml-4">
                                            <ul class="list-disc">
                                                <li class="mb-2">
                                                    Developed and maintained
                                                    highly performant and
                                                    responsive web applications,
                                                    with key contributions to
                                                    both frontend and backend
                                                    architecture, while
                                                    maintaining a focus on
                                                    usability, accessibility
                                                    (a11y), and scalability.
                                                </li>
                                                <li class="mb-2">
                                                    Led front-end development
                                                    efforts in a complete
                                                    overhaul of one of our
                                                    flagship products, including
                                                    total scaffolding,
                                                    development, and
                                                    maintenance, leading to a
                                                    30% increase in usage and
                                                    increasing platform
                                                    adoption/sales rates.
                                                </li>
                                                <li class="mb-2">
                                                    Maintained a high level of
                                                    awareness for digital
                                                    products including logging
                                                    and observability, usage
                                                    analytics and site visit
                                                    reports, and overall
                                                    interface usability -
                                                    helping to drive decisions
                                                    on feature development and
                                                    maintenance.
                                                </li>
                                            </ul>
                                        </div>
                                    </n-collapse-item>
                                    <n-collapse-item
                                        title="Primary Projects"
                                        name="2"
                                    >
                                        <div class="mb-4 ml-4">
                                            <ul class="list-disc">
                                                <li class="mb-2">
                                                    <b>MyArc: </b> An online
                                                    platform for teachers to
                                                    manage and maintain course
                                                    curriculum and assignments.
                                                    Full-stack application based
                                                    on Laravel (Inertia) and
                                                    Vue.
                                                </li>
                                                <li class="mb-2">
                                                    <b>Fusion Editor: </b>
                                                    Companion authoring
                                                    application for MyArc. This
                                                    tool enabled internal
                                                    curriculum developers to
                                                    author course content for
                                                    over 4,000+ lesson plans.
                                                    Full-stack application based
                                                    on HTMx and Golang.
                                                </li>
                                                <li class="mb-2">
                                                    <b>Writing Rubrics: </b>
                                                    Complementary web product
                                                    that allows teachers to
                                                    collect, organize, and
                                                    grading student writing
                                                    submissions. Full-stack
                                                    application based on Vue and
                                                    Laravel.
                                                </li>
                                            </ul>
                                        </div>
                                    </n-collapse-item>
                                    <n-collapse-item title="Other" name="3">
                                        <div class="mb-4 ml-4">
                                            <ul class="list-disc">
                                                <li class="mb-2">
                                                    Presented at department-wide
                                                    lunch and learns on various
                                                    topics including
                                                    accessibility best practices
                                                    and feature deep dives.
                                                </li>
                                                <li class="mb-2">
                                                    Attended Connect.TECH and
                                                    the Knowbility AccessU
                                                    conferences on front-end
                                                    development and accessiblity
                                                    best practices. Presented
                                                    findings to the larger
                                                    development team to help
                                                    drive improvements in our
                                                    development process.
                                                </li>
                                                <li class="mb-2">
                                                    Represented the development
                                                    team at monthly roundtables
                                                    with the CEO and other
                                                    members of the executive
                                                    leadership board to
                                                    facilitate communication
                                                    between departments.
                                                </li>
                                                <li class="mb-2">
                                                    Lead a "community of
                                                    practice" group focused on
                                                    improving the accessibility
                                                    of our digital products.
                                                </li>
                                            </ul>
                                        </div>
                                    </n-collapse-item>
                                </n-collapse>
                            </div>
                        </n-timeline-item>
                        <n-timeline-item type="success">
                            <template #header>
                                <h1 class="experience-title">
                                    Tech Sales Agent
                                </h1>
                                <p class="experience-company">Rebillia</p>
                                <p class="experience-dates">
                                    Feb 2020 - March 2021
                                </p>
                            </template>
                            <div class="experience-content">
                                <n-collapse class="mt-4">
                                    <n-collapse-item title="Details" name="1">
                                        <div class="mb-4 ml-4">
                                            <ul class="list-disc">
                                                <li class="mb-2">
                                                    Conducted live sales calls
                                                    and product demos with a 20%
                                                    closure rate, leading to an
                                                    average month over month
                                                    revenue increase of 10%.
                                                </li>
                                                <li class="mb-2">
                                                    Satisfied trouble support
                                                    tickets for a roster of over
                                                    160 customers, and
                                                    effectively communicated the
                                                    problem and solution to
                                                    individuals of varying
                                                    technical backgrounds.
                                                </li>
                                                <li class="mb-2">
                                                    Established the company's
                                                    online brand by generating
                                                    and growing social media
                                                    accounts on over 6
                                                    platforms, strengthening
                                                    customer relations and brand
                                                    awareness.
                                                </li>
                                            </ul>
                                        </div>
                                    </n-collapse-item>
                                </n-collapse>
                            </div>
                        </n-timeline-item>
                        <n-timeline-item type="success" />
                    </n-timeline>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import featuredProjects from "../services/featuredProjects.json";
import TopBar from "../components/TopBar.vue";
import SidePanel from "../components/SidePanel.vue";
import {
    NButton,
    NTimeline,
    NTimelineItem,
    NCollapse,
    NCollapseItem,
} from "naive-ui";

export default {
    components: {
        TopBar,
        SidePanel,
        NButton,
        NTimeline,
        NTimelineItem,
        NCollapse,
        NCollapseItem,
    },
    setup() {
        let filteredFeaturedProjects = featuredProjects.filter(
            (item) => item.featured
        );
        return { filteredFeaturedProjects };
    },
    data() {
        return {
            mode: 0,
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
        .resume-button-group {
            margin-left: auto;
            width: fit-content;
        }
        .home-top-panel-button {
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
            margin: 2em;
            h1 {
                color: #f0e6d2;
                font-size: 4em;
                line-height: normal;
            }
            p {
                font-size: 1.15em;
                color: #a09b8c;
            }
        }
        .home-primary {
            width: 70%;
            display: flex;
            .home-video {
                border: solid 2px #c89b3c;
                border-radius: 8px;
                flex-grow: 1;
                display: flex;
                margin-left: auto;
                .iframe {
                    flex-grow: 1;
                }
            }
            .about-wrapper {
                border-radius: 8px;
                margin-left: auto;
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
                height: 65vh;
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
                .experience-title {
                    font-size: 1.5em;
                    color: #f0e6d2;
                }
                .experience-company {
                    color: #f0e6d2;
                    opacity: 0.8;
                }
                .experience-dates {
                    color: #f0e6d2;
                    font-size: 0.9em;
                    opacity: 0.6;
                }
                .experience-content {
                    color: #f0e6d2;
                    opacity: 0.8;
                    font-size: 1em;
                    margin-top: 10px;

                    .n-collapse {
                        .n-collapse-item {
                            background: #c89b3c;
                            border-radius: 4px;
                            padding: 0.25em;
                            border-top: none !important;
                            .n-collapse-item__header {
                                padding: 0.25em;
                                .n-collapse-item__header-main {
                                    font-size: 1.2em;
                                    font-weight: 600;
                                }
                            }
                            .n-collapse-item__content-wrapper {
                                padding: 1em;
                            }
                        }
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
.n-timeline
    .n-timeline-item
    .n-timeline-item-timeline
    .n-timeline-item-timeline__circle {
    background-color: #c89b3c15;
    border: solid 2px #c89b3c;
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

@media screen and (max-width: 400px) {
    .resume-button-group {
        display: none !important;
    }
    .about-wrapper {
        max-height: 400px;
        overflow-y: scroll;
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
    .home-video {
        margin: auto;
        width: 100% !important;
        height: 300px;
    }
    .timeline-wrapper {
        height: 400px !important;
    }
}
</style>
