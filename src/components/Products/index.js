import React from 'react'
import "./Products.css"
import Cards from '../Cards'

const products = [
  { name: 'Cafe Mocha', id: 1, image: '/card1.png', link: 'https://github.com/victorjrcandido', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' },
  { name: 'Cappuccino', id: 2, image: '/card2.png', link: 'https://github.com/victorjrcandido', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' },
  { name: 'Cafe Latte', id: 3, image: '/card3.png', link: 'https://github.com/victorjrcandido', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' },
  { name: 'Espresso', id: 4, image: '/card4.png', link: 'https://github.com/victorjrcandido', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' },
];

const listItems = products.map(product =>
  <Cards src={product.image} id={product.id} name={product.name} href={product.link} text={product.text} />
);

const Products = () => {
  return (
    <div className='products-container'>
      <div className='products-section'>
        <h2 className='product-heading'>Nosso cardápio</h2>
        <div className='card-section'>
          {/* <Cards src='/card1.png' name='Cafe' href='google.com' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' />
          <Cards src='/card1.png' name='Cafe' href='google.com' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' />
          <Cards src='/card1.png' name='Cafe' href='google.com' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' />
          <Cards src='/card1.png' name='Cafe' href='google.com' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor ut laoreet rhoncus.' /> */}
          {listItems}
        </div>
      </div>
      <p className='freepik'>Imagem de <a href='https://br.freepik.com/'>Freepik</a></p>
    </div>
  )
}

export default Products