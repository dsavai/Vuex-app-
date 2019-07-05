<template>
  <div class="interface">
    <div className="appointment-list">
      <appointment-lists />
    </div>
  </div>
</template>

<script>
import appointmentLists from '@/components/appointmentLists';
export default {
  name: 'main-app',
  components: {
    'appointment-lists': appointmentLists
  }
}
</script>

<style>

</style>


