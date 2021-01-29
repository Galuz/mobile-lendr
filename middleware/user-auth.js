// eslint-disable-next-line
export default async function({ $auth, redirect }) {
  const user = $auth.$state.user
  const path = $auth.ctx.route.fullPath

  if (user) {
    if (!path.includes('logged-in')) {
      redirect('/logged-in')
    }
  } else if (path.includes('logged-in')) {
    redirect('/login')
  }
}
