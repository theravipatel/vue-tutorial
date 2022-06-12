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