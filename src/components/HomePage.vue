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
<h2>Reuse Component</h2>
<ul>
    <li v-for="item in users" :key="item">
        <UserPage :item="item" :getClickData="getClickData" />
    </li>
</ul>

<hr>
<h2>HTML Binding</h2>
<div v-html="tag1 + tag2"></div>

<hr>
<h2>CSS Class Binding</h2>
<h3 class="otherClass1" :class="{ green:bgColor, yellow:true }">Ravi Patel</h3>
<h3 class="otherClass2" :class="applyStyle">Ravi Patel</h3>
<button v-on:click="bgColor=!bgColor">Toggle BG</button>

<hr>
<h2>Send data from Child to Parent Component</h2>
<h3>Name : {{ childName }}</h3>
<Child2 :parentFunction2="parentFunction2" />

<hr>
<h2>Ref: Get OR Set DOM's Value</h2>
<input type="text" name="ref_name" id="ref_name" ref="ref_name">
<button v-on:click="getRefVal();">Get Ref Value</button>

<hr>
<h2>Form with Validation</h2>

<form class="main-form">
    <div class="form-block">
        <label for="form_email">E-Mail</label>
        <input type="text" name="form_email" id="form_email" v-model="form.form_email">
    </div>
    <div class="form-block">
        <label for="form_password">Password</label>
        <input type="text" name="form_password" id="form_password" v-model="form.form_password">
    </div>
    <div class="form-block">
        <label for="form_country">Country: </label>
        <select name="form_country" id="form_country" v-model="form.form_country">
            <option value="">--</option>
            <option value="India">India</option>
            <option value="Israel">Israel</option>
            <option value="Japan">Japan</option>
        </select>
    </div>
    <div class="form-block">
        <label>Gender: </label>
        <input type="radio" name="form_gender" value="Female" v-model="form.form_gender"> Female
        <input type="radio" name="form_gender" value="Male" v-model="form.form_gender"> Male
    </div>
    <div class="form-block">
        <label>Technology: </label>
        <input type="checkbox" name="form_technology_php" id="form_technology_php" value="PHP" v-model="form.form_technology"> PHP
        <input type="checkbox" name="form_technology_java" id="form_technology_java" value="Java" v-model="form.form_technology"> Java
        <input type="checkbox" name="form_technology_net" id="form_technology_net" value=".Net" v-model="form.form_technology"> .Net
    </div>

    <div class="form-block">
        <button type="button" v-on:click="form_login()">Submit</button>
    </div>

    <div class="form-block">
        Form Data: {{ form }}
    </div>
    <div class="form-block">
        Form Error:
        <ul>
            <li v-for="item in form_error" :key="item">
               {{ item }} not valid
            </li>
        </ul>
    </div>
</form>

<hr>
</template>

<script>
import ChildPage from "./ChildPage.vue";
import UserPage from "./UserPage.vue";
import Child2 from "./Child2.vue";
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
            bgColor:true,
            childName: '',
            form_error: [],
            fruit: ["Apple", "Banana", "Mango", "Orange"],
            users: [
                { name: "User 1", email: "user1@test.com" },
                { name: "User 2", email: "user2@test.com" },
                { name: "User 3", email: "user3@test.com" },
            ],
            tag1: '<h2>Tag 1</h2>',
            tag2: '<h2>Tag 2</h2>',
            getValue: function (val = "") {
                return val + " Test";
            },
            form: {
                form_email: '',
                form_password: '',
                form_country: '',
                form_gender: '',
                form_technology: [],
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
        },
        parentFunction2(childName) {
            this.childName = childName;
        },
        getRefVal() {
            this.$refs.ref_name.focus();
            console.log(this.$refs.ref_name.value);
            this.$refs.ref_name.style.backgroundColor = "gray";
            this.$refs.ref_name.style.color = "yellow";
        },
        form_login() {
            this.form_error = [];
            for(const item in this.form) {
                if(this.form[item] === '' || this.form[item].length === 0) {
                    this.form_error.push(item);
                }
            }

            if(this.form_error.length === 0) {
                alert("Form submitted successfully.");
            }
        }
    },
    components: { ChildPage, UserPage, Child2 },
    computed: {
        applyStyle() {
            return {
                green: this.bgColor,
                red: true,
            }
        }
    }
}
</script>

<style scoped>
h1 {
    color: darkslateblue;
}

h2 {
    color: crimson;
}
.green {
    background-color: lightgreen;
}
.yellow {
    color: yellow;
}
.red {
    color: crimson;
}
.main-form {
    border: 1px solid #333333;
    padding: 10px;
}
.main-form .form-block {
    padding: 10px;
}
.main-form .form-block label {
    font-weight: 500;
    width: 10%;
    display: inline-block;
}
</style>
