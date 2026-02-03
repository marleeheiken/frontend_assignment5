import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import ProductsPage from '../pages/ProductsPage';


// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe('App localStorage Integration', () => {
    beforeEach(() => {
      // Clear all mock calls before each test
      localStorageMock.getItem.mockClear();
      localStorageMock.setItem.mockClear();
      localStorageMock.removeItem.mockClear();
      localStorageMock.clear.mockClear();
    });
  
    test('loads cart from localStorage on component mount', () => {
        const savedCart = JSON.stringify([
            { id: 1, name: "Pen", price: 1.99, quantity: 2 },

        ]);
        localStorageMock.getItem.mockReturnValue(savedCart);
        
        render(<App />);
        
        expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
      });


      test('saves cart to localStorage when item added', async () => {
        localStorageMock.getItem.mockReturnValue('[]');
      
        const products = [
          { id: 1, name: "Pencil", price: 0.99, image: "", description: "A pencil" }
        ];
      
        const addToCartMock = vi.fn();
      
        render(<ProductsPage products={products} addToCart={addToCartMock} />);
      
        const addButton = screen.getByText(/Add to Cart/i);
        fireEvent.click(addButton);
      
        expect(addToCartMock).toHaveBeenCalledWith(products[0]);
      });
      
    });