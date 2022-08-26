<script setup lang="ts">


interface Card {
    id?: number;
    title: String;
    descriptions: string[];
    technologies?: string[];
    links?: string[];
}

const projects = ref<Card[]>([
    {
        id: 0,
        title: 'gains',
        descriptions: ['lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!']
    },
    {
        id: 1,
        title: 'training log v2',
        descriptions: ["Currently in the process of building second iteration of the training vlog app I've built few months ago."]
    },
    {
        id: 2,
        title: 'check-in systems',
        descriptions: ["Built a check-in systems for amarillo college computer lab to track student and guest to track each visit during covid period!"]
    },
    {
        id: 3,
        title: 'jawstrength',
        descriptions: ["Built a full-stack Nodejs web application for my coaching services. I have implemented E-commerce style where user able to buy specific services. I wrote the whole style from scratch; did not use any CSS library!"]
    },
    {
        id: 4,
        title: 'training log v1',
        descriptions: ["Build full-stack web application to log training videos with respect to training split. This app has features such as users being able to post their training videos and comments. I intend to use it personally and also for my future clients."]
    },
    {
        id: 5,
        title: 'unique login (web)',
        descriptions: ["Built a simply over engineered full-stack web application that spits out unique login credentials. I was inspired by the window's version that I've developed last year; I wanted to abe to use it anywhere I go. Its font-end is running as NGINX as static file and Nodejs as an API end point."]
    },
    {
        id: 6,
        title: 'shift scheduler',
        descriptions: ["Built this cross platform desktop application for the local restaurant called 'Sushi House', while I was working there as sushi chef. This application saved numerous of time for the owner to create shifts for server ever single week within a click of a button!"]
    },
    {
        id: 7,
        title: 'unique login (windows)',
        descriptions: ["Built this window's form desktop application for my brother who likes to generate random passwords and unique usernames for his gaming credentials. It uses combination of animal names, verbs, adjectives and names for username and random alphabets, numeric and special characters for password."]
    },
    {
        id: 8,
        title: 'powerlifting attempt calculator (web, ios, android)',
        descriptions: ["A free application that is written in native technology for Web, iOS, and Android. I've built this in needs of free resource for strength athletes that could not afford coaching service. The app is available to to download on both iOS and Android AppStore."]
    },
    {
        id: 9,
        title: 'care amarillo (windows, c#)',
        descriptions: ["A window desktop application that I've contributed which was intend to built for city of Amarillo, TX as a classroom project. The CareAmarillo System enables system users to find information on registered human services as well as emergency shelters."]
    },
])

</script>
<template>
    <template class="flex flex-col gap-5">
        <Card v-for="p, i in projects" :key="p.id" :id="p.id" :title="p.title" :descriptions="p.descriptions" />
    </template>
</template>