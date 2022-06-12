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
- Create page for 404 i.e. "PageNotFoundPage.vue" and add route in routes.js as below
```
const routes = [
    {
        name: 'PageNotFoundPage',
        path: '/:pathMatch(.*)*',
        component: PageNotFoundPage
    },
];
```

## 21) Ref
- use: GET or SET DOM's value 
```
<input type="text" name="ref_name" id="ref_name" ref="ref_name">
<button v-on:click="getRefVal();">Get Ref Value</button>

<script>
methods: {
    getRefVal() {
        this.$refs.ref_name.focus();
        console.log(this.$refs.ref_name.value);
        this.$refs.ref_name.style.backgroundColor = "gray";
        this.$refs.ref_name.style.color = "yellow";
    }
}
</script>
```

## 22) Form with Validation
```
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
```
- Define form fields
```
<script>
export default {
    name: "HomePage",
    data() {
        return {
            form_error: [],
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
    }
}
</script>
```

## 23) Form Modifiers
```
<input type="text" v-model.lazy.number="form_modifier_data">
<p>Data value is:{{form_modifier_data}}</p>
<p>Data type is:{{ typeof(form_modifier_data) }}</p>
```

## 24) Non-Props Data
- Pass data to child without defining vars as props
- Default it will apply to parent/root div if available otherwise it will not apply.
- To apply it to particular div/element, add v-bind="$attrs" in that div/element 
- use 'inheritAttrs: false' to avoid applying it on root div/element

- Parent Page: HomePage.vue
```
<NonPropsPage prop_data="data1" non_prop_data="data2" />
```

- Child page: NonPropsPage.vue
```

<div>
    <h1>Test 1</h1>
    <h1>Test 2</h1>
    <h1 v-bind="$attrs">Test 2</h1>
</div>
<script>
export default {
    name: 'NonPropsPage',
    inheritAttrs: false,
    props: {
        prop_data: String
    }
}
</script>
```

## 25) Computed Property
- When there is more logic/opration in method, use computed property which is cache based on their reactive dependancies.
```
<div>
    <h3>Normal template expression: It will calculate everytime</h3>
    <p>{{ (dollar_value * rupee_value) - discount_value }}</p>
    <p>{{ (dollar_value * rupee_value) - discount_value }}</p>
</div>
<div>
    <h3>Computed expression: It is cache based</h3>
    <p>{{ getDollarToRupee }}</p>
    <p>{{ getDollarToRupee }}</p>
</div>
<script>
export default {
    name: 'HomePage',
    computed: {
        getDollarToRupee() {
            return (this.dollar_value * this.rupee_value) - this.discount_value;
        }
    }
}
</script>
```

## 26) Watchers 
- Allows us to watch a component and perform specified actions when the value of the component changes
```
<p>{{ my_watcher }}</p>
<button @click="my_watcher=my_watcher+1">+</button>
<button @click="my_watcher=my_watcher-1">-</button>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            my_watcher: 0;
        }
    },
    watch: {
        my_watcher(new_val, old_val) {
            alert("New Value=" + new_val + " - Old Val=" + old_val);
        }
    }
}
</script>
```

## 27) Basic Slot
- Pass a template fragment to a child component, and let the child component render the fragment within its own template.

- In HomePage.vue
```
<BasicSlotPage></BasicSlotPage>
<BasicSlotPage><h3>This is parent h3 tag pass to child using slot</h3></BasicSlotPage>
<BasicSlotPage>{{ slot_parent_msg }}</BasicSlotPage>

<script>
import BasicSlotPage from "./BasicSlotPage.vue";
export default {
    name: 'HomePage',
    components: { BasicSlotPage },
    data() {
        return {
            slot_parent_msg: 'test';
        }
    }
}
</script>
``` 

In BasicSlotPage.vue : "<h2>Slot Child Component Default Content</h2>" is default content when data is not pass it will render.
```
<template>
<slot><h2>Slot Child Component Default Content</h2></slot> 
</template>

<script>
export default {
    name: 'BasicSlotPage'
}
</script>
```

## 28) Multiple Named Slots
- In HomePage.vue
```
<NamedSlotPage>
    <template v-slot:header>
        <h3>
            Header
        </h3>
    </template>
    <template v-slot:content>
        <p>
            Content
        </p>
    </template>
    <template v-slot:footer>
        <h3>
            Footer
        </h3>
    </template>
</NamedSlotPage>


<script>
import NamedSlotPage from "./NamedSlotPage.vue";
export default {
    name: 'HomePage',
    components: { NamedSlotPage },
}
</script>
```

- In NamedSlotPage.vue 
```
<template>
    <div class="main-block">
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="content"></slot>
        </content>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'NamedSlotPage'
}
</script>
```

## 29) Dynamic Component
- Load component dynamically. It will not load all component in the page. switching between multiple components with <component :is="default_tab" >, a component will be unmounted when it is switched away from. We can force the inactive components to stay "alive" with the built-in <KeepAlive> component

