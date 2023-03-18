<script setup lang="ts">
const props = defineProps({
  error: Object,
});

if (props?.error?.statusCode) {
  clearError({ redirect: '/404' });
}
</script>
