import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ExperienceTab from "../../components/ExperienceTab";
import { Experience } from "../../data/interfaces";

const experiences: Experience[] = [
  {
    id: "0",
    company: "Acme Corp",
    roleKey: "exp_0_role",
    typeKey: "exp_0_type",
    locationKey: "exp_0_location",
    startDate: "01/2024",
    endDate: "Present",
    responsibilities: [{ taskKey: "exp_0_task_1" }, { taskKey: "exp_0_task_2" }],
  },
  {
    id: "1",
    company: "Widgets Inc",
    roleKey: "exp_1_role",
    typeKey: "exp_1_type",
    locationKey: "exp_1_location",
    startDate: "01/2020",
    endDate: "12/2023",
    responsibilities: [{ taskKey: "exp_1_task_1" }],
  },
];

describe("ExperienceTab component", () => {
  test("renders a tab per experience and shows the first company's detail by default", () => {
    render(<ExperienceTab experiences={experiences} />);

    expect(screen.getByRole("tab", { name: "Acme Corp" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(screen.getByRole("tab", { name: "Widgets Inc" })).toHaveAttribute(
      "aria-selected",
      "false"
    );
    expect(screen.getByText(/bash — acme-corp/)).toBeInTheDocument();
  });

  test("clicking a company tab switches the detail panel to it", async () => {
    const user = userEvent.setup();
    render(<ExperienceTab experiences={experiences} />);

    await user.click(screen.getByRole("tab", { name: "Widgets Inc" }));

    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Widgets Inc" })).toHaveAttribute(
        "aria-selected",
        "true"
      )
    );
    expect(screen.getByText(/bash — widgets-inc/)).toBeInTheDocument();
  });

  test("clicking a dot indicator also switches the active experience", async () => {
    const user = userEvent.setup();
    render(<ExperienceTab experiences={experiences} />);

    const dots = screen.getAllByRole("button", { name: /Zu Erfahrung \d wechseln/ });
    expect(dots).toHaveLength(experiences.length);

    await user.click(dots[1]);

    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Widgets Inc" })).toHaveAttribute(
        "aria-selected",
        "true"
      )
    );
  });

  test("arrow-down/up within the tab list moves between companies", async () => {
    const user = userEvent.setup();
    render(<ExperienceTab experiences={experiences} />);

    screen.getByRole("tab", { name: "Acme Corp" }).focus();
    await user.keyboard("{ArrowDown}");

    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Widgets Inc" })).toHaveAttribute(
        "aria-selected",
        "true"
      )
    );

    await user.keyboard("{ArrowUp}");

    await waitFor(() =>
      expect(screen.getByRole("tab", { name: "Acme Corp" })).toHaveAttribute(
        "aria-selected",
        "true"
      )
    );
  });

  test("renders one log entry per responsibility for the active company", () => {
    render(<ExperienceTab experiences={experiences} />);
    const list = screen.getByRole("list", { hidden: false });
    expect(list.querySelectorAll("li")).toHaveLength(
      experiences[0].responsibilities.length
    );
  });
});
