import React, { lazy, Suspense } from 'react'
import { AppLayout } from 'MicroContainer/components/layout'
import BookList from '../pages/bookList'

const BookCategory = lazy(() => import('../pages/categoryList'))

export default [
  {
    path: '/book',
    element: <AppLayout />,
    name: 'bookLisst',
    children: [
      {
        path: '/book/list',
        element: <BookList />,
        name: 'bookList'
      }
    ]
  },

  // {
  //   path: '/book/list',
  //   element: <BookList />,
  //   name: 'bookList'
  // },
  {
    path: '/book-category',
    element: <BookCategory />,
    name: 'bookCategory'
  }
]
