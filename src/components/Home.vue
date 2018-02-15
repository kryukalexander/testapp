<template>
    <div class="cars-list">
        <h1>{{test}}</h1>
        <ul>
            <li v-for="car in cars" >
                <router-link :to="'cars/' + car.name">Go to {{ car.name }}</router-link>
                <ul>
                    <li v-for="model in car.models">{{model.name}}</li>
                </ul>
            </li>
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
    let carsRef = db.ref('cars');

    export default {
        name: 'Home',
        firebase: {
            cars: carsRef,
        },
        data () {
            return {
                test: 'It works'
            }
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cars-list {
        width: 400px;
        max-width: 100%;
        text-align: left;
    }
</style>
