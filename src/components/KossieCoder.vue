<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>    
</template>

<script>
export default {
    props: { // props는 직접적으로 변경이 불가하다. 
        title: {
            type: String,
            default: 'default Title'
        },
        name: {
            type: String,
            required: false
        }
    }, 
    data() {
        return {
        }
    },
    methods: {
        updateName() {
            this.name = 'Kossie Coder Updated'
        }
    }
}
</script>

<style scoped>

</style>