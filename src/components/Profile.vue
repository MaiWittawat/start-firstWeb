<template>
    <div class="w-1/3 inline-block mt-5 ml-7 hover:scale-105 hover:shadow-black outline-double ; block ; p-6 ; max-w-sm ; bg-gray-300 ; rounded-lg ; border ; border-gray-900 ; shadow-md ; hover:bg-gray-100 ; dark:bg-gray-800 ; dark:border-gray-700 ; dark:hover:bg-gray-700">
        <link rel="stylesheet" href="../style.css">
        <img class="outline-double  ml-4 rounded-lg" src="../assets/image/deviling.png" alt="">
        <h1 class="text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{{name}}</h1>
        <h1 class="text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{{nickname}}</h1>
        <h1 class="text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">{{study}}</h1>
        <h1 id="name">{{birthday}}</h1>    
        <font-awesome-icon icon="fa-brands fa-facebook" class="text-3xl ml-56 mt-1  "/>
        <font-awesome-icon icon="fa-brands fa-instagram" class="text-3xl ml-1" />
        <font-awesome-icon icon="fa-brands fa-github" class="text-3xl ml-1"/>
    </div>
</template>
<script>
    export default {
        props: {
            name : {
                type : String,
                required : true
            },
            nickname : {
                type : String,
                required : true
            },
            study : {
                type : String,
                default : ""
            },
            birthday : {
                type : String,
                default : "xx - xx - xxxx"
            },
            image:{
                type : String,
                default : "../assets/image/deviling.png"
            }
        },
        methods:{
            getUrlImage(imagePath){
                return imagePath 
            }
        }
    }
</script>