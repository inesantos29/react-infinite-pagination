import React, { Component } from 'react'
import axios from 'axios'
import { Item } from '../Item'
import { Loader } from '../Loader'
import './style.css'

class ListItems extends Component {
  state = {
    items: [],
    perPage: 100,
    page: 1,
    totalItems: null,
    scrolling: false,
    loading: true,
  }

  changeBackground(id) {
    let getSavedIds = localStorage.getItem('ids')
    getSavedIds = getSavedIds
      ? getSavedIds.split(',').filter((savedId) => id === savedId)
      : ''
    return getSavedIds
  }

  componentDidMount() {
    this.loadItems()

    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  loadItems = () => {
    this.setState({ loading: true })

    const { perPage, page, items } = this.state
    const apiRoot = 'https://sf-legacy-api.now.sh'

    axios.get(`${apiRoot}/items?page=${page}&_limit=${perPage}`).then((res) => {
      this.setState({
        items: [...items, ...res.data.data],
        scrolling: false,
        totalItems: res.totalItems,
      })
      this.setState({ loading: false })
    })
  }

  handleScroll = (e) => {
    const { scrolling, totalItems, page, loading } = this.state
    if (scrolling) return
    if (totalItems <= page || loading) return
    const lastDiv = document.querySelector(
      'div.item-list > div.item:last-child'
    )
    const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    let bottomOffset = 20
    if (pageOffset > lastDivOffset - bottomOffset) this.loadMore()
  }

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true,
        loading: true,
      }),
      this.loadItems
    )
  }

  handleChangeColor = (e) => {
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

  render() {
    const { items, page, loading } = this.state
    const itemList = items.map((item) => {
      let background = this.changeBackground(item.id)
      return (
        <Item
          key={item.id}
          id={item.id}
          index={item.absoluteIndex}
          name={item.name}
          background={background.toString()}
          onClick={this.handleChangeColor}
        />
      )
    })

    return (
      <>
        <div className="item-list">{itemList}</div>
        {loading && page > 1 && <Loader />}
      </>
    )
  }
}

export default ListItems
