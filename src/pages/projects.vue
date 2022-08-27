<script setup lang="ts">

type Technology = {
    name: string;
    textColor: string;
    backgroundColor: string;
}

type Link = {
    name: string;
    url: string;
}

interface Card {
    id?: number,
    title?: string,
    images?: string[],
    descriptions?: string[],
    technologies?: Technology[],
    links?: Link[],
}

const projects = ref<Card[]>([
    {
        id: 0,
        title: 'gains',
        descriptions: ['lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'],
        technologies: [
            {
                "name": "🐳 docker",
                backgroundColor: 'bg-sky-900',
                "textColor": 'text-white'
            },
            {
                "name": "🐘 postgres",
                backgroundColor: 'bg-blue-900',
                "textColor": 'text-white'
            }
        ],
        images: ['/images/blue.jpg'],
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
        id: 1,
        title: 'tvl-bucket',
        descriptions: ["video upload api"],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/tvl-bucket'
            }
        ]

    },
    {
        id: 2,
        title: 'training log v2',
        descriptions: ["Currently in the process of building second iteration of the training vlog app I've built few months ago."],
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
        id: 3,
        title: 'check-in systems',
        descriptions: ["Built a check-in systems for amarillo college computer lab to track student and guest to track each visit during covid period!"],
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
        id: 4,
        title: 'jawstrength',
        descriptions: ["Built a full-stack Nodejs web application for my coaching services. I have implemented E-commerce style where user able to buy specific services. I wrote the whole style from scratch; did not use any CSS library!"],
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
        id: 5,
        title: 'training log v1',
        descriptions: ["Build full-stack web application to log training videos with respect to training split. This app has features such as users being able to post their training videos and comments. I intend to use it personally and also for my future clients."],
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
        id: 6,
        title: 'unique login (web)',
        descriptions: ["Built a simply over engineered full-stack web application that spits out unique login credentials. I was inspired by the window's version that I've developed last year; I wanted to abe to use it anywhere I go. Its font-end is running as NGINX as static file and Nodejs as an API end point."],
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
        id: 7,
        title: 'shift scheduler (electron)',
        descriptions: ["Built this cross platform desktop application for the local restaurant called 'Sushi House', while I was working there as sushi chef. This application saved numerous of time for the owner to create shifts for server ever single week within a click of a button!"],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/shift-scheduler'
            }
        ]
    },
    {
        id: 8,
        title: 'unique login (windows, c#)',
        descriptions: ["Built this window's form desktop application for my brother who likes to generate random passwords and unique usernames for his gaming credentials. It uses combination of animal names, verbs, adjectives and names for username and random alphabets, numeric and special characters for password."],
        links: [
            {
                'name': 'github',
                'url': 'https://github.com/wajeht/unique-login'
            }
        ]
    },
    {
        id: 9,
        title: 'powerlifting attempt calculator (web, ios, android)',
        descriptions: ["A free application that is written in native technology for Web, iOS, and Android. I've built this in needs of free resource for strength athletes that could not afford coaching service. The app is available to to download on both iOS and Android AppStore."],
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
        id: 10,
        title: 'care amarillo (windows, c#)',
        descriptions: ["A window desktop application that I've contributed which was intend to built for city of Amarillo, TX as a classroom project. The CareAmarillo System enables system users to find information on registered human services as well as emergency shelters."],
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
    <template class="flex flex-col gap-5">
        <Card v-for="p, i in projects" :key="p.id" :id="p.id" :title="p.title" :descriptions="p.descriptions"
            :technologies="p.technologies" :images="p.images" :links="p.links" />
    </template>
</template>