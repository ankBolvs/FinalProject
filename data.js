module.exports = function () {
  return {
    user: [
      {
        user_id: "on2RbQScGnMl5Sm6rvqwofjnUH42",
        name: "Harshita",
        email: "harshita@example.com",
        groups: [101, 102],
      },
      {
        user_id: "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
        name: "Batman",
        email: "rohan@example.com",
        groups: [101],
      },
      {
        user_id: "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2",
        name: "Ankur",
        email: "sneha@example.com",
        groups: [101, 103],
      },
      {
        user_id: "FC3qcrh5lySeKDJapQdTktBIw8v1",
        name: "Arjun",
        email: "arjun@example.com",
        groups: [102],
      },
    ],
    groups: [
      {
        group_id: 101,
        group_name: "Goa Trip",
        created_by: "on2RbQScGnMl5Sm6rvqwofjnUH42",
        expenses: [501, 502, 503],
        members: [
          "on2RbQScGnMl5Sm6rvqwofjnUH42",
          "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
          "FC3qcrh5lySeKDJapQdTktBIw8v1",
        ],
      },
      {
        group_id: 102,
        group_name: "Office Party",
        created_by: "FC3qcrh5lySeKDJapQdTktBIw8v1",
        expenses: [504, 505],
        members: [
          "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2",
          "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
          "FC3qcrh5lySeKDJapQdTktBIw8v1",
        ],
      },
      {
        group_id: 103,
        group_name: "Birthday Bash",
        created_by: "FC3qcrh5lySeKDJapQdTktBIw8v1",
        expenses: [506],
        members: [
          "on2RbQScGnMl5Sm6rvqwofjnUH42",
          "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
        ],
      },
      {
        group_id: 104,
        group_name: "Weekend Getaway",
        created_by: "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
        expenses: [507, 508, 509],
        members: [
          "on2RbQScGnMl5Sm6rvqwofjnUH42",
          "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
          "FC3qcrh5lySeKDJapQdTktBIw8v1",
          "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2",
        ],
      },
      {
        group_id: 105,
        group_name: "Flatmates",
        created_by: "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2",
        expenses: [510, 511],
        members: [
          "on2RbQScGnMl5Sm6rvqwofjnUH42",
          "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
          "FC3qcrh5lySeKDJapQdTktBIw8v1",
        ],
      },
    ],

    expenses: [
      {
        expense_id: 501,
        group_id: 101,
        description: "Hotel Booking",
        amount: 6000,
        paid_by: "on2RbQScGnMl5Sm6rvqwofjnUH42",
        date: "2025-08-15",
        users: ["K6GPnwsVbNcR4xIv6kLWd0XYAiu2", "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2"],
      },

      {
        expense_id: 502,
        group_id: 101,
        description: "Dinner at Beach Shack",
        amount: 2400,
        paid_by: "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
        date: "2025-08-16",
        users: ["on2RbQScGnMl5Sm6rvqwofjnUH42", "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2"],
      },

      {
        expense_id: 503,
        group_id: 101,
        description: "Scooter Rental",
        amount: 1500,
        paid_by: "fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2",
        date: "2025-08-17",
        users: ["on2RbQScGnMl5Sm6rvqwofjnUH42"],
      },

      {
        expense_id: 504,
        group_id: 102,
        description: "Snacks & Drinks",
        amount: 1800,
        paid_by: "FC3qcrh5lySeKDJapQdTktBIw8v1",
        date: "2025-07-10",
        users: ["on2RbQScGnMl5Sm6rvqwofjnUH42", "K6GPnwsVbNcR4xIv6kLWd0XYAiu2"],
      },

      {
        expense_id: 505,
        group_id: 102,
        description: "Decorations",
        amount: 1200,
        paid_by: "K6GPnwsVbNcR4xIv6kLWd0XYAiu2",
        date: "2025-07-11",
        users: ["on2RbQScGnMl5Sm6rvqwofjnUH42", "FC3qcrh5lySeKDJapQdTktBIw8v1"],
      },

      {
        expense_id: 506,
        group_id: 103,
        description: "Cake & Gifts",
        amount: 3000,
        paid_by: "FC3qcrh5lySeKDJapQdTktBIw8v1",
        date: "2025-06-20",
        users: ["fYm6n5tpC8Qwg6J3TZ9t0QkLq3N2"],
      },
    ],
  };
};
