<template>
    <!-- HTML -->
    <div >
        <div>
            <profileCard class="inline-block" v-for="member in members" :key="member"
            :name = "member.name"
            :nickname = "member.nickname"
            :study = "member.study"
            :birthday = "member.birthday"
        ></profileCard>
        </div>


        <!-- <profileCard 
        name = "Name : Chavit Sittitammajak" 
        nickname = "Nickname : Boost"
        study = "Study : KU81 CS36"
        birthday = "BirthDay : 02 - 06 - 2546"
        ></profileCard>

        <profileCard
        name = "Name : Nattapong Poungjinda"
        nickname = "Nickname : Rew"
        study = "Study : KU81 CS36"
        birthday = "BirthDay : 05 - 04 - 2546"        
        ></profileCard> -->
    </div>

</template>
<script>
    // JS
    import profileCard from "../components/Profile.vue"
    export default{
        data(){
            return{
                members:[
                    {
                        name : "Name : Wittawat Pinnarat",
                        nickname : "Nickname : Mai",
                        study : "Study : KU81 CS36",
                        birthday : "BirthDay : 01 - 01 - 2546",
                        isMember : true
                    },
                    {
                        name : "Name : Chavit Sittitammajak" ,
                        nickname : "Nickname : Boost",
                        study : "Study : KU81 CS36",
                        birthday : "BirthDay : 02 - 06 - 2546",
                        isMember : true
                    },
                    {
                        name : "Name : Nattapong Poungjinda",
                        nickname : "Nickname : Rew",
                        study : "Study : KU81 CS36",
                        birthday : "BirthDay : 05 - 04 - 2546",
                        isMember : true
                    },
                ],
            }
        },
        components : {
            profileCard
        }
    }
</script>