- In HomePage.vue
```
<button @click="default_tab='Tab1Component'">Tab 1</button>
<button @click="default_tab='Tab2Component'">Tab 2</button>
<button @click="default_tab='Tab3Component'">Tab 3</button>

<component :is="default_tab" />

<script>
import Tab1Component from "./tab_component/Tab1Component.vue";
import Tab2Component from "./tab_component/Tab2Component.vue";
import Tab3Component from "./tab_component/Tab3Component.vue";
export default {
    name: 'HomePage',
    components: { BasicSlotPage },
    data() {
        return {
            default_tab: 'Tab1Component',
        }
    }
}
</script>
```

## 30) Teleport component
- <Teleport> is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

- In index.html - outside id='app' div
```
<div id="teleport_footer"></div>
```

- In HomePage.vue 
```
<Teleport to="#teleport_footer">
    <TeleportFooterPage></TeleportFooterPage>
</Teleport>

<script>
import TeleportFooterPage from "./TeleportFooterPage";
export default {
    name: 'HomePage',
    components: { TeleportFooterPage },
}
</script>
```

- In TeleportFooterPage.vue 
```
<template>
<h3> &copy; Copy right @Ravi Patel</h3>  
</template>

<script>
export default {
    name: 'TeleportFooterPage',
}
</script>
```

## 31) 'beforeCreate' and 'created' life cycle method
- beforeCreate: Called when the instance is initialized. Called immediately when the instance is initialized, after props resolution, before processing other options such as data() or computed.
- created: Called after the instance has finished processing all state-related options. When this hooks is called, the following have been set up: reactive data, computed properties, methods, and watchers. However, the mounting phase has not been started.

```
<script>
export default {
    name: 'HomePage',
    beforeCreate() {
        alert("beforeCreate method called.");
        console.log("beforeCreate method called.");
    },
    created() {
        alert("created method called.");
        console.log("created method called.");
    }
}
</script>
```


## 32) 'beforeMount' and 'mounted' life cycle method
- beforeMount: Called right before the component is to be mounted.When this hook is called, the component has finished setting up its reactive state, but no DOM nodes have been created yet. It is about to execute its DOM render effect for the first time.
- mounted: Called after the component has been mounted. 

```
<script>
export default {
    name: 'HomePage',
    beforeMount() {
        alert("beforeMount method called.");
        console.log("beforeMount method called.");
    },
    mounted() {
        alert("mounted method called.");
        console.log("mounted method called.");
    }
}
</script>
```

## 33) 'beforeUpdate' and 'updated' life cycle method
- beforeUpdate: Called right before the component is about to update its DOM tree due to a reactive state change.This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.
- updated: Called after the component has updated its DOM tree due to a reactive state change. This hook is called after any DOM update of the component, which can be caused by different state changes.

```
<p ref="text_update_life_cycle_var">{{ update_life_cycle_var }}</p>
<button @click="update_life_cycle_var=update_life_cycle_var+1">+</button>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            update_life_cycle_var: 0
        }
    },
    beforeUpdate() {
        console.warn("beforeUpdate method called.",this.$refs['text_update_life_cycle_var'].textContent);
    },
    updated() {
        console.warn("updated method called.",this.$refs['text_update_life_cycle_var'].textContent);
    }
}
</script>
```

## 34) 'beforeUnmount' and 'unmounted' life cycle method
- beforeUnmount: Called right before a component instance is to be unmounted. When this hook is called, the component instance is still fully functional.
- unmounted: Called after the component has been unmounted. All of its associated reactive effects (render effect and computed / watchers created during setup()) have been stopped.

- In HomePage.vue 
```
<ChildPage3 v-if="showChildPage3"></ChildPage3>
<button @click="showChildPage3=!showChildPage3">Toggle Page 3</button>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            showChildPage3: true
        }
    }
}
</script>
```

- In ChildPage3.vue 
```
<template>
<h2 ref="page_title">Child Page 3</h2>
</template>

<script>
export default {
    name: 'ChildPage3',
    beforeUnmount() {
        console.warn("beforeUnmount method called.",this.$refs['page_title']);
    },
    mounted() {
        console.warn("mounted method called.",this.$refs['page_title']);
    }
}
</script>
```

## 35) To work with API, need to intall Axios package

```
command: npm install axios
```

## 36) Get API
```
<p v-for="item in user_api_list" :key="item">
    {{ item.id }} --- <img :src="item.avatar" width="30" /> {{ item.first_name }} {{ item.last_name }}
</p>

<script>
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            user_api_list: [],
        }
    },
    mounted() {
        let result = await axios.get("https://reqres.in/api/users");
        console.warn("API response",result);
        this.user_api_list = result.data.data;
    }
}
</script>
```

## 37) Post API
```
<input type="text" name="api_email" v-model="api_email"> <br>
<input type="text" name="api_password" v-model="api_password"> <br>
<button v-on:click="user_login()">Submit API Data</button>

<script>
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            api_email: 'eve.holt@reqres.in',
            api_password: 'cityslicka',
        }
    },
    mothods: {
        async user_login() {
            let result = await axios.post("https://reqres.in/api/login", {
                email: this.api_email,
                password: this.api_password
            });
            console.warn("Post API response",result);
            if(result.status==200) {
                alert("Login Success. Token:"+ result.data.token);
            } else {
                alert("Login Fail. Error: "+result.statusText);
            }
        }
    }
}
</script>
```