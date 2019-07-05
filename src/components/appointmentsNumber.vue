<template>
    <div>
        Currently there are <strong>{{ countBookings }}</strong> bookinngs
    </div>
</template>


<script>
//import getters from vuex
import { mapGetters } from "vuex";

export default {
    name: 'bookingsNumber',
    computed: {
        ...mapGetters([
            'countBookings'
        ])
    }
}
</script>

<style>

</style>

