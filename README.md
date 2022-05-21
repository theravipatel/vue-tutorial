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