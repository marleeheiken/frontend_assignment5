import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../CartItem";

describe("CartItem Component", () => {
  const item = {
    id: 1,
    name: "Pen",
    price: 1.99
  };

  test("renders without crashing", () => {
    render( <CartItem /> );
  });

  test("displays item name and price", () => {
    render(<CartItem {...item} onRemove={() => {}} />);

    expect(screen.getByText("Pen")).toBeInTheDocument();
    expect(screen.getByText(/1.99/)).toBeInTheDocument();
  });

  test("calls onRemove when Remove button is clicked", () => {
    const mockRemove = vi.fn();

    render(<CartItem {...item} onRemove={mockRemove} />);

    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});
