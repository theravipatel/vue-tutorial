# Vue Tutorial Practice

## 1) Install Node

## 2) Install Vue CLI
```
- npm install -g @vue/cli
```

## 3) Create App
```
- vue create blog
- cd blog && npm run serve
```

## 4) Interpolation
```
- print string {{ "hello" }}
```

## 5) Property Define
```
- export default {
    name: "HomeComponent",
    data() {
        return {
            email: "test@test.com",
            name: "Ravi Patel",
            getValue: function() {
                return "Function Value";
            }
        }
    }
}
```

## 6) Methods
```
- <h1>{{ getData("Hello") }}</h1>
- <h1>{{ getData2().name }}</h1>
- export default {
    name: "HomeComponent",
    methods: {
        getData(val) {
            return val,
        },
        getData2() {
            name: 'Ravi Patel',
        }
    }
}
```

## 7) Events
```
- <button v-on:click="getClickData('Single Clicked');">Single Click</button> 
- <button v-on:dblclick="getClickData('Double Clicked');">Double Click</button> 
```

## 8) Two Way Binding
```
- <input type="text" v-model="bind_val"> - {{ bind_val }}
```

## 9) Get input value
```
- <input type="text" v-model="text1" placeholder="Text 1"><br><br>
- <input type="text" v-model="text2" placeholder="Text 2"><br><br>
- <button v-on:click="getInputValue()">Get Value</button>
- export default {
    name: "HomeComponent",
    data() {
        return {
            text1: null,
            text2: null,
        }
    },
    methods: {
        getInputValue() {
            console.warn("Input values : ",this.text1,this.text2);
        }
    }
  }
```

## 10) Get Checkbox & Radio Button Value
```
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

...

export default {    
    name: "HomeComponent",
    data() {
        return {
            technology: [],
            profession: null,
        }
    },
}
```

## 11) if else conditions
```
<h3 v-if="show">If Block</h3>
<h3 v-else>Else Block</h3>
<button v-on:click="show=!show">Toggle Show</button>

...

export default {    
    name: "HomeComponent",
    data() {
        return {
            show: true,
        }
    },
}
```

## 12) For Loop and List
```
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
...

export default {    
    name: "HomeComponent",
    data() {
        return {
            fruit:['Apple','Banana','Mango','Orange'],
            users:[
                { name: 'User 1', email: 'user1@test.com' },
                { name: 'User 2', email: 'user2@test.com' },
                { name: 'User 3', email: 'user3@test.com' },
            ],
        }
    },
}
```

## 13) Pass Data Parent to Child Component
- Patent Component:
```
<ChildPage title="Test String" :fruit="fruit" :parentFunction="parentFunction" />

...

export default {    
    name: "HomeComponent",
    data() {
        return {
            fruit:['Apple','Banana','Mango','Orange'],
        }
    },
    methods: {
        parentFunction() {
            alert("Parent function called.");
        }
    }
}
```

- Child Component:
```
<h3>Passed Static String: {{ title }}</h3>    
<h3>Passed Object: {{ fruit }}</h3> 
<button v-on:click="parentFunction()">Call Parent Function</button>   

...

export default {
    name: 'ChildPage',
    props: {
        title: String,
        fruit: Object,
        parentFunction: Function
    }
}
```

## 14) Reuse Component
```
<ul>
    <li v-for="item in users" :key="item">
        <UserPage :item="item" :getClickData="getClickData" />
    </li>
</ul>

```

## 15) HTML Binding
```
<div v-html="tag1 + tag2"></div>

...

export default {    
    name: "HomeComponent",
    data() {
        return {
            tag1: '<h2>Tag 1</h2>',
            tag2: '<h2>Tag 2</h2>',
        }
    },
}

```

## 16) CSS Class Binding
```
<h3 class="otherClass1" :class="{ green:bgColor, yellow:true }">Ravi Patel</h3>
<h3 class="otherClass2" :class="applyStyle">Ravi Patel</h3>
<button v-on:click="bgColor=!bgColor">Toggle BG</button>

...

export default {
    name: "HomePage",
    data() {
        return {
            bgColor:true,
        }
    },
    computed: {
        applyStyle() {
            return {
                green: this.bgColor,
                red: true,
            }
        }
    }
}

```

## 17) Send data from child to parent data component
- Parent Component:
```
<h3>Name : {{ childName }}</h3>
<Child2 :parentFunction2="parentFunction2" />

...

export default {
    name: 'ChildPage',
    data() {
        return {
            childName: '',
        }
    },
    methods: {
        parentFunction2(childName) {
            this.childName = childName;
        }
    }
}

```

- Child Component:
```
<button v-on:click="parentFunction2(childName)">Call Parent Function 2</button>  

...

export default {
    name: 'ChildPage',
    data() {
        return {
            childName: 'Test 1',
        }
    },
    props: {
        parentFunction2: Function
    }
}
```
## 18) Routing
- Install route package
```
npm install vue-router@next
```

- Create routes.js file (can be put in src folder) and add following code
```
import {createWebHashHistory,createRouter} from 'vue-router'; //must have
import Home from './components/Home.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
```

- In main.js file, integrate router and update code as below
```
import router from './routes'

createApp(App).use(router).mount('#app')
```

## 19) Dynamic Routing
- In routes.js
```
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'AboutPage',
        path: '/about-us',
        component: AboutPage
    },
    {
        name: 'ProfilePage',
        path: '/profile/:name',
        component: ProfilePage
    },
];
```

- In ProfilePage.vue, to get param data, need to import useRoute and use as below
```
<script>
import { useRoute } from 'vue-router'

export default {
    name: 'ProfilePage',
    data(){
        return {
            profile_name: '',
        }
    },
    mounted() {
        const route = useRoute();
        this.profile_name = route.params.name;
    },
}
</script>
```

## 20) Page Not Found
- Create page for 404 and add route in routes.js as below
```

```