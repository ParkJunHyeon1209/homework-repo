import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "./toggle";

describe("Toggle 컴포넌트", () => {
  test("1. 초기 상태는 OFF이다", () => {
    render(<Toggle />);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });

  test("2. 클릭하면 ON으로 바뀐다", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(screen.getByText("ON")).toBeInTheDocument();
  });

  test("3. 다시 클릭하면 OFF로 바뀐다", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    await userEvent.click(button);

    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
});
