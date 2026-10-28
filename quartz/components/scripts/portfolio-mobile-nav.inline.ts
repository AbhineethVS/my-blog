document.addEventListener("nav", () => {
  const sidebar = document.querySelector<HTMLElement>('body[data-slug="portfolio"] .sidebar.left')

  if (!sidebar) return

  const mobileViewport = window.matchMedia("(max-width: 800px)")
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  let frame: number | undefined

  const updateNavigation = () => {
    frame = undefined

    if (!mobileViewport.matches) {
      sidebar.style.removeProperty("opacity")
      sidebar.style.removeProperty("pointer-events")
      sidebar.style.removeProperty("transform")
      return
    }

    const fadeDistance = 120
    const progress = reducedMotion.matches
      ? Number(window.scrollY > 0)
      : Math.min(window.scrollY / fadeDistance, 1)

    sidebar.style.opacity = String(1 - progress)
    sidebar.style.transform = `translateY(${-12 * progress}px)`
    sidebar.style.pointerEvents = progress > 0.96 ? "none" : "auto"
  }

  const scheduleUpdate = () => {
    if (frame !== undefined) return
    frame = window.requestAnimationFrame(updateNavigation)
  }

  updateNavigation()
  window.addEventListener("scroll", scheduleUpdate, { passive: true })
  window.addEventListener("resize", scheduleUpdate)
  mobileViewport.addEventListener("change", scheduleUpdate)
  reducedMotion.addEventListener("change", scheduleUpdate)

  window.addCleanup(() => {
    window.removeEventListener("scroll", scheduleUpdate)
    window.removeEventListener("resize", scheduleUpdate)
    mobileViewport.removeEventListener("change", scheduleUpdate)
    reducedMotion.removeEventListener("change", scheduleUpdate)
    if (frame !== undefined) window.cancelAnimationFrame(frame)
  })
})
