import React, { useEffect } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function Layout({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <main>
      <header>
        <InertiaLink href={route('page.home')}>Home | </InertiaLink>
        <InertiaLink href={route('page.about')}>About | </InertiaLink>
        <InertiaLink href={route('page.contact')}>Contact</InertiaLink>
      </header>

      <article>{children}</article>
    </main>
  )
}
