<template>
    <div class="todos">
        <h2>Todos list</h2>
        <b-container class="todos-container">
            <b-list-group>
                <b-list-group-item v-for="todo in todos" :key="todo.id" class="todo-item"> 
                    <b> {{ todo.title }} </b>
                </b-list-group-item>
            </b-list-group>

        </b-container>
    </div>
</template>

<script>
export default {
    name: "Todos",
    data() {
        return {
            
        }
    },

    computed: {
        todos() {
            return this.$store.state.todos;
        }
    }
}
</script>

<style>

.todos-container {
    text-align: left;
}

</style>