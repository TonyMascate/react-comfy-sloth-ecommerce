import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* recherche */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Rechercher"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* fin de recherche */}
          {/* Categories */}
          <div className="form-control">
            <h5>Catégories</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Fin de Categories */}
          {/* Marques */}
          <div className="form-control">
            <h5>Marques</h5>
            <select
              name="company"
              id="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* fin de Marques */}
          {/* Couleurs */}
          <div className="form-control">
            <h5>Couleurs</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                      style={{ background: c }}
                      data-color="all"
                      onClick={updateFilters}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    className={`color-btn ${color === c && "active"}`}
                    style={{ background: c }}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Fin Couleurs */}
          {/* Prix */}
          <div className="form-control">
            <h5>Prix</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              id="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              step="1000"
              className='slider'
            />
          </div>
          {/* Fin de Prix */}
          {/* Livraison */}
          <div className="form-control shipping">
            <label htmlFor="shipping">Livraison gratuite</label>
            <input type="checkbox" name="shipping" id="shipping" onChange={updateFilters} checked={shipping}/>
          </div>
          {/* Fin de Livraison */}
        </form>
        <button type='button' className="clear-btn" onClick={clearFilters}>
              Effacer les filtres
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 25px;
  }
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #0769ff;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #0769ff;
    cursor: pointer;
    border-radius: 50%;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
    input[type="checkbox"] {
      position: relative;
      cursor: pointer;
    }
    input[type="checkbox"]:before {
      content: "";
      display: block;
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      border: 2px solid #555555;
      border-radius: 3px;
      background-color: white;
    }
    input[type="checkbox"]:checked:after {
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid black;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 6px;
    }
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
