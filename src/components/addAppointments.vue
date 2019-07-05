<template>
    <div class="panel panel-primary">
        <div class="panel-heading apt-addheading" @click="toggleShow">
            <span class="glyphicon glyphicon-plus" /> Add Appointment
        </div>
        <div class="panel-body" :class="[{hide: !showForm}]">
            <form class="add-appointment form-horizontal" @submit.prevent="addAppointmentForm">
                <div class="form-group">
                    <label class="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
                <div class="col-sm-10">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Pet's Name"
                    v-model="petName"
                    />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" htmlFor="petOwner">
                    Pet Owner
                </label>
                <div class="col-sm-10">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Owner's Name"
                    v-model="ownerName"
                    />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" htmlFor="aptDate">
                    Date
                </label>
                <div class="col-sm-4">
                    <input
                    type="date"
                    class="form-control"
                    id="aptDate"
                    ref="inputAptDate"
                    v-model="aptDate"
                    />
                </div>
                <label class="col-sm-2 control-label" htmlFor="aptTime">
                    Time
                </label>
                <div class="col-sm-4">
                    <input
                    type="time"
                    class="form-control"
                    id="aptTime"
                    ref="inputAptTime"
                    v-model="aptTime"
                    />
                </div>
            </div>
                <div class="form-group">
                <label class="col-sm-2 control-label" htmlFor="aptNotes">
                    Apt. Notes
                </label>
                <div class="col-sm-10">
                    <textarea
                    class="form-control"
                    rows="4"
                    cols="50"
                    id="aptNotes"
                    ref="inputAptNotes"
                    placeholder="Appointment Notes"
                    v-model="aptNotes"
                    />
                </div>
                </div>
                <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary pull-right">
                    Add Appointment
                    </button>
                </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>

import { mapMutations } from "vuex";

export default {
    name: "addAppointments",
    data(){
        return{
            petName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: '',
            showForm: null
        }
    },
    methods: {
        ...mapMutations([
            'ADD_APPOINTMENT'
        ]),
        toggleShow: function(){
            this.showForm = !this.showForm
        },
        addAppointmentForm: function(){
            const appointmentData  = {
                petName: this.petName,
                ownerName: this.ownerName,
                aptDate: `${this.aptDate} ${this.aptTime}`,
                aptNotes: this.aptNotes
            }
            this.ADD_APPOINTMENT(appointmentData)

            this.petName = '';
            this.ownerName = '';
            this.aptDate = '';
            this.aptTime = '';
            this.aptNotes = '';
            this.showForm = false;
        }
    }
}
</script>

<style>

</style>

