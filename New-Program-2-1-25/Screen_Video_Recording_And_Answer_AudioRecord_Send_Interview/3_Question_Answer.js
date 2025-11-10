/* Question :- Review this embedded document query calculation within a customer collection.
It should total purchases, but unexpected results appear. Spot the anomaly and adjust
*/

/*
const pipeline = [
  { $unwind: "$purchases" },
  { $group: { _id: "$customer_id", total: { $avg: "$purchases.amount" } } },
];
const totals = db.customers.aggregate(pipeline);
*/

/* 
Determine the error and clarify how the operation should work.
*/

// Answer :-
const pipeline = [
  // Step 1: Break down the purchases array so each purchase is a separate document
  { $unwind: "$purchases" },

  // Step 2: Group by customer_id and sum all purchase amounts
  {
    $group: {
      _id: "$customer_id",
      total: { $sum: "$purchases.amount" }, // ✅ Changed from $avg → $sum
    },
  },
];

const totals = db.customers.aggregate(pipeline);

/*
| Step | Stage     | Purpose                                                            | Example Result                                         |
| ---- | --------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| 1    | `$unwind` | Expands the `purchases` array so each purchase is its own document | One document per purchase per customer                 |
| 2    | `$group`  | Groups all purchases by `customer_id`                              | Allows aggregation functions like `$sum`, `$avg`, etc. |
| 3    | `$sum`    | Adds up all `purchases.amount` values for each customer            | Produces correct total                                 |

*/
