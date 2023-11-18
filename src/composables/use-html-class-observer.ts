import { onMounted, onUnmounted, ref } from 'vue';

export function useHtmlClassObserver() {
  const isDarkMode = ref(false);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        isDarkMode.value = document.documentElement.classList.contains('dark');
      }
    });
  });

  onMounted(() => {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return { isDarkMode };
}
