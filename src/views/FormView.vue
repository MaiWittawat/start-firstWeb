<template>
    <div>
        <button @click="count++" class="text-white"> Add 1  </button>
            <div v-if="count < 0" class="text-white"> Count is {{count = 0}} </div>
            <div v-if="count >= 0" class="text-white">Count is {{count}}</div>
        <button @click="count--" class="text-white"> De 1 </button>
        
        <div class="text-white">this is onchange</div>
        <input type="text" @change="count++">
        <div class="text-white">count is {{count}}</div>
        <div>
            <p class="text-white">Message is : {{message}} </p>
            <input type="text" v-model="message">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count : 0,
            message:"hello"
        }
    }

}
</script>

<style>

</style>