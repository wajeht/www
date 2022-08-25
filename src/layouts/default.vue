<template>
  <div class="lg:flex">
    <!-- sidebar -->
    <aside
      class="flex flex-col justify-between bg-[color:#0B0A08] text-[color:#FBF0DF] lg:h-screen lg:flex-[35%] p-5 text-end">

      <!-- top -->
      <div class="lg:mt-[170px]">
        <div class="flex flex-col gap-5">
          <!-- image -->
          <div class="flex justify-center lg:justify-end ">
            <img class="w-24 h-24 sm:text-center sm:justify-center sm:content-center rounded-full border-solid border-2
          border-stone-400" src="../assets/jaw.jpg">
          </div>

          <!-- name and description -->
          <div class="flex justify-center lg:justify-end ">
            <div class="flex flex-col">

              <span class="flex gap-2 justify-end">
                <!-- emo -->
                <span class="animate-wave">👋</span>
                <!-- description name -->
                <span>
                  <span class="font-light">
                    hi there, this is
                  </span>
                  <span class="font-bold">
                    Jaw!
                  </span>
                </span>
              </span>

              <!-- description -->
              <p class="text-white">a competitive powerlifter...</p>
            </div>
          </div>

          <!-- nav -->
          <Nav />

        </div>
      </div>

      <!-- side bar copyright -->
      <div class="hidden lg:block font-light text-xs text-zinc-500">© 2022 jaw.dev. All Rights Reserved.</div>
    </aside>

    <!-- main -->
    <main
      class="flex flex-col justify-between gap-3 lg:flex-[65%] bg-[color:#15140E] overflow-y-scroll text-[color:#FBF0DF]  p-5">
      <div class="lg:max-w-[65%] lg:mt-[290px]">
        <slot />
      </div>

      <!-- main bar copyright -->
      <div class="lg:hidden sm:block text-center font-light text-xs text-zinc-500">© 2022 jaw.dev.
        All Rights
        Reserved.</div>
    </main>
  </div>
</template>