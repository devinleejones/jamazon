var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        name: 'Black Beauty',
        brand: 'Ludwig',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://static.bax-shop.nl/image/product/153173/302981/0c2d119f/450x450/Meinl_HE_124_darbuka.jpg'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: []
}

renderAppState(app)

document
  .querySelector('[data-view = details]')
  .addEventListener('click', function (event) {
    var $cart = event.target.closest('.btn-danger')
    if (!$cart) return
    var $currentItem = app.details.item
    app.cart.push($currentItem)
    renderAppState(app)
  })

document
  .querySelector('[data-view]')
  .addEventListener('click', function (event) {
    var $item = event.target.closest('.card')
    if (!$item) return
    var itemNum = parseInt($item.getAttribute('data-item-id'), 10)
    var myItem = findItem(itemNum, app.catalog.items)
    app.details.item = myItem
    app.view = 'details'
    renderAppState(app)
  })

function renderCartCount(cart) {
  var count = 0
  for (var i = 0; i < cart.length; i++) {
    count = count + 1
  }
  var $cart =
  createElement('div', {class: 'cart-item-count float-right pr-3 pt-3 text-light'}, ['Cart (' + cart.length + ')'])
  return $cart
}

renderCartCount(app)

function showView(view) {
  var $views = document.querySelectorAll('[data-view]')
  for (var i = 0; i < $views.length; i++) {
    var $view = $views[i]
    if ($view.getAttribute('data-view') === view) {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}

function renderAppState(state) {
  var $cart = document.querySelector('.cart')
  var $catalog = document.querySelector('[data-view="' + state.view + '"]')
  if (state.view === 'catalog') {
    $catalog.innerHTML = ''
    $cart.innerHTML = ''
    $cart.appendChild(renderCartCount(app.cart))
    $catalog.appendChild(renderCatalog(state.catalog.items))
  }
  else {
    $catalog.innerHTML = ''
    $cart.innerHTML = ''
    $cart.appendChild(renderCartCount(app.cart))
    $catalog.appendChild(renderCatalogItemDetails(state.details.item))
  }
  showView(state.view)
}

function findItem(itemID, catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    if (itemID === catalogItems[i].itemId) {
      return catalogItems[i]
    }
  }
}

function renderCatalogItemDetails(catalogItem) {
  var $itemDetails =
  createElement('div', {class: 'container-fluid p-4 bg-dark'}, [
    createElement('div', {class: 'card border-danger', style: 'width: 40rem; margin: 0 auto;'}, [
      createElement('img', {class: 'card-img-top', src: catalogItem.imageUrl}, []),
      createElement('h5', {class: 'card-title pt-4 ml-4 text-center'}, [catalogItem.name, ' - ',
        createElement('span', {class: 'text-black-50 font-italic text-center'}, [catalogItem.description])
      ]),
      createElement('div', {class: 'card-body'}, [
        createElement('p', {class: 'card-text'}, [catalogItem.details])
      ]),
      createElement('div', {class: 'card-footer'}, [
        createElement('p', {class: 'card-text text-success text-right pr-2 pt-1'}, [('$' + catalogItem.price)]),
        createElement('button', {class: 'btn-danger p-2 float-right rounded'}, ['Add to Cart'])
      ])
    ])
  ])
  return $itemDetails
}

function renderCatalog(catalog) {
  var $catalog = createElement('div', { class: 'container-fluid bg-dark pt-4', style: 'height: 100%;' }, [
    createElement('h1', {class: 'text-center text-light font-weight-light pt-4'}, ['Jamazon'])])
  var $row = createElement('div', { class: 'row align-items-stretch pb-4', style: 'height: auto;' }, [])
  $catalog.appendChild($row)
  for (var i = 0; i < catalog.length; i++) {
    var $col = createElement('div', { class: 'col-md-3 d-flex', style: 'height: auto' }, [])
    var $catalogItem = renderItem(catalog[i])
    $col.appendChild($catalogItem)
    $row.appendChild($col)
  }
  return $catalog
}

function renderItem(item) {
  var $card =
    createElement('div', { class: 'card border-danger align-self-stretch mt-4 py-2 pr-4 pl-4 w-100 d-flex', 'data-item-id': item.itemId }, [
      createElement('h5', {class: 'card-title'}, [item.name]),
      createElement('div', {class: 'd-flex', style: 'height: 18.75rem;'}, [
        createElement('img', { class: 'card-img pt-4 align-self-center', src: item.imageUrl }, [])
      ]),
      createElement('h4', {class: 'card-text text-black-50 font-italic mt-4'}, [item.brand,
        createElement('span', {class: 'card-text text-success float-right'}, ['$' + item.price])
      ])
    ])
  return $card
}

function createElement(tagName, attributes, children) {
  var $element = document.createElement(tagName)
  if (attributes) {
    for (var name in attributes) {
      var value = attributes[name]
      $element.setAttribute(name, value)
    }
  }
  for (var i = 0; i < children.length; i++) {
    var child = children[i]
    if (child instanceof Node) {
      $element.appendChild(child)
    }
    else {
      var textNode = document.createTextNode(child)
      $element.appendChild(textNode)
    }
  }
  return $element
}
