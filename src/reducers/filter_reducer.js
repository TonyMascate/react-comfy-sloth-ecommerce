import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((price) => {
        return price.price;
      });
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      };
    case SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      };
    case SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        filtered_products: tempProducts,
      };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price } = state.filters;
      let timeProducts = [...all_products];
      // Filtering
      // Text
      if(text) {
        timeProducts = timeProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text)
        })
      }
      // Categories
      if(category !== 'all'){
        timeProducts = timeProducts.filter(product => {
          return product.category === category
        })
      }
      // Marques
      if(company !== 'all') {
        timeProducts = timeProducts.filter((product) => {
          return product.company === company
        })
      }
      // Couleurs
      if(color !== 'all') {
        timeProducts = timeProducts.filter((product) => {
          return product.colors.find((c) => c === color)
        })
      }
      // Prix
        timeProducts = timeProducts.filter((product) => {
          return product.price <= price
        })
      return {
        ...state,
        filtered_products: timeProducts,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      break;
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
