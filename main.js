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
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLZ9k6Lb6bE8imuBEs0o0Wl_Rvvf_FhOBZUkuHXr5yaTFi4dY'
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
  }
}

renderAppState(app.catalog.items)

function renderAppState(state) {
  var $catalog = document.querySelector('[data-view="catalog"]')
  $catalog.appendChild(renderCatalog(state))
}

function renderCatalogItemDetails(catalogItem) {
  var $itemDetails =
  createElement('div', {class: 'container-fluid p-4 bg-dark'}, [
    createElement('div', {class: 'card border-danger', style: 'width: 40rem; margin: 0 auto;'}, [
      createElement('img', {class: 'card-img-top', src: catalogItem.imageUrl}, []),
      createElement('h5', {class: 'card-title ml-2'}, [catalogItem.name, ' - ',
        createElement('span', {class: 'text-black-50 font-italic'}, [catalogItem.description])
      ]),
      createElement('div', {class: 'card-body'}, [
        createElement('p', {class: 'card-text'}, [catalogItem.details])
      ]),
      createElement('div', {class: 'card-footer'}, [
        createElement('p', {class: 'card-text text-success text-right'}, [('$' + catalogItem.price)])
      ])
    ])
  ])
  return $itemDetails
}

console.log(renderCatalogItemDetails(app.catalog.items[0]))

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
    createElement('div', { class: 'card border-danger align-self-stretch mt-4 py-2 pr-4 pl-4 w-100 d-flex' }, [
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
