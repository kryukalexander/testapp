<template>
    <div>
        <h1>{{test}}</h1>
        <ul>
            <li v-for="todo in todos" >{{ todo.text }}</li>
        </ul>
    </div>
</template>

<script>
    import Firebase from 'firebase';

    let config = {
        apiKey: "AIzaSyC4hmBR-OcnaGtkLe8O72uZfLpf1VeSuMg",
        authDomain: "test-todo-app-c7154.firebaseapp.com",
        databaseURL: "https://test-todo-app-c7154.firebaseio.com",
        projectId: "test-todo-app-c7154",
        storageBucket: "test-todo-app-c7154.appspot.com",
        messagingSenderId: "563346292110"
    };

    let app = Firebase.initializeApp(config);
    let db = app.database();
    let todos = db.ref('todo-list');

    export default {
        name: 'todo',
        data () {
            return {
                todos: todos,
                test: 'It works'
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
