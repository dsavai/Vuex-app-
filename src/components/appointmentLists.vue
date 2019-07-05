<template>
    <div>
        <add-appointments />
        <appointments-number />
        <div class="pet-item media" v-for="(appointment, index) in theAppointments" :key="index">
            <div class="media-left">
                <button class="pet-delete btn btn-xs btn-danger">
                    <span class="glyphicon glyphicon-remove" @click="removeAppointments(index)"></span>
                </button>
            </div>
            <div class="pet-info media-body">
                <div class="pet-head">
                    <span class="pet-name">{{ appointment.petName }}</span>
                    <span class="apt-date pull-right">{{ appointment.aptDate }}</span>
                </div>
                <div class="owner-name">
                    <span class="label-item">
                        Owner: {{ appointment.ownerName}}
                    </span>
                </div>
                <div class="apt-notes">{{ appointment.aptNotes }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import addAppointments from "./addAppointments";
import appointmentsNumber from "./appointmentsNumber";

//helps us to import state form vuex
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "appointmes-lists",
    components: {
        "appointments-number": appointmentsNumber,
        "add-appointments": addAppointments
    },
    computed: {
        ...mapState([
            'theAppointments'
        ])
    },
    methods: {
        ...mapActions([
            'removeAppointment'
        ]),
        removeAppointments: function(appointment){
            this.removeAppointment(appointment)
        }
    }
}
</script>

 <style scoped>
    .btn{
        cursor: pointer;
    }
</style>





