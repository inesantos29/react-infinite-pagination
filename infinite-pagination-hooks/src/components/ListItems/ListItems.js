/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Item } from '../Item'
import { Loader } from '../Loader'
import './style.css'

function ListItems() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [perPage] = useState(100)
  const [totalItems, setTotalItems] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getItems()
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      page === totalItems ||
      loading
    ) {
      return
    }

    setPage(page + 1)
  }

  function getItems() {
    setLoading(true)

    const apiRoot = 'https://sf-legacy-api.now.sh'

    axios.get(`${apiRoot}/items?page=${page}&_limit=${perPage}`).then((res) => {
      setItems([...items, ...res.data.data])
      setTotalItems(res.totalItems / perPage)
      setLoading(false)
    })
  }

  function changeBackground(id) {
    let getSavedIds = localStorage.getItem('ids')
    getSavedIds = getSavedIds
      ? getSavedIds.split(',').filter((savedId) => id === savedId)
      : ''
    return getSavedIds
  }

  function handleChangeColor(e) {
    let ids = localStorage.getItem('ids')
    ids = ids ? ids.split(',') : []

    const clickedEl = e.currentTarget

    if (clickedEl.classList.contains('greyBg')) {
      ids = ids.filter((id) => id !== clickedEl.id)
      clickedEl.classList.remove('greyBg')
    } else {
      ids = ids.filter((id) => id !== clickedEl.id)
      ids.push(clickedEl.id)
      clickedEl.classList.add('greyBg')
    }

    localStorage.setItem('ids', ids.toString())
  }

  return (
    <>
      <div className="item-list">
        {items.map((item) => {
          let background = changeBackground(item.id)
          return (
            <Item
              key={item.id}
              id={item.id}
              index={item.absoluteIndex}
              name={item.name}
              background={background.toString()}
              onClick={handleChangeColor}
            />
          )
        })}
      </div>
      {loading && page > 1 && <Loader />}
    </>
  )
}

export default ListItems
