import Vue from "vue";
import Vuex from "vuex";
import appointmentData from "@/assets/appointments.json";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theAppointments: [...appointmentData]
  },
  getters: {
    countBookings: state => {
      return state.theAppointments.length;
    }
  },
  mutations: {
    ADD_APPOINTMENT: (state, appointment) => {
      state.theAppointments.push(appointment);
    },
    REMOVE_APPOINTMENT: (state, appointment) => {
      state.theAppointments.splice(appointment, 1);
    }
  },
  actions: {
    removeAppointment: (context, appointment) => {
      context.commit("REMOVE_APPOINTMENT", appointment);
    }
  }
});