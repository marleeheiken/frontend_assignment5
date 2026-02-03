import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";

describe("ProductCard Component", () => {

  test("renders without crashing", () => {
    render(<ProductCard/>);
  });

  test("displays product information from props", () => {
    render(<ProductCard name="Pen" price={1.99} />);
    expect(screen.getByText("Pen")).toBeInTheDocument();

    expect(screen.getByText(/1.99/)).toBeInTheDocument();
  });

  test('contains an "Add to Cart" button', () => {
    render(<ProductCard name="Pen" price={1.99} />);
    expect(screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  test('calls onAddToCart when "Add to Cart" button is clicked', () => {
    const addItem = vi.fn();
    const product = {
      id: 1,
      name: "Pen",
      price: 1.99,
      image: "https://placehold.co/600x400",
      description: "A pen"
    };
    
    render(<ProductCard 
      {...product} 
      onAddToCart={() => addItem(product)} 
    />);
    
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addToCartButton);
    
    expect(addItem).toHaveBeenCalledTimes(1);
    expect(addItem).toHaveBeenCalledWith(product);
  });

});
