<script>
import ProjectDetail from '../components/ProjectDetail.vue'
import akram from '../img/akram.png'
import umniah from '../img/umniah.png'
import FormMaker from '../img/formmaker.svg'
import prunus from '../img/prunus.png'
import repeatedly from '../img/repeatedly.svg'
import portfolio from '../img/portfolio.svg'
import cfri from '../img/cfri.png'
import kartei from '../img/kartei.png'

export default {
    components: {
        ProjectDetail
    },
    data() {
        return {
            works: [
                {
                    status: false,
                    hasModal: true,
                    title: 'Kartei',
                    category: 'Design and Development',
                    description: `An app using Ionic Vue, to challenge myself with new frameworks. Kartei enables users to create or import saved translations from CSV or Google Translate and test their knowledge through a flashcard game that tracks progress. Initially built with a Laravel backend, switching to a Dexie database made it faster and more efficient, significantly improving the user experience.`,
                    content: `
                    <div class="portfolio-container">
         
                    <section class="section demo row mb-4">
                        <div class="col-md-12 text-center screenshots">
                        
                            <img  src="/screenshotFormVault2.PNG"
                                alt="Form Builder Demo" class="img-fluid">
                        </div>
                    </section>

                    <section class="portfolio-section"> 
                        <div class="portfolio-section-content"> 
                            <h2>The Problem</h2>
                            <p>The endless cycle of SAP variable updates and endpoint changes was overwhelming development teams, leading to costly bottlenecks and delays.</p>
                        </div>
                    </section>

                    <section class="portfolio-section"> 
                        <div class="portfolio-section-content"> 
                            <h2>The Solution</h2>
                            <p>I built a user-friendly, Vue-powered form creation tool integrated with a headless CMS. This allowed non-technical business teams to independently create and modify SAP forms.</p>
                        </div>
                    </section>

                    <section class="portfolio-section"> 
                        <div class="portfolio-section-content"> 
                            <h2>Key Features</h2>
                            <ul>
                                <li>Flexible input options</li>
                                <li>Custom validation methods</li>
                                <li>CSS styling</li>
                                <li>Nested forms</li>
                            </ul>
                            <div style="margin-top:1em;">
                                <a class="callToSecondAction" style="text-decoration: none;" target="_blank"
                                            href="https://formmaker.mstfa.co">DEMO</a>
                                </div>
                        </div>
                    </section>
                </div>`,
                    img: kartei,
                    url: "https://kartei.mstfa.co"
                },
                {
                    status: false,
                    hasModal: true,
                    title: 'FormVault',
                    category: 'Development',
                    description: `Faced with constant SAP variable and endpoint updates that were bogging down the development team, I created a Vue.js-powered form builder integrated with a headless CMS. This solution put SAP form management directly in the hands of business users, significantly reducing development overhead, streamlining workflows, and improving data accuracy.`,
                    content: `
                    <div class="portfolio-container">
         
                    <section class="section demo row mb-4">
                        <div class="col-md-12 text-center screenshots">
                        
                            <img  src="/screenshotFormVault2.PNG"
                                alt="Form Builder Demo" class="img-fluid">
                        </div>
                    </section>

                    <section class="portfolio-section"> 
                        <div class="portfolio-section-content"> 
                            <h2>The Problem</h2>
                            <p>The endless cycle of SAP variable updates and endpoint changes was overwhelming development teams, leading to costly bottlenecks and delays.</p>
                        </div>
                    </section>

                    <section class="portfolio-section"> 
                        <div class="portfolio-section-content"> 
                            <h2>The Solution</h2>
                            <p>I built a user-friendly, Vue-powered form creation tool integrated with a headless CMS. This allowed non-technical business teams to independently create and modify SAP forms.</p>
                        </div>
                    </section>

                    <section class="portfolio-section"> 
                        <div class="portfolio-section-content"> 
                            <h2>Key Features</h2>
                            <ul>
                                <li>Flexible input options</li>
                                <li>Custom validation methods</li>
                                <li>CSS styling</li>
                                <li>Nested forms</li>
                            </ul>
                            <div style="margin-top:1em;">
                                <a class="callToSecondAction" style="text-decoration: none;" target="_blank"
                                            href="https://formmaker.mstfa.co">DEMO</a>
                                </div>
                        </div>
                    </section>
                </div>`,
                    img: FormMaker,
                    url: "https://formmaker.mstfa.co"
                },
                {
                    status: false,
                    hasModal: false,
                    title: `Landscaping company design identity`,
                    category: 'Design',
                    description: ` This project revitalizes a landscaping company's
                     brand identity by replacing the outdated design with a striking, 
                     modern look. The new branding focuses on contemporary icons and design 
                     elements that reflect the company's values and expertise. Experience the
                      transformation and impact of modern design through this impressive brand makeover.`,
                    content: ``,
                    img: prunus,
                    url: "https://www.behance.net/gallery/121209387/Brand-logo/"
                },
                {
                    status: false,
                    hasModal: false,
                    title: 'Repeatedly',
                    category: 'Design and Development',
                    description: `This fun web app allows users to easily set their
                        desired YouTube videos on a loop, making it perfect for workout sessions,
                        background music, or continuous learning. Users can customize the repeat settings
                        by choosing the number of repeats or setting a specific duration (e.g., 30 minutes),
                        ensuring a seamless and uninterrupted viewing experience. Whether you're exercising,
                        studying, or just need some background noise, Repeatedly keeps your
                        favorite content playing on loop.`,
                    content: ``,
                    img: repeatedly,
                    url: "https://repeatedly.netlify.app/"
                },
                {
                    status: false,
                    hasModal: false,
                    title: `Centre français de recherche sur l'Irak`,
                    category: 'Design and Development',
                    description: `The Centre français de recherche sur l'Irak is a
                     dedicated news platform that delves into the complex relationships
                      between Iraq, Kurds, and France. With in-depth analysis, news, and
                       opinions, the site covers political, social, and cultural topics. Featuring
                        a custom design for an engaging user experience, explore the diverse aspects
                         of Iraqi and Kurdish affairs while staying updated on Franco-Iraqi relations
                          through this informative and accessible platform`,
                    content: ``,
                    img: cfri,
                    url: "https://cfri-irak.com/"
                },
                {
                    status: false,
                    hasModal: false,
                    title: `Contacts Page`,
                    category: 'Design and Development',
                    description: `A user-friendly Page, designed specifically to consolidate all of the architect's 
                    contact information, social media handles, and online presence in one accessible location.`,
                    content: ``,
                    img: akram,
                    url: "https://akramiraq.netlify.app/"
                },
                // {
                //     status: false,
                //     hasModal: false,
                //     title: `Flower shop`,
                //     category: 'Design and Development',
                //     description: `This website showcases an elegant digital presence for a local flower shop.
                //      With seamless user experience, the site highlights the shop's exquisite floral arrangements and services, inviting customers to explore and discover the perfect blooms for any occasion. `,
                //     content: ``,
                //     img: umniah,
                //     url: "https://umniah.netlify.app/"
                // },
                {
                    status: false,
                    hasModal: false,
                    title: `Old Portfolio`,
                    category: 'Design and Development',
                    description: ` This project features a previous personal portfolio that embraces
                    the classic elegance of a minimalist black and white color scheme. With its clean,
                    simple design and straightforward layout, the Monochrome Portfolio Showcase highlights
                    the creator's work in an easy-to-navigate manner. The understated
                    color palette allows the content to take center stage, presenting a timeless
                    representation of the creator's skills and achievements.`,
                    content: ``,
                    img: portfolio,
                    url: "https://www.behance.net/gallery/120466971/Personal-brand-and-portfolio"
                },

                // Add more projects as needed
            ],
        }
    },
    methods: {

    },
    computed: {
    },

}
</script>

