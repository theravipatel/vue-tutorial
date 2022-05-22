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
