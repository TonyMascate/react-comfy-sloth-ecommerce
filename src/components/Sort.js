import React, { useState } from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'
const Sort = () => {
  const { filtered_products: products, grid_view, setListView, setGridView, sort, updateSort } = useFilterContext()

  const [active, setActive] = useState(false)

  return <Wrapper>
    <div className="btn-container">
      <button
        type='button'
        className={`${grid_view && 'active'}`}
        onClick={setGridView}
      >
        <BsFillGridFill />
      </button>
      <button
        type='button'
        className={`${!grid_view && 'active'}`}
        onClick={setListView}
      >
        <BsList />
      </button>
    </div>
    <p>{products.length} produits trouvés</p>
    <hr />
    <form>
      <label htmlFor="sort">Trier par</label>
      <select 
      name="sort" 
      id="sort" 
      value={sort}
      onChange={updateSort}
      className='sort-input'
      >
        <option value="price-lowest">Prix (croissant)</option>
        <option value="price-highest">Prix (décroissant)</option>
        <option value="name-a">Nom (A - Z)</option>
        <option value="name-z">Nom (Z - A)</option>
      </select>
    </form>
    {/* <div className="sort">
      <p>Trier par </p>
      <div className="sort-input">
        <div className="content">
          <p>{sort}</p>
          <button onClick={() => setActive(!active)}>
            <IoMdArrowDropdown/>
          </button>
        </div>
        <div className={`dropdown ${active && 'active'}`}>
          <hr />
          <p>Prix (croissant)</p>
          <p>Prix (décroissant)</p>
          <p>Nom (A - Z)</p>
          <p>Nom (Z - A)</p>
        </div>
      </div>
    </div> */}
  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  form {
    .sort-input {
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      padding: 0.25rem;
    }
    label {
      margin-right: 10px;
    }
  }
  // .sort{
  //   display: flex;
  //   align-items: center;
  //   .sort-input{
  //     position: relative;
  //     width: fit-content;
  //     .content{
  //       display: flex;
  //       align-items: center;
  //       z-index: 200;
  //       padding-left: 10px;
  //       button{
  //         background: none;
  //         border: none;
  //       }
  //       p{
  //       margin-right: 15px;
  //       }
  //     }
  //     .dropdown{
  //       z-index: 100;
  //       width: max-content;
  //       position: absolute;
  //       left: 0;
  //       top: 24px;
  //       opacity: 0;
  //       padding-bottom: 10px;
  //       border: 2px solid grey;
  //       border-top: none;
  //       transition: 0.5s ease all;
  //       hr{
  //         margin-bottom: 5px;
  //       }
  //       p{
  //         padding: 0 10px 0 8px;
  //       }
  //       p:hover{
  //         cursor: pointer;
  //         background: #D3D3D3;
  //       }
  //     }
  //     .active{
  //       opacity: 1;
  //       background: white;
  //     }
  // }
  label {
    font-size: 1rem;
  }
`;

export default Sort
