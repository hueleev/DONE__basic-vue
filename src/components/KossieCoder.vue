<template>
    <div>
        <p>header</p>
        <slot name="header" :kossie="kossie"></slot>
        <h1>{{ title }}</h1>
        <p>Body</p>
        <p>{{ name }}</p>
        <slot></slot>
        <p>footer</p>
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
            kossie: 'coder'
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