<template>
    <div class="works" id="works">
        <p class="title">Works</p>
        <div class="work" v-for="work in works">
            <!-- <div class="work"> -->
            <div class="project-image-container">

                <img class="project-image" :src="work.img" alt="">
            </div>
            <div class="text-content">
                <!-- <h3>{{ work.category }} - Category</h3> -->
                <h3>{{ work.category }} </h3>
                <h1>{{ work.title }}</h1>
                <p class="work-description">{{ work.description }}</p>
                <ProjectDetail :show-modal="work.status" @close="work.status = false" :title="work.title"
                    :html-content="work.content">
                    <!-- Add more project details as needed -->
                </ProjectDetail>

                <!-- umniah.netlify.app -->
                <!-- https://akramiraq.netlify.app/ -->
                <a class="callToAction" style="text-decoration: none;margin-right:.5em" target="_blank"
                    :href="work.url">Visit link</a>

                <button class="callToSecondAction" v-if="work.hasModal" @click="work.status = true"
                    style="font-weight:bold;margin-top:.7em;">Learn More</button>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.works {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overscroll-behavior-y: none;
    padding-right: 0;
    flex-basis: 50%;
    padding-bottom: 5rem;


    .title {
        font-size: 4em;
        margin-left: 30px;
        margin-top: 30px;
        margin-bottom: 2em;

        @include breakpoint($sm) {
            margin-bottom: 1em;
            font-size: 7em;
        }
    }

    .work {
        display: flex;
        border: solid rgb(197 197 197) 1px;
        border-radius:3px;
        // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        margin-bottom: 4em;
        overflow-x: hidden;
        flex-direction: column;
        margin-left: 15px;
        margin-right: 15px;
        padding: 1em;
        // width:100%;
        // height: 70vh;

        @include breakpoint($sm) {
            // width:100%;
            // margin-left: 60px;
            // margin-right: 60px;
            margin-left: 30px;
            margin-right: 30px;
        }

        @include breakpoint($md) {
            // margin-right: 180px;

            flex-basis: 50%;
            flex-direction: row;
            // width: 80%;
        }

        @include breakpoint($lg) {
            margin-right: 180px;
            // width: 80%;

        }

        @include breakpoint($xl) {
            width: 70%;
        }

        .text-content {
            padding: 3em;
            // padding-bottom: 2em;
            width: 100%;

            @include breakpoint($md) {
                width: 50%;
            }

        }

        p {
            font-size: 1.3em !important;
            font-weight:500;
            line-spacing:1.5;
            letter-spacing:.05em;
            @include breakpoint($lg) {
                font-size: 1.5em !important;
            }
        }

        div {
            place-self: center;
            // margin-left: 5%;
            // margin-right: 5%;
        }

        .project-image-container {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 50%;
            filter: grayscale(30%);
            overflow: hidden;
            // height: auto;
            // position: relative;
            // aspect-ratio: 1;

            @include breakpoint($md) {
                width: 50%;
            }

            img {
                padding: 6em;
                object-fit: cover;
                width: 100%;
                max-width: 370px;
                // height: 100%;
                // max-height: 300px; // Adjust this value to limit the height
            }
        }

        h3 {
            font-size: 1.2em;
            margin-bottom: 1em;
            opacity: .75;
            font-weight:500;

        }

        h1 {
            font-size: 2.8em;
            margin-bottom: .5em;
            line-height: 1.5em;
            font-weight:700;

            // height: 3em;
            /* height is 2x line-height, so two lines will display */
            overflow: hidden;
        }

        .work-description {
            font-size: 1.3em;
            margin-bottom: 2em;
            font-weight: 600;
            line-height: 162%;
            // height: 100px;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        a {
            font-size: 2em;
            font-weight: bold;
        }
    }

    .work:nth-child(odd) {
        flex-direction: column;

        @include breakpoint($md) {
            // margin-right: 180px;
            flex-direction: row-reverse;
        }

    }
}


// body {
//     font-family: Arial, sans-serif;
//     margin: 0;
//     padding: 20px;
//     line-height: 1.6;
//     color: #333;
// }</style>