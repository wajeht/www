<script setup lang="ts">

const projects = ref([
    {
        title: 'gains',
        subtitle: '(pwa, rest api)',
        wip: true,
        descriptions: ['lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'],
        technologies: [
            {
                "name": "▶️ github action (ci/cd)",
                backgroundColor: 'bg-sky-600',
                "textColor": 'text-white'
            },
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            },
            {
                "name": "V Vue",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "B bootstrap",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        images: [
            {
                url: '/images/gains.png',
                backgroundColor: '#A7A9A7'
            }
        ]
        ,
        links: [
            {
                'name': 'demo',
                'url': 'https://www.allkindsofgains.app/'
            },
            {
                'name': 'github',
                'url': 'https://www.github.com/allkindsofgains/gains'
            }
        ]
    },

    {
        title: 'jaw.dev',
        subtitle: '(web, serverless)',
        descriptions: ['A serverless web application to display list of projects.'],
        technologies: [
            {
                "name": "▶️ github action (ci/cd)",
                backgroundColor: 'bg-sky-600',
                "textColor": 'text-white'
            },
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "V Vue",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "Nuxt",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
            {
                "name": "💨 Tailwind",
                backgroundColor: 'bg-sky-500',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "typescript",
                backgroundColor: 'bg-sky-600',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
            {
                "name": "🔼 Vercel",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
        ],
        images: [
            {
                url: '/images/jaw-dev.png',
                backgroundColor: '#29261C',
            }
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://jaw-dev-jaw.vercel.app/'
            },
            {
                'name': 'github',
                'url': 'https://www.github.com/wajeht/jaw-dev'
            }
        ]
    },

    {
        title: 'tvl-bucket',
        subtitle: '(rest api, microservice)',
        descriptions: ["Video upload api"],
        technologies: [
            {
                "name": "ffmpeg",
                backgroundColor: 'bg-green-700',
                "textColor": 'text-white'
            },
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "🐙 docker compose",
                backgroundColor: 'bg-sky-800',
                "textColor": 'text-white'
            },
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "typescript",
                backgroundColor: 'bg-sky-600',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/tvl-bucket'
            }
        ]
    },

    {
        title: 'training log v2',
        subtitle: '(web)',
        descriptions: ["Second iteration of the training video log web app I've built few months ago. This project introduced modern client side javascript framework on some parts of the page where interactivity plays a huge role."],
        technologies: [
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "🐙 docker compose",
                backgroundColor: 'bg-sky-800',
                "textColor": 'text-white'
            },
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "V Vue",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "B bootstrap",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        images: [
            {
                url: '/images/training-log-v2.png',
                backgroundColor: '#43464D'
            }
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://training-log-v2.jaw.dev/'
            },
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/training-log-v2'
            }
        ]
    },

    {
        title: 'check-in systems',
        subtitle: '(web)',
        descriptions: ["Built a check-in systems for amarillo college computer lab to track student and guest to track each visit during covid period!"],
        images: [
            {
                url: '/images/check-in-systems.png',
                backgroundColor: '#2F4C66'
            }
        ],
        technologies: [
            {
                "name": "🦈 mysql",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            }
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://check-in-systems.jaw.dev/'
            },
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/check-in-systems'
            }
        ]
    },

    {
        title: 'jawstrength',
        subtitle: '(web)',
        descriptions: ["Built a full-stack Nodejs web application for my coaching services. I have implemented E-commerce style where user able to buy specific services. I wrote the whole style from scratch; did not use any CSS library!"],
        images: [
            {
                url: '/images/jaw-strength.png',
                backgroundColor: '#52648A'
            }
        ],
        technologies: [
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://jaw-strength.jaw.dev/'
            },
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/jawstrength'
            }
        ]
    },

    {
        title: 'training log v1',
        subtitle: '(web)',
        descriptions: ["Build full-stack web application to log training videos with respect to training split. This app has features such as users being able to post their training videos and comments. I intend to use it personally and also for my future clients."],
        images: [{
            url: '/images/training-log-v1.png',
            backgroundColor: '#507C6B'
        }
        ],
        technologies: [
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "🐙 docker compose",
                backgroundColor: 'bg-sky-800',
                "textColor": 'text-white'
            },
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "Materialized",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://training-log-v1.jaw.dev/'
            },
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/training-log-v1'
            }
        ]
    },

    {
        title: 'unique login',
        subtitle: '(web, rest api)',
        descriptions: ["Built a simply over engineered full-stack web application that spits out unique login credentials. I was inspired by the window's version that I've developed last year; I wanted to abe to use it anywhere I go. Its font-end is running as NGINX as static file and Nodejs as an API end point."],
        images: [
            {
                url: '/images/unique-login-web.png',
                backgroundColor: '#1A5297',
            }
        ],
        technologies: [
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "🐙 docker compose",
                backgroundColor: 'bg-sky-800',
                "textColor": 'text-white'
            },
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "express",
                backgroundColor: 'bg-black',
                "textColor": 'text-white'
            },
            {
                "name": "V Vue",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "B bootstrap",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://unique-login.jaw.dev/'
            },
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/unique-login-web'
            }
        ]
    },

    {
        title: 'shift scheduler',
        subtitle: '(electron)',
        descriptions: ["Built this cross platform desktop application for the local restaurant called 'Sushi House', while I was working there as sushi chef. This application saved numerous of time for the owner to create shifts for server ever single week within a click of a button!"],
        images: [
            {
                url: '/images/shift_scheduler.jpg',
                backgroundColor: '#42C4BA'
            }
        ],
        technologies: [
            {
                "name": "Electron",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "💎 node",
                backgroundColor: 'bg-green-900',
                "textColor": 'text-white'
            },
            {
                "name": "Materialized CSS",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            }
        ],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/shift-scheduler'
            }
        ]
    },

    {
        title: 'unique login',
        subtitle: '(windows, c#)',
        descriptions: ["Built this window's form desktop application for my brother who likes to generate random passwords and unique usernames for his gaming credentials. It uses combination of animal names, verbs, adjectives and names for username and random alphabets, numeric and special characters for password."],
        images: [
            {

                url: '/images/unique_login.jpg',
                backgroundColor: "#DF3E07"
            }
        ],
        technologies: [
            {
                "name": "xaml",
                backgroundColor: 'bg-gray-400',
                "textColor": 'text-white'
            },
            {
                "name": "winfroms",
                backgroundColor: 'bg-gray-400',
                "textColor": 'text-white'
            },
            {
                "name": "c#",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            }
        ],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/unique-login'
            }
        ]
    },

    {
        title: 'powerlifting attempt calculator',
        subtitle: '(web, ios, android)',
        descriptions: ["A free application that is written in native technology for Web, iOS, and Android. I've built this in needs of free resource for strength athletes that could not afford coaching service. The app is available to to download on both iOS and Android AppStore."],
        images: [
            {
                url: '/images/attempt_calculator.jpg',
                backgroundColor: '#E8032E'
            }
        ],
        technologies: [
            {
                "name": "java",
                backgroundColor: 'bg-yellow-900',
                "textColor": 'text-white'
            },
            {
                "name": "swift",
                backgroundColor: 'bg-orange-500',
                "textColor": 'text-white'
            },
            {
                "name": "javascript",
                backgroundColor: 'bg-yellow-500',
                "textColor": 'text-white'
            },
            {
                "name": "🐧 linux (debian)",
                backgroundColor: 'bg-gray-500',
                "textColor": 'text-white'
            },
            {
                "name": "N nginx",
                backgroundColor: 'bg-green-600',
                "textColor": 'text-white'
            },
        ],
        links: [
            {
                'name': 'demo',
                'url': 'https://attempt-calculator.jaw.dev/'
            },
            {
                'name': 'github (ios)',
                'url': 'https://github.com/wajeht/powerlifting-attempt-selection-calculator-ios'
            },
            {
                'name': 'github (android)',
                'url': 'https://github.com/wajeht/powerlifting-attempt-selection-calculator-android'
            },
            {
                'name': 'github (web)',
                'url': 'https://github.com/wajeht/powerlifting-attempt-selection-calculator-web'
            }
        ]
    },

    {
        title: 'care amarillo',
        subtitle: '(windows, c#)',
        descriptions: ["A window desktop application that I've contributed which was intend to built for city of Amarillo, TX as a classroom project. The CareAmarillo System enables system users to find information on registered human services as well as emergency shelters."],
        images: [
            {
                url: '/images/care_amarillo.jpg',
                backgroundColor: '#F0F0F0'
            }
        ],
        technologies: [
            {
                "name": "🦈 mysql",
                backgroundColor: 'bg-yellow-400',
                "textColor": 'text-white'
            },
            {
                "name": "wpf",
                backgroundColor: 'bg-gray-400',
                "textColor": 'text-white'
            },
            {
                "name": "c#",
                backgroundColor: 'bg-violet-900',
                "textColor": 'text-white'
            }
        ],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/care-amarillo'
            }
        ]
    },
])

</script>
<template>
    <div class="lg:columns-2 sm:columns-1">
        <Card :class="{ 'mb-4': i != projects?.length - 1 }" class="lg:h-full lg:w-full lg:break-inside-avoid-column"
            v-once v-for="p, i in projects" :key="i" :title="p.title" :subtitle="p.subtitle" :wip="p.wip"
            :descriptions="p.descriptions" :technologies="p.technologies" :images="p.images" :links="p.links" />
    </div>
</template>