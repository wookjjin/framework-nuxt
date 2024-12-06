<script setup lang="ts">
const supabase = useSupabaseClient()

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000',
    },
  })
  if (error)
    console.log(error)
}

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error)
    console.log(error)
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <div class="flex gap-4">
      <button type="button" class="btn__full--primary-lg" @click="signInWithOAuth">
        구글 계정으로 로그인
      </button>
      <button type="button" class="btn__full--secondary-lg" @click="signOut">
        로그아웃
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
