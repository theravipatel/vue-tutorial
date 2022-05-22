<template>
<h1>Home Page</h1>

<h2>Interpolation</h2>
<h3>Name: {{ "Ravi Patel" }}</h3>

<hr>
<h2>Property Define</h2>
<h3>Email: {{ email }}</h3>
<h3>Value from Function getValue(): {{ getValue() }}</h3>
<h3>Pass value to Function getValue("Hello"): {{ getValue("Hello") }}</h3>

<hr>
<h2>Methods</h2>
<h3>{{ getData("Hello") }}</h3>
<h3>{{ getData2().name }}</h3>
<h3>{{ getData3() }}</h3>

<hr>
<h2>Events</h2>
<button v-on:click="getClickData('Single Clicked');">Single Click</button>
<button v-on:dblclick="getClickData('Double Clicked');">Double Click</button>
<button v-on:click="increaseCounter()">Click to Increase Counter == {{ counter }}</button>

<hr>
<h2>Two Way Binding</h2>
<input type="text" v-model="bind_val"> - {{ bind_val }}

<hr>
<h2>Get Input Value</h2>
<input type="text" v-model="text1" placeholder="Text 1"><br><br>
<input type="text" v-model="text2" placeholder="Text 2"><br><br>
<button v-on:click="getInputValue()">Get Value</button>

<hr>
<h2>Get Checkbox & Radio Button Value</h2>
<div style="display: block;">
    <h4>Technology</h4>

    <label for="php">PHP</label>
    <input type="checkbox" name="php" id="php" value="PHP" v-model="technology">

    <label for="java">Java</label>
    <input type="checkbox" name="java" id="java" value="Java" v-model="technology">

    <label for="vue">VueJs</label>
    <input type="checkbox" name="vue" id="vue" value="VueJs" v-model="technology">
</div>
<div style="display: block;">
    <h4>Profession</h4>

    <label for="developer">Developer</label>
    <input type="radio" name="profession" id="developer" value="Developer" v-model="profession">

    <label for="student">Student</label>
    <input type="radio" name="profession" id="student" value="Student" v-model="profession">
</div>
<div style="display: block;">
    <h4>Selected Technology: {{ technology }}</h4>
    <h4>I am a: {{ profession }}</h4>
</div>

<hr>
<h2>If Else Conditions</h2>
<h3 v-if="show">If Block</h3>
<h3 v-else>Else Block</h3>
<button v-on:click="show=!show">Toggle Show</button>

<hr>
<h2>For Loop and List</h2>
<ul>
    <li>Fruits:
        <ol>
            <li v-for="item in fruit" :key="item">{{ item }}</li>
        </ol>
    </li>
    <li>Users:
        <ol>
            <li v-for="item in users" :key="item">
                Name: {{ item.name }}, Email: {{ item.email }}
            </li>
        </ol>
    </li>
</ul>

<hr>
<h2>Pass Data Parent to Child Component</h2>
<ChildPage title="Test String" :fruit="fruit" :parentFunction="parentFunction" />
<hr>
</template>

<script>
import ChildPage from "./ChildPage.vue";
export default {
    name: "HomePage",
    data() {
        return {
            counter: 0,
            bind_val: 0,
            email: "ravi@test.com",
            text1: null,
            text2: null,
            technology: [],
            profession: null,
            show: true,
            fruit: ["Apple", "Banana", "Mango", "Orange"],
            users: [
                { name: "User 1", email: "user1@test.com" },
                { name: "User 2", email: "user2@test.com" },
                { name: "User 3", email: "user3@test.com" },
            ],
            getValue: function (val = "") {
                return val + " Test";
            }
        };
    },
    methods: {
        getData(val) {
            return val;
        },
        getData2() {
            return "Ravi Patel";
        },
        getData3() {
            return {
                name: "Ravi Patel",
                email: "ravi@test.com",
            };
        },
        getClickData(val) {
            alert(val);
        },
        increaseCounter() {
            this.counter = this.counter + 1;
        },
        getInputValue() {
            console.warn("Input values : ", this.text1, this.text2);
        },
        parentFunction() {
            alert("Parent function called.");
        }
    },
    components: { ChildPage }
}
</script>

<style scoped>
h1 {
    color: darkslateblue;
}

h2 {
    color: crimson;
}
</style>
